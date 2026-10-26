"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Truck, 
  Package, 
  ShieldCheck, 
  ArrowRight, 
  Settings2, 
  Factory, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles 
} from "lucide-react";
import { MANUFACTURING_DATA, ManufacturingItem } from "@/data/manufacturingData";

export default function ManufacturingSection() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [isPausedByUser, setIsPausedByUser] = useState<boolean>(false);
  const [isHoveringCard, setIsHoveringCard] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const userInteractionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={28} />;
      case "Truck":
        return <Truck size={28} />;
      case "Boxes":
        return <Package size={28} />;
      case "Settings2":
        return <Settings2 size={28} />;
      case "Shield":
        return <ShieldCheck size={28} />;
      default:
        return <Factory size={28} />;
    }
  };

  const getDivisionOverlayText = (item: ManufacturingItem): string => {
    switch (item.id) {
      case "control-panels":
        return "Thyristor, VFD, APFC & Annunciator";
      case "material-handling":
        return "Conveyors, 90° Tilters & Lifters";
      case "glue-conveyors":
        return "Auto Box Folding & Hot Melt Gluing";
      case "special-purpose-machines":
        return "Hot Oil Units, Chillers & Skids";
      case "ss-fabrication":
        return "Cleanroom SS Furniture & Trolleys";
      default:
        return item.tagline;
    }
  };

  // Responsive cards-per-view tracking
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

  const totalPages = Math.max(1, Math.ceil(MANUFACTURING_DATA.length / cardsPerView));

  // Scroll to card by index
  const scrollToCard = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".mfg-slider-card");
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
    const cards = container.querySelectorAll<HTMLElement>(".mfg-slider-card");
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
    const cards = container.querySelectorAll<HTMLElement>(".mfg-slider-card");
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
    const cards = container.querySelectorAll<HTMLElement>(".mfg-slider-card");
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

  // Autoplay timer: runs continuously every 3.5s unless paused
  useEffect(() => {
    if (isPausedByUser || isHoveringCard || MANUFACTURING_DATA.length <= 1) return;

    const timer = setInterval(() => {
      scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPausedByUser, isHoveringCard, scrollNext]);

  const activePage = Math.min(Math.floor(activeCardIndex / cardsPerView), totalPages - 1);

  return (
    <section id="manufacturing" className="manufacturing-section" style={{ padding: "5rem 0", background: "#f8fafc" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="title-pill manufacturing-pill" style={{ background: "#fff1f2", color: "#c8102e", border: "1px solid #fecdd3", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            <Factory size={14} /> IN-HOUSE MANUFACTURING • SP ENTERPRISES
          </div>
          <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.2rem" }}>
            Custom &amp; Precision <span style={{ color: "#c8102e" }}>Engineering Process Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "800px", margin: "0 auto 1.5rem auto", lineHeight: 1.6 }}>
            Powered by SP Enterprises — 10+ years of expertise in SPMs, Hot Melt Packaging, Material Handling, Chillers, and Type-Tested Control Panels.
          </p>
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
            marginBottom: "2rem" 
          }}>
            <Sparkles size={13} color="#c8102e" /> 5 Turnkey Engineering Divisions &bull; Auto-sliding &bull; Swipe or click arrows
          </div>
        </div>

        {/* Manufacturing Slider */}
        <div className="mfg-slider-wrapper">
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={() => handleManualAction(scrollPrev)}
            className="brand-slider-arrow brand-slider-arrow-prev"
            aria-label="Previous Division"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={sliderRef}
            className="mfg-slider-track"
            onScroll={handleScroll}
          >
            {MANUFACTURING_DATA.map((item) => (
              <div 
                key={item.id} 
                className="mfg-slider-card"
                onMouseEnter={() => setIsHoveringCard(true)}
                onMouseLeave={() => setIsHoveringCard(false)}
              >
                {item.image && (
                  <div style={{ 
                    position: "relative", 
                    width: "100%", 
                    height: "205px", 
                    borderRadius: "12px", 
                    overflow: "hidden", 
                    marginBottom: "1.2rem", 
                    background: "#0f172a", 
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)" 
                  }}>
                    <img
                      src={item.image}
                      alt={item.shortTitle}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.45) 60%, transparent 100%)",
                      padding: "0.8rem 1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end"
                    }}>
                      <span style={{ color: "#ffffff", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.3px" }}>
                        {getDivisionOverlayText(item)}
                      </span>
                      <span style={{
                        background: "#c8102e",
                        color: "white",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "0.25rem 0.55rem",
                        borderRadius: "4px",
                        letterSpacing: "0.5px",
                        flexShrink: 0
                      }}>
                        SP ENTERPRISES
                      </span>
                    </div>
                  </div>
                )}
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                  <div style={{ color: "#c8102e" }}>
                    {getIcon(item.iconName)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Award size={14} color="#c8102e" /> 
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#c8102e", textTransform: "uppercase" }}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>
                  {item.shortTitle}
                </h3>
                
                <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: 1.55, marginBottom: "1.5rem", flex: 1 }}>
                  {item.tagline}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.3rem" }}>
                  {item.capabilities.slice(0, 2).map((cap, capIdx) => (
                    <div key={capIdx} style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8102e", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.78rem", color: "#334155", fontWeight: 600 }}>{cap.name}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/manufacturing/${item.id}`} 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    padding: "0.8rem 1.2rem", 
                    background: "#fff1f2", 
                    color: "#c8102e", 
                    borderRadius: "8px", 
                    textDecoration: "none", 
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#c8102e";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff1f2";
                    e.currentTarget.style.color = "#c8102e";
                  }}
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          {/* Floating Right Arrow */}
          <button
            type="button"
            onClick={() => handleManualAction(scrollNext)}
            className="brand-slider-arrow brand-slider-arrow-next"
            aria-label="Next Division"
          >
            <ChevronRight size={24} />
          </button>

          {/* Bottom Slider Controls */}
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
              Division {activeCardIndex + 1} of {MANUFACTURING_DATA.length} &bull; Page {activePage + 1} of {totalPages}
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

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link 
            href="/manufacturing" 
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
            Explore All Manufacturing Divisions <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
