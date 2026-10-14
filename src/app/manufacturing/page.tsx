"use client";

import React, { useState } from "react";
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
  Download,
  CheckCircle2,
  Flame,
  Gauge,
  Thermometer,
  RotateCcw,
  Sparkles,
  Building2,
  Users,
  ShieldAlert,
  ChevronRight,
  Wrench,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MANUFACTURING_DATA, SAHPL_INFO, ManufacturingItem } from "@/data/manufacturingData";

export default function ManufacturingPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");

  const getIcon = (iconName: string, size = 32) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={size} />;
      case "Truck":
        return <Truck size={size} />;
      case "Boxes":
        return <Boxes size={size} />;
      case "Shield":
        return <ShieldCheck size={size} />;
      default:
        return <Settings2 size={size} />;
    }
  };

  const filteredData = selectedDivision === "all" 
    ? MANUFACTURING_DATA 
    : MANUFACTURING_DATA.filter((item) => item.id === selectedDivision);

  const processSteps = [
    { num: "01", title: "Engineering & CAD Design", desc: "Qualified design engineers perform custom 3D modeling, Single-Line Diagrams (SLD), GA layout planning, and thermal dissipation load calculations." },
    { num: "02", title: "CNC Metal Fabrication", desc: "Precision CNC shearing, high-precision fiber laser cutting, and hydraulic CNC bending using certified CRCA sheets or pharma-grade SS 304/316." },
    { num: "03", title: "Surface Finishing & Coating", desc: "Industrial 7-tank chemical phosphating followed by 80-100µm electrostatic powder coating or sanitary Ra < 0.4µm electro-polishing." },
    { num: "04", title: "Neat Assembly & Wiring", desc: "Skilled shop-floor workers execute structured panel wiring, slotted PVC trunking, color-coded ferruling, and high-conductivity copper busbars." },
    { num: "05", title: "100% Pre-Dispatch Quality FAT", desc: "Rigorous dielectric high-voltage testing, insulation megger verification, pressure safety checks, and simulated full PLC logic FAT runs." }
  ];

  return (
    <div className="site-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #091e3a 0%, #1e3a8a 50%, #064e3b 100%)", padding: "5rem 0 4.5rem", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "880px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#93c5fd", borderColor: "rgba(255,255,255,0.25)", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 1.1rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.2rem" }}>
              <Factory size={16} /> IN-HOUSE MANUFACTURING UNIT • SAHPL
            </div>
            <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem" }}>
              Smart Automation &amp; <span style={{ color: "#38bdf8" }}>Hydropneumatics (SAHPL)</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#e2e8f0", lineHeight: 1.6, marginBottom: "2rem" }}>
              Dedicated manufacturing arm of <strong>S. P. Enterprises</strong>. Providing turnkey Design, Manufacturing, Installation, and Commissioning for Special Purpose Machines (SPM), Automated Conveyors, Industrial Control Panels, Material Handling, Chillers &amp; SS Cleanroom Equipment.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href="#divisions"
                style={{ background: "#2563eb", color: "white", padding: "0.85rem 1.8rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}
              >
                Explore All Equipment <ChevronRight size={18} />
              </a>
              <Link
                href="/contact"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "0.85rem 1.8rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                Request Custom Design Quote
              </Link>
              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#cbd5e1", padding: "0.85rem 1.5rem", borderRadius: "8px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Download size={16} /> Brochure PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SAHPL Core Identity & Engineering Credo */}
      <section style={{ padding: "3.5rem 0", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "center" }}>
            <div style={{ gridColumn: "span 1" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#1d4ed8", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>
                <Award size={18} /> 8+ Years of Industrial Trust
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.3, marginBottom: "1rem" }}>
                Engineering Excellence by Qualified Designers &amp; Skilled Workers
              </h2>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.65, marginBottom: "1.2rem" }}>
                <strong>Smart Automation and Hydropneumatics Pvt. Ltd. (SAHPL)</strong> is our manufacturing unit. We provide complete <em>Design, Manufacturing, Installation, and Commissioning</em> services for Industrial Automation, Special Purpose Machines, industrial chillers, cold rooms, material handling equipment, and control panels.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.6 }}>
                Every product is designed by qualified engineers and execution of the same is done by skilled workers. With over 8 years in the industry, we are thoroughly familiar with <strong>GMP procedures</strong> for the equipment we specialize in, maintaining an unwavering focus on <strong>superior production quality and appropriate, transparent pricing</strong>.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              {SAHPL_INFO.credentials.map((cred, idx) => (
                <div key={idx} style={{ background: "#f8fafc", padding: "1.2rem", borderRadius: "12px", border: "1px solid #e2e8f0", borderLeft: "4px solid #2563eb" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1e3a8a", marginBottom: "0.3rem" }}>
                    {cred.value}
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#64748b" }}>
                    {cred.label}
                  </div>
                </div>
              ))}
              <div style={{ background: "#eff6ff", padding: "1.2rem", borderRadius: "12px", border: "1px solid #bfdbfe", borderLeft: "4px solid #16a34a" }}>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#15803d", marginBottom: "0.3rem" }}>
                  Turnkey
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#475569" }}>
                  Design → Install → Commission
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestigious Client List Section */}
      <section style={{ padding: "3rem 0", background: "#f1f5f9", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#64748b" }}>
              Field-Tested &amp; Trusted By Industry Leaders
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0f172a", marginTop: "0.3rem" }}>
              Key Industrial Clients for Our In-House Manufactured Systems
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {SAHPL_INFO.clientList.map((client, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  padding: "1rem 1.2rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Building2 size={16} color="#2563eb" />
                  <span style={{ fontWeight: 800, color: "#1e293b", fontSize: "0.95rem" }}>{client.name}</span>
                </div>
                <span style={{ fontSize: "0.78rem", color: "#64748b", paddingLeft: "1.5rem" }}>{client.division}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs for 5 Divisions */}
      <section id="divisions" style={{ padding: "4rem 0 2rem", background: "#f8fafc" }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="title-pill" style={{ background: "#e0e7ff", color: "#3730a3", border: "1px solid #c7d2fe", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Settings2 size={15} /> 5 CORE MANUFACTURING DISCIPLINES
            </div>
            <h2 className="section-title" style={{ fontSize: "2.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem" }}>
              Comprehensive <span>Manufacturing Portfolio</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "760px", margin: "0 auto" }}>
              Explore detailed specifications, operational capabilities, client implementations, and technical parameters for our in-house engineered equipment.
            </p>
          </div>

          {/* Division Filter Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", margin: "2.5rem 0 1rem" }}>
            <button
              type="button"
              onClick={() => setSelectedDivision("all")}
              style={{
                padding: "0.65rem 1.3rem",
                borderRadius: "30px",
                border: "1px solid",
                borderColor: selectedDivision === "all" ? "#2563eb" : "#cbd5e1",
                background: selectedDivision === "all" ? "#2563eb" : "white",
                color: selectedDivision === "all" ? "white" : "#475569",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              All Divisions ({MANUFACTURING_DATA.length})
            </button>
            {MANUFACTURING_DATA.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedDivision(item.id)}
                style={{
                  padding: "0.65rem 1.3rem",
                  borderRadius: "30px",
                  border: "1px solid",
                  borderColor: selectedDivision === item.id ? "#2563eb" : "#cbd5e1",
                  background: selectedDivision === item.id ? "#2563eb" : "white",
                  color: selectedDivision === item.id ? "white" : "#475569",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <span>{item.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Showcase Section for All / Selected Divisions */}
      <section style={{ padding: "1rem 0 5rem", background: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {filteredData.map((division) => (
            <div
              key={division.id}
              id={division.id}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0"
              }}
            >
              {/* Division Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "2rem", marginBottom: "2rem" }}>
                <div style={{ maxWidth: "800px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                    <div style={{ color: "#2563eb", background: "#eff6ff", padding: "0.6rem", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {getIcon(division.iconName, 28)}
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#2563eb", textTransform: "uppercase", background: "#e0e7ff", padding: "0.3rem 0.8rem", borderRadius: "20px" }}>
                      {division.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                    {division.title}
                  </h3>
                  <p style={{ fontSize: "1.05rem", color: "#2563eb", fontWeight: 600, marginBottom: "0.8rem" }}>
                    {division.tagline}
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.65 }}>
                    {division.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", alignItems: "flex-start" }}>
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Manufacturing: ${division.title}`)}`}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      padding: "0.8rem 1.4rem",
                      borderRadius: "8px",
                      fontWeight: 700,
                      textDecoration: "none",
                      fontSize: "0.92rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      boxShadow: "0 4px 12px rgba(37,99,235,0.3)"
                    }}
                  >
                    Request Quote for Division <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={`/manufacturing/${division.id}`}
                    style={{
                      color: "#475569",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                  >
                    View Standalone Division Page <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Client Badges if available */}
              {division.featuredClients && division.featuredClients.length > 0 && (
                <div style={{ background: "#f8fafc", padding: "1rem 1.4rem", borderRadius: "10px", border: "1px solid #e2e8f0", marginBottom: "2.5rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>
                    Key Clients / Implementations:
                  </span>
                  {division.featuredClients.map((cl, cIdx) => (
                    <span
                      key={cIdx}
                      style={{
                        background: "white",
                        border: "1px solid #cbd5e1",
                        color: "#1e3a8a",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px"
                      }}
                    >
                      {cl}
                    </span>
                  ))}
                </div>
              )}

              {/* Featured Machines / Equipment Cards */}
              {division.featuredProducts && division.featuredProducts.length > 0 && (
                <div style={{ marginBottom: "3rem" }}>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.4rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Sparkles size={20} color="#2563eb" /> Featured Equipment &amp; Machinery Systems
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
                    {division.featuredProducts.map((prod, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "1.8rem",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                          display: "flex",
                          flexDirection: "column",
                          transition: "border-color 0.2s"
                        }}
                      >
                        {prod.client && (
                          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534", padding: "0.25rem 0.6rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.8rem", width: "fit-content" }}>
                            <CheckCircle size={12} color="#16a34a" /> Client: {prod.client}
                          </div>
                        )}
                        <h5 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.3rem" }}>
                          {prod.name}
                        </h5>
                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2563eb", marginBottom: "0.8rem" }}>
                          {prod.tagline}
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.2rem", flex: 1 }}>
                          {prod.description}
                        </p>

                        {/* Specs Table if available */}
                        {prod.specs && prod.specs.length > 0 && (
                          <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "0.8rem", border: "1px solid #f1f5f9", marginBottom: "1.2rem" }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                              Technical Parameters
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                              {prod.specs.map((sp, sIdx) => (
                                <div key={sIdx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", borderBottom: sIdx === prod.specs.length - 1 ? "none" : "1px solid #e2e8f0", paddingBottom: "0.3rem" }}>
                                  <span style={{ color: "#64748b", fontWeight: 600 }}>{sp.label}:</span>
                                  <span style={{ color: "#0f172a", fontWeight: 700, textAlign: "right" }}>{sp.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Highlights list */}
                        {prod.highlights && prod.highlights.length > 0 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.2rem" }}>
                            {prod.highlights.map((hl, hIdx) => (
                              <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.82rem", color: "#334155" }}>
                                <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <Link
                          href={`/contact?subject=${encodeURIComponent(`Inquiry: ${prod.name}`)}`}
                          style={{
                            background: "#eff6ff",
                            color: "#2563eb",
                            border: "1px solid #bfdbfe",
                            borderRadius: "6px",
                            padding: "0.6rem 1rem",
                            textAlign: "center",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                            marginTop: "auto",
                            transition: "background 0.2s"
                          }}
                        >
                          Request Sizing / Quote <ChevronRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Capabilities & Engineering Standards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", paddingTop: "1rem" }}>
                {/* Capabilities list */}
                <div style={{ background: "#f8fafc", padding: "1.8rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Wrench size={18} color="#2563eb" /> Manufacturing Capabilities
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    {division.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} style={{ borderBottom: cIdx === division.capabilities.length - 1 ? "none" : "1px solid #e2e8f0", paddingBottom: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
                          <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>{cap.name}</span>
                          {cap.client && (
                            <span style={{ fontSize: "0.72rem", background: "#e0e7ff", color: "#3730a3", padding: "0.15rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
                              {cap.client}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, marginBottom: "0.5rem" }}>
                          {cap.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {cap.specs.map((sp, sIdx) => (
                            <span key={sIdx} style={{ fontSize: "0.74rem", background: "white", border: "1px solid #cbd5e1", color: "#334155", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                              {sp}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Division Specs & Key Benefits */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Specs Table */}
                  <div style={{ background: "#ffffff", padding: "1.8rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Settings2 size={18} color="#0284c7" /> Design &amp; Fabrication Standards
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {division.specifications.map((sp, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", padding: "0.4rem 0", borderBottom: idx === division.specifications.length - 1 ? "none" : "1px solid #f1f5f9" }}>
                          <span style={{ color: "#64748b", fontWeight: 600, maxWidth: "45%" }}>{sp.label}</span>
                          <span style={{ color: "#0f172a", fontWeight: 700, maxWidth: "55%", textAlign: "right" }}>{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div style={{ background: "#ffffff", padding: "1.8rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <ShieldCheck size={18} color="#16a34a" /> Key Value &amp; Engineering Benefits
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      {division.keyBenefits.map((ben, bIdx) => (
                        <div key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "#334155" }}>
                          <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Stage Manufacturing Workflow & Quality Process */}
      <section style={{ padding: "5rem 0", background: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="title-pill" style={{ background: "#e0e7ff", color: "#3730a3", border: "1px solid #c7d2fe", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Layers size={15} /> QUALITY CONTROL PROTOCOL
            </div>
            <h2 className="section-title" style={{ fontSize: "2.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem" }}>
              Our 5-Stage <span>Turnkey Execution Process</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
              From custom engineering drawings to factory floor installation and commissioning, we adhere to strict GMP and electrical safety codes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: "#f8fafc",
                  padding: "1.8rem 1.4rem",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#93c5fd", lineHeight: 1, display: "block", marginBottom: "0.8rem" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, flex: 1 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)", padding: "5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(59, 130, 246, 0.2)", color: "#93c5fd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Factory size={14} /> SAHPL TURNKEY PROPOSALS
            </div>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.8rem" }}>
              Have a Custom Machine, Conveyor or Control Panel Requirement?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Share your machinery specifications, electrical motor schedules, or single-line diagrams with our qualified engineering team in Pune for a comprehensive technical and commercial proposal.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ background: "#2563eb", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}
            >
              Request Engineering Quote <ArrowRight size={18} />
            </Link>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
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
