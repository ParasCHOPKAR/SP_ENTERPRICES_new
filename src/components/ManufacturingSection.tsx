"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Truck, Package, ShieldCheck, ArrowRight, Settings2, Factory, Award } from "lucide-react";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

export default function ManufacturingSection() {
  // Only show the first 2 items for the preview
  const previewItems = MANUFACTURING_DATA.slice(0, 2);

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
          <div className="title-pill manufacturing-pill" style={{ background: "#e0e7ff", color: "#3730a3", border: "1px solid #c7d2fe", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            <Factory size={14} /> IN-HOUSE MANUFACTURING & ENGINEERING
          </div>
          <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.2rem" }}>
            Custom Industrial <span style={{ color: "#2563eb" }}>Manufacturing Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: "1.1rem", color: "#475569", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
            Explore our state-of-the-art custom control panels, automated material handling, and cGMP SS equipment designed for modern industrial challenges.
          </p>
        </div>

        {/* Preview Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {previewItems.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                background: "white", 
                borderRadius: "16px", 
                padding: "2rem", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
                border: "1px solid #e2e8f0", 
                display: "flex", 
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ color: "#2563eb", marginBottom: "1.5rem" }}>
                {getIcon(item.iconName)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem" }}>
                <Award size={16} color="#2563eb" /> 
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#2563eb", textTransform: "uppercase" }}>{item.badge}</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem" }}>
                {item.shortTitle}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.6, marginBottom: "2rem", flex: 1 }}>
                {item.tagline}
              </p>
              <Link 
                href={`/manufacturing/${item.id}`} 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "0.8rem 1.2rem", 
                  background: "#eff6ff", 
                  color: "#2563eb", 
                  borderRadius: "8px", 
                  textDecoration: "none", 
                  fontWeight: 600,
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
              background: "#1e40af", 
              color: "white", 
              padding: "1rem 2.5rem", 
              borderRadius: "8px", 
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(30, 64, 175, 0.3)"
            }}
          >
            Explore All Manufacturing Divisions <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
