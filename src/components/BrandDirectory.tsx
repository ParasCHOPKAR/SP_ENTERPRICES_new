"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Search, Sparkles, ArrowRight, ShieldCheck, Layers, ChevronRight, ChevronLeft, Pause, Play } from "lucide-react";
import { BrandData, BRANDS_DATA, BRAND_HERO_MAP } from "@/data/brandsData";

const getBrandBannerImage = (brand: BrandData): string => {
  if (brand.id === "weidmuller") {
    return "/product_hero_card/Weidmuller_hero.png";
  }
  if (brand.id === "cermet") {
    return "/product_images/Cermet_Resistive_hero.png";
  }
  if (brand.id === "eri") {
    return "/product_images/ERI_HERO.png";
  }
  return BRAND_HERO_MAP[brand.id] || brand.heroImage || "/product_hero_card/Weidmuller_hero.png";
};

interface BrandDirectoryProps {
  onSelectBrand: (brand: BrandData) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  limit?: number;
  hideFilters?: boolean;
  showViewAll?: boolean;
  asSlider?: boolean;
}

export default function BrandDirectory({ 
  onSelectBrand, 
  searchQuery = "", 
  onSearchChange, 
  limit, 
  hideFilters = false, 
  showViewAll = false,
  asSlider = true
}: BrandDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [localSearch, setLocalSearch] = useState<string>(searchQuery);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [isPausedByUser, setIsPausedByUser] = useState<boolean>(false);
  const [isHoveringCard, setIsHoveringCard] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const userInteractionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    { id: "all", label: "All Brands (13)" },
    { id: "relays", label: "Relays & I/O" },
    { id: "power", label: "Power & Resistors" },
    { id: "automation", label: "PLCs, HMIs & Software" },
    { id: "sensors", label: "Sensors & Field Instruments" },
    { id: "cleanroom", label: "Cleanroom & Pass Boxes" }
  ];

  const handleSearch = (val: string) => {
    setLocalSearch(val);
    if (onSearchChange) onSearchChange(val);
  };

  const filteredBrands = useMemo(() => {
    return BRANDS_DATA.filter((brand) => {
      const matchesCategory =
        activeCategory === "all" ||
        (activeCategory === "relays" && brand.filterCategory === "relays") ||
        (activeCategory === "power" && brand.filterCategory === "power") ||
        (activeCategory === "automation" && (brand.filterCategory === "automation" || brand.id === "automation-software")) ||
        (activeCategory === "sensors" && (brand.filterCategory === "sensors" || brand.id === "honeywell")) ||
        (activeCategory === "cleanroom" && brand.filterCategory === "cleanroom");

      const query = (localSearch || searchQuery).toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        brand.name.toLowerCase().includes(query) ||
        brand.fullName.toLowerCase().includes(query) ||
        brand.tagline.toLowerCase().includes(query) ||
        brand.overview.toLowerCase().includes(query) ||
        brand.categories.some((cat) =>
          cat.categoryName.toLowerCase().includes(query) ||
          cat.products.some((p) =>
            p.name.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query) ||
            (p.specs && p.specs.some((s) => s.toLowerCase().includes(query)))
          )
        );

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, localSearch, searchQuery]);

  const displayedBrands = useMemo(() => {
    return limit ? filteredBrands.slice(0, limit) : filteredBrands;
  }, [filteredBrands, limit]);

  // Track responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalPages = Math.max(1, Math.ceil(displayedBrands.length / cardsPerView));

  // Scroll to a specific card index by DOM offset
  const scrollToCard = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".brand-slider-card");
    if (!cards || cards.length === 0) return;

    const boundedIdx = ((index % cards.length) + cards.length) % cards.length;
    const targetCard = cards[boundedIdx];
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft - container.offsetLeft,
        behavior: "smooth"
      });
      setActiveCardIndex(boundedIdx);
    }
  }, []);

  // Update active index on scroll
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".brand-slider-card");
    if (!cards || cards.length === 0) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardPos = card.offsetLeft - container.offsetLeft;
      const diff = Math.abs(cardPos - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveCardIndex(closestIndex);
  }, []);

  // Smooth next card
  const scrollNext = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".brand-slider-card");
    if (!cards || cards.length === 0) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardPos = card.offsetLeft - container.offsetLeft;
      const diff = Math.abs(cardPos - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    const nextIdx = (closestIndex + 1) >= cards.length ? 0 : closestIndex + 1;
    scrollToCard(nextIdx);
  }, [scrollToCard]);

  // Smooth prev card
  const scrollPrev = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".brand-slider-card");
    if (!cards || cards.length === 0) return;

    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardPos = card.offsetLeft - container.offsetLeft;
      const diff = Math.abs(cardPos - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    const prevIdx = closestIndex <= 0 ? cards.length - 1 : closestIndex - 1;
    scrollToCard(prevIdx);
  }, [scrollToCard]);

  // Temporary interaction pause when user manually clicks controls
  const handleManualAction = (action: () => void) => {
    action();
    setIsHoveringCard(true);
    if (userInteractionTimerRef.current) clearTimeout(userInteractionTimerRef.current);
    userInteractionTimerRef.current = setTimeout(() => {
      setIsHoveringCard(false);
    }, 4000);
  };

  // Jump to specific slide page
  const scrollToPage = (pageIdx: number) => {
    handleManualAction(() => {
      scrollToCard(pageIdx * cardsPerView);
    });
  };

  // Autoplay timer: runs continuously every 3.2s unless explicitly paused or user actively hovering a card
  useEffect(() => {
    if (!asSlider || isPausedByUser || isHoveringCard || displayedBrands.length <= 1) return;

    const timer = setInterval(() => {
      scrollNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [asSlider, isPausedByUser, isHoveringCard, displayedBrands.length, scrollNext]);

  const activePage = Math.min(Math.floor(activeCardIndex / cardsPerView), totalPages - 1);

  const renderBrandCard = (brand: BrandData, isSliderCard: boolean) => (
    <div
      key={brand.id}
      className={isSliderCard ? "brand-slider-card" : "brand-card"}
      style={{
        background: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "pointer",
      }}
      onClick={() => onSelectBrand(brand)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectBrand(brand);
        }
      }}
      onMouseEnter={(e) => {
        setIsHoveringCard(true);
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(200, 16, 46, 0.15)";
      }}
      onMouseLeave={(e) => {
        setIsHoveringCard(false);
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
      }}
    >
      {/* Card Banner with Image */}
      <div style={{
        position: "relative",
        height: "175px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.2rem",
        color: "white",
        overflow: "hidden"
      }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${getBrandBannerImage(brand)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%)",
          zIndex: 1
        }} />

        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.3)", padding: "0.3rem 0.8rem",
            borderRadius: "50px", fontSize: "0.7rem", fontWeight: 700,
            display: "flex", alignItems: "center", gap: "0.3rem", letterSpacing: "0.5px"
          }}>
            <ShieldCheck size={12} /> VERIFIED PARTNER
          </span>
          <span style={{
            background: "#7f1d1d", color: "#fef08a",
            padding: "0.3rem 0.8rem", borderRadius: "6px",
            fontSize: "0.65rem", fontWeight: 800, letterSpacing: "1px"
          }}>
            {brand.filterCategory.toUpperCase()}
          </span>
        </div>
        
        <div style={{ position: "relative", zIndex: 2, marginTop: "auto" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.5px", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            {brand.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h4 style={{ fontSize: "0.95rem", color: "#0f172a", fontWeight: 800, marginBottom: "0.4rem" }}>
          {brand.fullName}
        </h4>
        <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, marginBottom: "1.5rem" }}>
          {brand.tagline}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
          {brand.categories.map((cat, cIdx) => (
            <div key={cIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8102e", flexShrink: 0 }} />
              <span style={{ fontSize: "0.82rem", color: "#334155", fontWeight: 600 }}>{cat.categoryName}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
          {brand.categories
            .flatMap((c) => c.products)
            .slice(0, 3)
            .map((p, pIdx) => (
              <span key={pIdx} style={{
                background: "#f1f5f9", color: "#475569",
                padding: "0.3rem 0.6rem", borderRadius: "6px",
                fontSize: "0.72rem", fontWeight: 500
              }}>
                {p.name.length > 22 ? p.name.slice(0, 22) + "..." : p.name}
              </span>
            ))}
          {brand.categories.flatMap((c) => c.products).length > 3 && (
            <span style={{
              background: "#fff1f2", color: "#c8102e",
              padding: "0.3rem 0.6rem", borderRadius: "6px",
              fontSize: "0.72rem", fontWeight: 700
            }}>
              +{brand.categories.flatMap((c) => c.products).length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div style={{
        padding: "1rem 1.5rem", borderTop: "1px solid #f1f5f9",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "#fafafa"
      }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#c8102e" }}>
          View Product Line
        </span>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "#c8102e", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 10px rgba(200,16,46,0.3)"
        }}>
          <ArrowRight size={14} color="white" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="products" className="brands-directory-section">
      <span id="brands" style={{ position: "relative", top: "-100px", display: "block", visibility: "hidden" }}></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="title-pill">
            <Sparkles size={14} /> GLOBAL DEALERSHIP & DISTRIBUTORSHIP
          </div>
          <h2 className="section-title">
            Global Brands, <span>Certified Excellence</span>
          </h2>
          <p className="section-subtitle">
            Click on any brand logo or card below to explore complete technical details, product catalogs, model ratings, and direct inquiry options.
          </p>
          {asSlider && (
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              background: "#fff1f2", 
              color: "#991b1b", 
              border: "1px solid #fecdd3", 
              padding: "0.35rem 0.95rem", 
              borderRadius: "50px", 
              fontSize: "0.8rem", 
              fontWeight: 700, 
              marginTop: "0.75rem" 
            }}>
              <Sparkles size={13} color="#c8102e" /> 13 Premier Global Brands &bull; Auto-sliding &bull; Swipe or click arrows
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        {!hideFilters && (
          <div className="brand-filters-container">
            <div className="brand-category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`brand-cat-btn ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="brand-filter-search">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by brand or product (e.g., SSR, SMPS, SCADA, Honeywell, Pass Box)..."
                value={localSearch || searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {(localSearch || searchQuery) && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => handleSearch("")}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        )}

        {/* Brand Display: Slider or Grid */}
        {asSlider ? (
          <div className="brand-slider-wrapper">
            {/* Floating Left Arrow */}
            <button
              type="button"
              onClick={() => handleManualAction(scrollPrev)}
              className="brand-slider-arrow brand-slider-arrow-prev"
              aria-label="Previous Brands"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scrollable Track */}
            <div 
              ref={sliderRef}
              className="brand-slider-track"
              onScroll={handleScroll}
            >
              {displayedBrands.map((brand) => renderBrandCard(brand, true))}
            </div>

            {/* Floating Right Arrow */}
            <button
              type="button"
              onClick={() => handleManualAction(scrollNext)}
              className="brand-slider-arrow brand-slider-arrow-next"
              aria-label="Next Brands"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Controls Bar */}
            <div className="brand-slider-controls">
              {/* Previous Nav Button */}
              <button
                type="button"
                className="brand-slider-nav-btn"
                onClick={() => handleManualAction(scrollPrev)}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Pagination */}
              <div className="brand-slider-dots">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`brand-slider-dot ${activePage === idx ? "active" : ""}`}
                    onClick={() => scrollToPage(idx)}
                    aria-label={`Go to slide page ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Nav Button */}
              <button
                type="button"
                className="brand-slider-nav-btn"
                onClick={() => handleManualAction(scrollNext)}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Counter */}
              <div className="brand-slider-counter">
                Brand {activeCardIndex + 1} of {displayedBrands.length} &bull; Page {activePage + 1} of {totalPages}
              </div>

              {/* Autoplay Pause/Resume Button */}
              <button
                type="button"
                className="brand-slider-autoplay-btn"
                onClick={() => setIsPausedByUser((prev) => !prev)}
                title={isPausedByUser ? "Resume auto-slider" : "Pause auto-slider"}
              >
                {!isPausedByUser ? <Pause size={13} /> : <Play size={13} />}
                <span>{!isPausedByUser ? "Autoplay On" : "Paused"}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="brands-grid">
            {displayedBrands.map((brand) => renderBrandCard(brand, false))}
          </div>
        )}

        {/* Empty State */}
        {displayedBrands.length === 0 && (
          <div className="brand-empty-state">
            <Layers size={48} color="#94a3b8" />
            <h3>No brands or products match &quot;{localSearch || searchQuery}&quot;</h3>
            <p>Try searching with another keyword like &quot;Relays&quot;, &quot;Power&quot;, &quot;Controllers&quot;, or &quot;Honeywell&quot;.</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setActiveCategory("all");
                handleSearch("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {showViewAll && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a 
              href="/products" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                background: "#c8102e", 
                color: "white", 
                padding: "1rem 2.5rem", 
                borderRadius: "8px", 
                fontWeight: 700,
                textDecoration: "none", 
                boxShadow: "0 4px 15px rgba(200, 16, 46, 0.3)"
              }}
            >
              Explore Complete Product Catalog <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
