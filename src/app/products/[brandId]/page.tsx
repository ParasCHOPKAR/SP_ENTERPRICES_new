"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Award, Download, ExternalLink, ArrowRight, ChevronLeft, ShieldCheck, Factory, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA } from "@/data/brandsData";

export default function BrandDetailPage({ params }: { params?: { brandId: string } | Promise<{ brandId: string }> }) {
  const clientParams = useParams();
  const router = useRouter();
  
  let paramBrandId = "";
  if (params) {
    if (typeof (params as any).then === "function") {
      paramBrandId = React.use(params as Promise<{ brandId: string }>).brandId;
    } else {
      paramBrandId = (params as { brandId: string }).brandId;
    }
  }
  const brandId = paramBrandId || (clientParams?.brandId as string) || "";
  
  const brand = BRANDS_DATA.find((b) => b.id.toLowerCase() === brandId.toLowerCase());

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

  const heroImageMap: Record<string, string> = {
    'eri': '/product_images/ERI_HERO.png',
    'cermet': '/product_images/Cermet_Resistive_hero.png',
    'cd-automation': '/product_images/CD_automation.png',
  };
  const heroBgImage = heroImageMap[brand.id.toLowerCase()] || '/products_showcase.jpg';

  return (
    <div className="site-wrapper">
      <Header />
      
      {/* Brand Hero Section */}
      <section style={{ 
        position: "relative",
        background: `linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.5) 45%, rgba(15, 23, 42, 0) 100%), url('${heroBgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 0", 
        color: "white" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#93c5fd", textDecoration: "none", fontWeight: 600, marginBottom: "2rem" }}>
            <ChevronLeft size={16} /> Back to All Brands
          </Link>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{
              background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)", padding: "0.4rem 1rem",
              borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700,
              display: "flex", alignItems: "center", gap: "0.4rem"
            }}>
              <Award size={16} /> {brand.badge}
            </span>
            <span style={{
              background: "#1e3a8a", color: "#93c5fd",
              padding: "0.4rem 1rem", borderRadius: "50px",
              fontSize: "0.85rem", fontWeight: 800
            }}>
              {brand.filterCategory.toUpperCase()}
            </span>
          </div>

          <h1 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "1rem", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            {brand.fullName}
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#e2e8f0", maxWidth: "800px", lineHeight: 1.6 }}>
            {brand.tagline}
          </p>
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
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              {brand.keyFeatures.map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", background: "#f1f5f9", padding: "1rem", borderRadius: "10px" }}>
                  <CheckCircle2 size={20} color="#2563eb" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.95rem", color: "#334155", fontWeight: 500, lineHeight: 1.5 }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Product Catalog */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", display: "flex", alignItems: "center", gap: "0.6rem", margin: 0 }}>
                <Cpu size={28} color="#2563eb" /> Complete Product Catalog
              </h3>
              <span style={{ background: "#eff6ff", color: "#2563eb", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 700 }}>
                {brand.categories.reduce((acc, cat) => acc + cat.products.length, 0)} Key Products Listed
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {brand.categories.map((cat, idx) => (
                <div key={idx} style={{ background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                  <div style={{ background: "#f8fafc", padding: "1.5rem", borderBottom: "1px solid #e2e8f0", borderLeft: "5px solid #2563eb" }}>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                      {cat.categoryName}
                    </h4>
                  </div>
                  <div style={{ padding: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
                    {cat.products.map((prod, pIdx) => (
                      <div key={pIdx} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem", background: "#ffffff", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.02)", transition: "all 0.25s ease" }}>
                        <div style={{ width: "100%", height: "200px", backgroundColor: "#f8fafc", borderRadius: "10px", marginBottom: "1.2rem", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: prod.image ? "1px solid #e2e8f0" : "1px dashed #cbd5e1" }}>
                           <Image 
                             src={prod.image || "/product_img_product.png"} 
                             alt={prod.name} 
                             fill 
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             style={{ 
                               objectFit: "contain", 
                               padding: prod.image ? "0.6rem" : "1rem", 
                               opacity: prod.image ? 1 : 0.8 
                             }} 
                           />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
                          <h5 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", margin: 0, lineHeight: 1.4 }}>{prod.name}</h5>
                          {prod.badge && (
                            <span style={{ border: "1px solid #2563eb", color: "#2563eb", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "4px", whiteSpace: "nowrap" }}>
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.5, marginBottom: "1.2rem", flex: 1 }}>{prod.desc}</p>
                        
                        {prod.specs && prod.specs.length > 0 && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                            {prod.specs.map((spec, sIdx) => (
                              <span key={sIdx} style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.75rem", padding: "0.3rem 0.6rem", borderRadius: "4px", fontWeight: 500 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
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
                <Factory size={22} color="#2563eb" /> Target Applications
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {brand.targetIndustries.map((ind, iIdx) => (
                  <span key={iIdx} style={{ background: "#eff6ff", color: "#1e40af", border: "1px solid #bfdbfe", padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
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
              <a href="/01.SP Enterprises (1).pdf" download="SP_Enterprises_Catalogue.pdf" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "white", padding: "0.8rem 1.2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}>
                <Download size={18} /> Download Full PDF Catalogue
              </a>
            </div>

            <button 
              type="button" 
              onClick={() => router.push(`/contact?subject=${encodeURIComponent(`Brand Inquiry: ${brand.fullName}`)}`)}
              style={{ background: "#3b82f6", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontSize: "1.05rem", fontWeight: 700, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.6rem", boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)" }}
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
