"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award, Download, ExternalLink, ArrowRight, ChevronLeft, ShieldCheck, Factory, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA, BRAND_HERO_MAP } from "@/data/brandsData";

export default function BrandDetailClient({ brandId: propBrandId }: { brandId?: string }) {
  const clientParams = useParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  
  const brandId = propBrandId || (clientParams?.brandId as string) || "";
  
  const brand = BRANDS_DATA.find((b) => b.id.toLowerCase() === brandId.toLowerCase() || (brandId.toLowerCase() === "emis" && b.id === "emi-solutions"));

  if (!brand) {
    return (
      <div className="site-wrapper">
        <Header />
        <div style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "60vh" }}>
          <h2>Brand not found</h2>
          <p style={{ marginBottom: "2rem" }}>We could not find the requested brand.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroBgImage = brand.heroImage || BRAND_HERO_MAP[brand.id.toLowerCase()] || '/products_showcase.jpg';

  const brandTabs = [
    { id: "all", label: `All Brands (${BRANDS_DATA.length})`, href: "/products" },
    ...BRANDS_DATA.map((b) => ({
      id: b.id,
      label: b.name,
      href: `/products/${b.id}`,
    })),
  ];

  return (
    <div className="site-wrapper">
      <Header />
      
      {/* Brand Hero Section */}
      <section style={{ 
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0b1120 0%, #0f172a 60%, #1e293b 100%)",
        padding: "4rem 0 4.5rem 0", 
        color: "white" 
      }}>
        {/* Ambient Blurred Glow of Brand Hero Card */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${heroBgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          filter: "blur(30px)",
          transform: "scale(1.15)",
          zIndex: 0
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11, 17, 32, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.92) 100%)",
          zIndex: 1
        }} />

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#fbbf24", textDecoration: "none", fontWeight: 600, marginBottom: "1.8rem" }}>
            <ChevronLeft size={16} /> Back to All Brands
          </Link>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
            gap: "clamp(1.5rem, 3vw, 2.5rem)", 
            alignItems: "center" 
          }}>
            {/* Left Column: Brand Metadata */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.2rem" }}>
                <span style={{
                  background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.25)", padding: "0.35rem 0.9rem",
                  borderRadius: "50px", fontSize: "0.8rem", fontWeight: 700,
                  display: "flex", alignItems: "center", gap: "0.4rem", color: "#f8fafc"
                }}>
                  <Award size={15} color="#f59e0b" /> {brand.badge}
                </span>
                <span style={{
                  background: "#c8102e", color: "#fef08a",
                  padding: "0.35rem 0.9rem", borderRadius: "50px",
                  fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.5px"
                }}>
                  {brand.filterCategory.toUpperCase()}
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.8rem)", fontWeight: 900, marginBottom: "0.8rem", lineHeight: 1.15, textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
                {brand.fullName}
              </h1>
              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                {brand.tagline}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                <button
                  type="button"
                  onClick={() => router.push(`/request-quote?subject=${encodeURIComponent(`Brand: ${brand.fullName}`)}`)}
                  style={{
                    background: "#c8102e",
                    color: "white",
                    padding: "0.8rem 1.6rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 15px rgba(200, 16, 46, 0.4)",
                    transition: "background 0.2s ease"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#a30d24")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#c8102e")}
                >
                  Request Official Quote <ArrowRight size={16} />
                </button>
                <a
                  href={`/brochures/${brand.id}.pdf`}
                  download={`${brand.name.replace(/[^a-zA-Z0-9]/g, '_')}_Catalogue.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.12)",
                    color: "white",
                    padding: "0.8rem 1.4rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                    border: "1px solid rgba(255,255,255,0.25)",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                >
                  <Download size={16} /> Download {brand.name} PDF Catalogue
                </a>
                {brand.externalReference && (
                  <a
                    href={brand.externalReference}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                      padding: "0.8rem 1.2rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      border: "1px solid rgba(255,255,255,0.18)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    }}
                  >
                    <ExternalLink size={15} /> Official EMIS Portal
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Prominent Brand Hero Card Showcase */}
            <div>
              <div style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.22)",
                aspectRatio: "1983 / 793",
                width: "100%",
                background: "#0f172a"
              }}>
                <Image
                  src={heroBgImage}
                  alt={`${brand.name} Hero Showcase`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Navigation Switcher Tabs */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "1.2rem 0" }}>
        <div className="container">
          <div className="brand-filters-container" style={{ margin: 0 }}>
            <div className="brand-category-tabs">
              {brandTabs.map((tab) => {
                const isActive =
                  tab.id.toLowerCase() === brand.id.toLowerCase() ||
                  (tab.id === "emis" && brand.id === "emi-solutions") ||
                  (tab.id === "emi-solutions" && brand.id === "emis");
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`brand-cat-btn ${isActive ? "active" : ""}`}
                    style={{ textDecoration: "none" }}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Details Content */}
      <section style={{ padding: "4rem 0", background: "#f8fafc" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          
          {/* Overview & Features */}
          <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
               Brand Overview & Technology Scope
            </h3>
            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7, marginBottom: "2rem" }}>
              {brand.overview}
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
              {brand.keyFeatures.map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", background: "#f1f5f9", padding: "1rem", borderRadius: "10px" }}>
                  <CheckCircle2 size={20} color="#c8102e" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.95rem", color: "#334155", fontWeight: 500, lineHeight: 1.5 }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Product Catalog */}
          <div>
            <div style={{ display: "flex", borderBottom: "none", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", display: "flex", alignItems: "center", gap: "0.6rem", margin: "0 0 0.4rem 0" }}>
                  <Cpu size={28} color="#c8102e" /> Complete Product Catalog
                </h3>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#64748b" }}>
                  Explore verified products, specifications, and certified measurement instruments.
                </p>
              </div>
              <span style={{ background: "#fff1f2", color: "#c8102e", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem" }}>
                {brand.categories.reduce((acc, cat) => acc + cat.products.length, 0)} Total Products Listed
              </span>
            </div>

            {/* Category Filter Pills (if multiple categories) */}
            {brand.categories.length > 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "50px",
                    border: selectedCategory === "all" ? "2px solid #c8102e" : "1px solid #cbd5e1",
                    background: selectedCategory === "all" ? "#c8102e" : "#ffffff",
                    color: selectedCategory === "all" ? "#ffffff" : "#334155",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    boxShadow: selectedCategory === "all" ? "0 4px 12px rgba(200, 16, 46, 0.25)" : "none",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <span>All Categories</span>
                  <span style={{
                    background: selectedCategory === "all" ? "rgba(255,255,255,0.25)" : "#f1f5f9",
                    color: selectedCategory === "all" ? "#ffffff" : "#64748b",
                    fontSize: "0.75rem",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "10px",
                    fontWeight: 700
                  }}>
                    {brand.categories.reduce((acc, cat) => acc + cat.products.length, 0)}
                  </span>
                </button>
                {brand.categories.map((cat, idx) => {
                  const isActive = selectedCategory === cat.categoryName;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedCategory(cat.categoryName)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "50px",
                        border: isActive ? "2px solid #c8102e" : "1px solid #cbd5e1",
                        background: isActive ? "#c8102e" : "#ffffff",
                        color: isActive ? "#ffffff" : "#334155",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        boxShadow: isActive ? "0 4px 12px rgba(200, 16, 46, 0.25)" : "none",
                        transition: "all 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem"
                      }}
                    >
                      <span>{cat.categoryName}</span>
                      <span style={{
                        background: isActive ? "rgba(255,255,255,0.25)" : "#f1f5f9",
                        color: isActive ? "#ffffff" : "#64748b",
                        fontSize: "0.75rem",
                        padding: "0.15rem 0.45rem",
                        borderRadius: "10px",
                        fontWeight: 700
                      }}>
                        {cat.products.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {(selectedCategory === "all"
                ? brand.categories
                : brand.categories.filter((c) => c.categoryName === selectedCategory)
              ).map((cat, idx) => (
                <div key={idx} style={{ background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                  <div style={{ background: "#f8fafc", padding: "1.2rem 1.5rem", borderBottom: "1px solid #e2e8f0", borderLeft: "5px solid #c8102e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                      {cat.categoryName}
                    </h4>
                    <span style={{ background: "#e2e8f0", color: "#334155", fontSize: "0.8rem", fontWeight: 700, padding: "0.25rem 0.65rem", borderRadius: "20px" }}>
                      {cat.products.length} Products
                    </span>
                  </div>
                  <div style={{ padding: "clamp(1rem, 3vw, 2rem)", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 290px), 1fr))", gap: "1.5rem" }}>
                    {cat.products.map((prod, pIdx) => (
                      <div key={pIdx} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem", background: "#ffffff", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", transition: "all 0.25s ease" }}>
                        <div style={{ width: "100%", height: "200px", backgroundColor: "#ffffff", borderRadius: "10px", marginBottom: "1.2rem", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: prod.image ? "1px solid #f1f5f9" : "1px dashed #cbd5e1" }}>
                           <Image 
                             src={prod.image || "/product_img_product.png"} 
                             alt={prod.name} 
                             fill 
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             style={{ 
                               objectFit: "contain", 
                               padding: "0.75rem", 
                               opacity: 1 
                             }} 
                           />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.8rem", marginBottom: "0.8rem" }}>
                          <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: 0, lineHeight: 1.4 }}>{prod.name}</h5>
                          {prod.badge && (
                            <span style={{ border: "1px solid #c8102e", color: "#c8102e", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "4px", whiteSpace: "nowrap" }}>
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.5, marginBottom: "1.2rem", flex: 1 }}>{prod.desc}</p>
                        
                        {prod.specs && prod.specs.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "auto" }}>
                            {prod.specs.map((spec, sIdx) => (
                              <span key={sIdx} style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.75rem", padding: "0.25rem 0.55rem", borderRadius: "4px", fontWeight: 500 }}>
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Target Industries */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "2rem" }}>
            <div style={{ background: "white", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={22} color="#16a34a" /> Quality Certifications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {brand.certifications.map((cert, cIdx) => (
                  <span key={cIdx} style={{ background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0", padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: "white", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Factory size={22} color="#c8102e" /> Target Applications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {brand.targetIndustries.map((ind, iIdx) => (
                  <span key={iIdx} style={{ background: "#fff1f2", color: "#880816", border: "1px solid #fecdd3", padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions Footer */}
          <div style={{ background: "#1e293b", padding: "2.5rem", borderRadius: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {brand.externalReference && (
                <a href={brand.externalReference} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "white", padding: "0.8rem 1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}>
                  <ExternalLink size={18} /> Official Reference Page
                </a>
              )}
              <a
                href={`/brochures/${brand.id}.pdf`}
                download={`${brand.name.replace(/[^a-zA-Z0-9]/g, '_')}_Catalogue.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  padding: "0.8rem 1.4rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.25)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              >
                <Download size={18} /> Download {brand.name} PDF Catalogue
              </a>
            </div>

            <button 
              type="button" 
              onClick={() => router.push(`/request-quote?subject=${encodeURIComponent(`Brand: ${brand.fullName}`)}`)}
              style={{ background: "#c8102e", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontSize: "1.05rem", fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.6rem", boxShadow: "0 4px 15px rgba(200, 16, 46, 0.4)" }}
            >
              Request Quote for {brand.name} <ArrowRight size={18} />
            </button>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
