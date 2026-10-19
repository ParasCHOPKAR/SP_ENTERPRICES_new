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
  ExternalLink,
  ChevronDown,
  Factory,
  Mail,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA, BrandCategory, ProductItem } from "@/data/brandsData";

const heroImageMap: Record<string, string> = {
  eri: "/product_images/ERI_HERO.png",
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const brandParam = searchParams.get("brand");
  const queryParam = searchParams.get("q");
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState<string>(queryParam || "");

  // Find ONLY ERI brand data
  const eriBrand = BRANDS_DATA.find((b) => b.id.toLowerCase() === "eri");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [queryParam]);

  const categories = [
    { id: "all", label: "All ERI Products" },
    { id: "relays", label: "Relays & Switching" },
    { id: "ssr", label: "Solid State Relays (SSR)" },
    { id: "io", label: "I/O Modules & Cards" },
  ];

  // Filter ERI categories and products based on selection & search
  const filteredCategories = (eriBrand?.categories || [])
    .map((cat) => {
      const matchesCat =
        activeCategory === "all" ||
        activeCategory === "relays" ||
        (activeCategory === "ssr" && cat.categoryName.toLowerCase().includes("solid state")) ||
        (activeCategory === "io" &&
          (cat.categoryName.toLowerCase().includes("input") ||
            cat.categoryName.toLowerCase().includes("i/o") ||
            cat.categoryName.toLowerCase().includes("interface")));

      if (!matchesCat) return null;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return cat;

      const filteredProducts = cat.products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.desc.toLowerCase().includes(query) ||
          (p.specs && p.specs.some((s) => s.toLowerCase().includes(query))) ||
          (p.badge && p.badge.toLowerCase().includes(query))
      );

      if (filteredProducts.length === 0) return null;

      return {
        ...cat,
        products: filteredProducts,
      };
    })
    .filter(Boolean) as BrandCategory[];

  const totalFilteredProducts = filteredCategories.reduce(
    (acc, cat) => acc + cat.products.length,
    0
  );

  const scrollToCatalog = () => {
    const el = document.getElementById("eri-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!eriBrand) {
    return (
      <div className="site-wrapper">
        <Header />
        <div style={{ padding: "8rem 2rem", textAlign: "center" }}>
          <h2>Product Data Loading...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const bgImage = heroImageMap["eri"] || "/product_images/ERI_HERO.png";

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section
        className="page-hero-banner"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)",
          padding: "4.5rem 0",
          color: "white",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "850px" }}>
            <div
              className="title-pill"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#93c5fd",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <Cpu size={14} /> AUTHORIZED DEALER &amp; SUPPLIER
            </div>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1.2rem",
              }}
            >
              Electronic Relays India <span style={{ color: "#60a5fa" }}>(ERI)</span> Products
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Explore authorized ERI Solid State Relays (SSR), Input/Output Modules, and Relay
              Interface Cards with complete specifications, technical ratings, and direct inquiry
              options.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Products Directory */}
      <section style={{ padding: "4rem 0", background: "#f8fafc" }}>
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
                placeholder="Search ERI products (e.g. Single Phase SSR, Three Phase, I/O Modules)..."
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

          {/* Quick Notice Banner */}
          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              padding: "0.9rem 1.4rem",
              borderRadius: "10px",
              marginBottom: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.88rem",
                color: "#1e3a8a",
                fontWeight: 600,
              }}
            >
              <Sparkles size={18} color="#2563eb" />
              <span>
                Authorized Engineering Partner: <strong>Electronic Relays India Pvt. Ltd. (ERI)</strong>
              </span>
            </div>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              style={{
                fontSize: "0.85rem",
                color: "#2563eb",
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Download size={15} /> Download PDF Brochure (5.3 MB)
            </a>
          </div>

          {/* Single ERI Brand Highlight Card */}
          <div style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Card Banner with Image */}
              <div
                style={{
                  position: "relative",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.8rem",
                  color: "white",
                  overflow: "hidden",
                }}
              >
                {/* Background Image & Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('${bgImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 50%, rgba(15, 23, 42, 0.7) 100%)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <ShieldCheck size={14} /> AUTHORIZED
                  </span>
                  <span
                    style={{
                      background: "#1e3a8a",
                      color: "#93c5fd",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "1px",
                    }}
                  >
                    RELAYS &amp; SWITCHING
                  </span>
                </div>

                <div style={{ position: "relative", zIndex: 2, marginTop: "2rem" }}>
                  <h2
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      letterSpacing: "-0.5px",
                      textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                      margin: 0,
                    }}
                  >
                    {eriBrand.name}
                  </h2>
                  <p style={{ color: "#93c5fd", fontSize: "0.95rem", margin: "0.3rem 0 0 0", fontWeight: 600 }}>
                    {eriBrand.fullName}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      color: "#0f172a",
                      fontWeight: 800,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {eriBrand.tagline}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      lineHeight: 1.6,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {eriBrand.overview}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {eriBrand.categories.map((cat, cIdx) => (
                      <div
                        key={cIdx}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#2563eb",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{ fontSize: "0.88rem", color: "#334155", fontWeight: 600 }}
                        >
                          {cat.categoryName} ({cat.products.length} models)
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {eriBrand.categories
                      .flatMap((c) => c.products)
                      .map((p, pIdx) => (
                        <span
                          key={pIdx}
                          style={{
                            background: "#f1f5f9",
                            color: "#475569",
                            padding: "0.3rem 0.65rem",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {p.name}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "2rem",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid #f1f5f9",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    onClick={scrollToCatalog}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      padding: "0.75rem 1.4rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                      transition: "background 0.2s",
                    }}
                  >
                    Explore ERI Product Catalog <ArrowRight size={16} />
                  </button>

                  <Link
                    href="/products/eri"
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#2563eb",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    View Dedicated Specs Page <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Complete ERI Product Catalog Section */}
          <div id="eri-catalog" style={{ scrollMarginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.85rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    margin: 0,
                  }}
                >
                  <Cpu size={26} color="#2563eb" /> ERI Industrial Products Catalog
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.95rem", margin: "0.3rem 0 0 0" }}>
                  Select any product to review ratings, circuit specifications, and submit RFQ inquiries.
                </p>
              </div>

              <span
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  border: "1px solid #bfdbfe",
                }}
              >
                {totalFilteredProducts} Product Models Available
              </span>
            </div>

            {/* Empty State */}
            {filteredCategories.length === 0 && (
              <div className="brand-empty-state" style={{ background: "white", borderRadius: "16px", padding: "4rem 2rem", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <Layers size={48} color="#94a3b8" />
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1e293b", margin: "1rem 0 0.5rem" }}>
                  No ERI products match &quot;{searchQuery}&quot;
                </h3>
                <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
                  Try searching for general terms like &quot;SSR&quot;, &quot;Single Phase&quot;, &quot;Three Phase&quot;, &quot;DIN&quot;, or &quot;Output Module&quot;.
                </p>
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

            {/* Category Groups */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {filteredCategories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  {/* Category Header */}
                  <div
                    style={{
                      background: "#f8fafc",
                      padding: "1.2rem 1.8rem",
                      borderBottom: "1px solid #e2e8f0",
                      borderLeft: "5px solid #2563eb",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                      {cat.categoryName}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#64748b",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "50px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      {cat.products.length} models
                    </span>
                  </div>

                  {/* Products Grid */}
                  <div
                    style={{
                      padding: "1.8rem",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: "1.5rem",
                    }}
                  >
                    {cat.products.map((prod, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          border: "1px solid #e2e8f0",
                          borderRadius: "12px",
                          padding: "1.4rem",
                          background: "#ffffff",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                          transition: "all 0.25s ease",
                        }}
                      >
                        {/* Product Image Container */}
                        <div
                          style={{
                            width: "100%",
                            height: "190px",
                            backgroundColor: "#f8fafc",
                            borderRadius: "10px",
                            marginBottom: "1.2rem",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: prod.image ? "1px solid #e2e8f0" : "1px dashed #cbd5e1",
                          }}
                        >
                          <Image
                            src={prod.image || "/product_img_product.png"}
                            alt={prod.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                              objectFit: "contain",
                              padding: prod.image ? "0.6rem" : "1rem",
                              opacity: prod.image ? 1 : 0.85,
                            }}
                          />
                        </div>

                        {/* Product Title & Badge */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "0.8rem",
                            marginBottom: "0.6rem",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "1.05rem",
                              fontWeight: 700,
                              color: "#0f172a",
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            {prod.name}
                          </h4>
                          {prod.badge && (
                            <span
                              style={{
                                border: "1px solid #2563eb",
                                color: "#2563eb",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                padding: "0.2rem 0.5rem",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {prod.badge}
                            </span>
                          )}
                        </div>

                        <p
                          style={{
                            fontSize: "0.86rem",
                            color: "#64748b",
                            lineHeight: 1.5,
                            marginBottom: "1rem",
                            flex: 1,
                          }}
                        >
                          {prod.desc}
                        </p>

                        {/* Specs */}
                        {prod.specs && prod.specs.length > 0 && (
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "0.45rem",
                              marginBottom: "1.2rem",
                            }}
                          >
                            {prod.specs.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                style={{
                                  background: "#f1f5f9",
                                  color: "#334155",
                                  fontSize: "0.74rem",
                                  padding: "0.25rem 0.55rem",
                                  borderRadius: "4px",
                                  fontWeight: 500,
                                }}
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Inquire Action Button */}
                        <div style={{ marginTop: "auto", paddingTop: "0.8rem", borderTop: "1px solid #f1f5f9" }}>
                          <Link
                            href={`/contact?subject=${encodeURIComponent(`Product Inquiry: ERI ${prod.name}`)}`}
                            style={{
                              width: "100%",
                              background: "#eff6ff",
                              color: "#2563eb",
                              border: "1px solid #bfdbfe",
                              padding: "0.65rem 1rem",
                              borderRadius: "8px",
                              fontSize: "0.85rem",
                              fontWeight: 700,
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "0.4rem",
                              transition: "all 0.2s",
                            }}
                          >
                            Inquire for {prod.name.split(" ")[0]} <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ERI Quality & Applications Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "2rem",
              marginTop: "3.5rem",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ShieldCheck size={20} color="#16a34a" /> ERI Quality Certifications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
                {eriBrand.certifications.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      background: "#f0fdf4",
                      color: "#166534",
                      border: "1px solid #bbf7d0",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Factory size={20} color="#2563eb" /> Target Applications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
                {eriBrand.targetIndustries.map((ind, iIdx) => (
                  <span
                    key={iIdx}
                    style={{
                      background: "#eff6ff",
                      color: "#1e40af",
                      border: "1px solid #bfdbfe",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA Bar */}
          <div
            style={{
              background: "#1e293b",
              padding: "2.5rem",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            <div>
              <h3 style={{ color: "white", fontSize: "1.4rem", fontWeight: 800, margin: "0 0 0.4rem 0" }}>
                Need Genuine ERI Relays or Technical Sizing?
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0 }}>
                SP Enterprises is an authorized dealer offering prompt pan-India stock dispatch and engineering support.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  padding: "0.85rem 1.4rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                }}
              >
                <Download size={16} /> Download Full PDF
              </a>
              <button
                type="button"
                onClick={() =>
                  router.push(
                    `/contact?subject=${encodeURIComponent("Brand Inquiry: Electronic Relays India (ERI)")}`
                  )
                }
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)",
                }}
              >
                Request Quote for ERI <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading Products...</div>}
    >
      <ProductsContent />
    </Suspense>
  );
}
