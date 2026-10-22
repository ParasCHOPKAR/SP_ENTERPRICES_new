"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Truck, Package, ShieldCheck, ArrowRight, Settings2, Factory, Award } from "lucide-react";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

export default function ManufacturingSection() {
  // Show first 3 divisions for the preview
  const previewItems = MANUFACTURING_DATA.slice(0, 3);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={32} />;
      case "Truck":
        return <Truck size={32} />;
      case "Boxes":
        return <Package size={32} />;
      case "Shield":
        return <ShieldCheck size={32} />;
      default:
        return <Settings2 size={32} />;
    }
  };

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
          <p className="section-subtitle" style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "800px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
            Powered by SP Enterprises — 10+ years of expertise in SPMs, Hot Melt Packaging, Material Handling, Chillers, and Type-Tested Control Panels.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="mfg-preview-grid">
          {previewItems.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                background: "white", 
                borderRadius: "16px", 
                padding: "1.5rem", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
                border: "1px solid #e2e8f0", 
                display: "flex", 
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(200, 16, 46, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
              }}
            >
              {item.image && (
                <div style={{ position: "relative", width: "100%", height: "205px", borderRadius: "12px", overflow: "hidden", marginBottom: "1.2rem", background: "#0f172a", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
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
                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 60%, transparent 100%)",
                    padding: "0.8rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                  }}>
                    <span style={{ color: "#ffffff", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.3px" }}>
                      {item.shortTitle === "Control Panels" && "Thyristor, VFD, APFC & Annunciator"}
                      {item.shortTitle === "Material Handling" && "Conveyors, 90° Tilters & Lifters"}
                      {item.shortTitle === "Packaging Conveyors" && "Auto Box Folding & Hot Melt Gluing"}
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
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c8102e", textTransform: "uppercase" }}>{item.badge}</span>
                </div>
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>
                {item.shortTitle}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: 1.55, marginBottom: "1.5rem", flex: 1 }}>
                {item.tagline}
              </p>
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
                  fontSize: "0.95rem"
                }}
              >
                View Details <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: "center" }}>
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
