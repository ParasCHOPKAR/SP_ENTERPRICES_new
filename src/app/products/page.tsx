"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Download,
  Filter,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA, BrandData } from "@/data/brandsData";

const heroImageMap: Record<string, string> = {
  'eri': '/product_images/ERI_HERO.png',
  'cermet': '/product_images/Cermet_Resistive_hero.png',
  'cd-automation': '/product_images/CD_automation.png',
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const brandParam = searchParams.get("brand");
  const queryParam = searchParams.get("q");
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState<string>(queryParam || "");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  // If a brand query param is present, redirect to the brand detail page
  useEffect(() => {
    if (brandParam) {
      router.push(`/products/${brandParam}`);
    }
  }, [brandParam, router]);

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "relays", label: "Relays & Switching" },
    { id: "power", label: "SMPS & Power Resistors" },
    { id: "automation", label: "PLCs, HMIs & Software" },
    { id: "sensors", label: "Sensors & Instrumentation" },
    { id: "cleanroom", label: "Cleanroom & Pass Boxes" },
  ];

  const filteredBrands = BRANDS_DATA.filter((brand) => {
    // Under "All Products", show ONLY ERI
    if (activeCategory === "all") {
      if (brand.id.toLowerCase() !== "eri") {
        return false;
      }
    } else {
      const matchesCategory =
        (activeCategory === "relays" && brand.filterCategory === "relays") ||
        (activeCategory === "power" && brand.filterCategory === "power") ||
        (activeCategory === "automation" && (brand.filterCategory === "automation" || brand.id === "automation-software")) ||
        (activeCategory === "sensors" && (brand.filterCategory === "sensors" || brand.id === "honeywell")) ||
        (activeCategory === "cleanroom" && brand.filterCategory === "cleanroom");

      if (!matchesCategory) return false;
    }

    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

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

    return matchesQuery;
  });

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#93c5fd", borderColor: "rgba(255,255,255,0.25)" }}>
              <Cpu size={14} /> COMPLETE PRODUCT PORTFOLIO
            </div>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem" }}>
              Authorized Brands &amp; <span style={{ color: "#60a5fa" }}>Industrial Products</span>
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Click on any brand logo or card to inspect complete product specifications, model numbers, amperage ratings, and technical sheets.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Products Directory */}
      <section style={{ padding: "4.5rem 0", background: "#f8fafc" }}>
        <div className="container">
          {/* Controls Bar */}
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
                placeholder="Search across brands (e.g. SSR, SMPS, PID, LVDT)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* Quick Notice */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "0.9rem 1.4rem", borderRadius: "10px", marginBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "#1e3a8a", fontWeight: 600 }}>
              <Sparkles size={18} color="#2563eb" />
              <span>
                {activeCategory === "all"
                  ? "Showing Authorized Engineering Brand: ERI"
                  : `Showing ${filteredBrands.length} Authorized Engineering ${filteredBrands.length === 1 ? "Brand" : "Brands"}`}
              </span>
            </div>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <Download size={15} /> Download PDF Brochure (5.3 MB)
            </a>
          </div>

          {/* Brands Grid */}
          <div className="brands-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
            {filteredBrands.map((brand) => {
              const bgImage = heroImageMap[brand.id.toLowerCase()] || '/products_showcase.jpg';
              return (
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
                onClick={() => router.push(`/products/${brand.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/products/${brand.id}`);
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
                    backgroundImage: `url('${bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.1) 40%, rgba(15, 23, 42, 0.6) 100%)",
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
            );
            })}
          </div>

          {filteredBrands.length === 0 && (
            <div className="brand-empty-state">
              <Layers size={48} color="#94a3b8" />
              <h3>No products found for &quot;{searchQuery}&quot;</h3>
              <p>Try searching for general terms like &quot;Relays&quot;, &quot;SMPS&quot;, &quot;Controllers&quot;, or &quot;Pass Box&quot;.</p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading Products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
