"use client";

import React, { useState, useMemo } from "react";
import { Search, Sparkles, ArrowRight, ShieldCheck, Check, Layers, ChevronRight } from "lucide-react";
import { BrandData, BRANDS_DATA } from "@/data/brandsData";

interface BrandDirectoryProps {
  onSelectBrand: (brand: BrandData) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  limit?: number;
  hideFilters?: boolean;
  showViewAll?: boolean;
}

export default function BrandDirectory({ onSelectBrand, searchQuery = "", onSearchChange, limit, hideFilters = false, showViewAll = false }: BrandDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [localSearch, setLocalSearch] = useState<string>(searchQuery);

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

  return (
    <section id="products" className="brands-directory-section">
      <span id="brands" style={{ position: "relative", top: "-100px", display: "block", visibility: "hidden" }}></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="title-pill">
            <Sparkles size={14} /> AUTHORIZED DEALERSHIP & DISTRIBUTORSHIP
          </div>
          <h2 className="section-title">
            Global Brands, <span>Certified Excellence</span>
          </h2>
          <p className="section-subtitle">
            Click on any brand logo or card below to explore complete technical details, product catalogs, model ratings, and direct inquiry options.
          </p>
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
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Brands Grid */}
        <div className="brands-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
          {(limit ? filteredBrands.slice(0, limit) : filteredBrands).map((brand) => (
            <div
              key={brand.id}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
              }}
            >
              {/* Card Banner with Image */}
              <div style={{
                position: "relative",
                height: "160px",
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
                  backgroundImage: "url('/products_showcase.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(37, 99, 235, 0.85) 100%)",
                  zIndex: 1
                }} />

                <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.3)", padding: "0.3rem 0.8rem",
                    borderRadius: "50px", fontSize: "0.7rem", fontWeight: 700,
                    display: "flex", alignItems: "center", gap: "0.3rem", letterSpacing: "0.5px"
                  }}>
                    <ShieldCheck size={12} /> AUTHORIZED
                  </span>
                  <span style={{
                    background: "#1e3a8a", color: "#93c5fd",
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
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb", flexShrink: 0 }} />
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
                      background: "#eff6ff", color: "#2563eb",
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
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2563eb" }}>
                  View Product Line
                </span>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 10px rgba(37,99,235,0.3)"
                }}>
                  <ArrowRight size={14} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBrands.length === 0 && (
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
                background: "#1e40af", 
                color: "white", 
                padding: "1rem 2.5rem", 
                borderRadius: "8px", 
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(30, 64, 175, 0.3)"
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
