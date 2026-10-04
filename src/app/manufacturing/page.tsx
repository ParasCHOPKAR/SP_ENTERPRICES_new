"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Cpu,
  Truck,
  Boxes,
  ShieldCheck,
  ArrowRight,
  Settings2,
  Award,
  Layers,
  Download
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

export default function ManufacturingPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={48} />;
      case "Truck":
        return <Truck size={48} />;
      case "Boxes":
        return <Boxes size={48} />;
      case "Shield":
        return <ShieldCheck size={48} />;
      default:
        return <Settings2 size={48} />;
    }
  };

  const processSteps = [
    { num: "01", title: "Engineering & CAD Design", desc: "Custom single-line diagrams (SLD), GA drawings, heat dissipation load analysis, and busbar sizing calculations." },
    { num: "02", title: "CNC Metal Fabrication", desc: "Precision CNC shearing, laser cutting, and hydraulic bending using CRCA sheets or certified SS 304/316 grades." },
    { num: "03", title: "7-Tank Surface Finishing", desc: "Rigorous chemical phosphating pre-treatment followed by 80-100 micron electrostatic pure polyester powder coating or Ra < 0.4µm electro-polishing." },
    { num: "04", title: "Quality Wiring & Busbars", desc: "Structured neat wiring with PVC slotted ducts, color-coded ferruling, and electrolytic grade copper/aluminium busbars with heat-shrink sleeves." },
    { num: "05", title: "100% Pre-Dispatch Testing", desc: "Routine dielectric high-voltage testing, insulation resistance megger testing, and full functional logic simulation before FAT release." }
  ];

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #064e3b 0%, #1e3a8a 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#a7f3d0", borderColor: "rgba(255,255,255,0.25)" }}>
              <Factory size={14} /> IN-HOUSE MANUFACTURING DIVISION
            </div>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem" }}>
              Custom Industrial Panels, <span style={{ color: "#34d399" }}>Packaging &amp; SS Equipment</span>
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Type-tested electrical panels, automated material handling, high-speed glue box packing lines, and cGMP stainless steel cleanroom furniture engineered in Katraj, Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">
              Explore Our <span>Manufacturing Divisions</span>
            </h2>
            <p className="section-subtitle">
              Select a manufacturing division to see detailed technical specifications, certifications, and our process.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {MANUFACTURING_DATA.map((item) => (
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
                  cursor: "pointer" 
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
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
                  View Full Details <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Workflow & Quality Process */}
      <section style={{ padding: "5rem 0", background: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="title-pill">
              <Layers size={14} /> QUALITY &amp; EXECUTION WORKFLOW
            </div>
            <h2 className="section-title">
              Our 5-Stage <span>Manufacturing Process</span>
            </h2>
            <p className="section-subtitle">
              Every enclosure, conveyor line, and pharma furniture unit follows a rigorous quality assurance protocol.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ background: "#f8fafc", padding: "1.8rem 1.4rem", borderRadius: "14px", border: "1px solid #e2e8f0", position: "relative" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#bfdbfe", lineHeight: 1, display: "block", marginBottom: "0.8rem" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.8rem" }}>
              Require a Custom Control Panel or Machinery Sizing?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#bfdbfe", lineHeight: 1.5 }}>
              Share your motor lists, electrical single-line diagrams, or packaging speeds with our engineering team for an accurate proposal.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ background: "white", color: "#1e3a8a", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Request Engineering Quote <ArrowRight size={18} />
            </Link>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Download size={18} /> Download Catalogue PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
