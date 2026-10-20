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

  const integratedBrands = [
    {
      name: "Weidmüller",
      category: "SMPS & Terminal Connectivity in Control Panels",
      image: "/product_hero_card/Weidmuller_hero.png",
      role: "High-efficiency PROtop 24V power supplies & Klippon DIN-rail terminals inside our electrical and automation enclosures."
    },
    {
      name: "Phoenix Contact",
      category: "Surge Protection & Interface Relays",
      image: "/product_hero_card/Phoenix-Contact.png",
      role: "Class I/II surge arresters, signal conditioners, and industrial interface relays for mission-critical automation panels."
    },
    {
      name: "Renu Electronics",
      category: "PLCs, HMIs & Automated Line Control",
      image: "/product_hero_card/Renu-Electronics.png",
      role: "Touchscreen FlexiPanels HMIs and rugged micro-PLCs programmed in-house to power our packaging lines and Special Purpose Machines."
    },
    {
      name: "ERI (Electronic Relays India)",
      category: "Solid State Relays & Power Switching",
      image: "/product_images/ERI_HERO.png",
      role: "Zero-wear solid state switching for industrial heating loads, packaging sealers, and plastic extrusion machinery."
    },
    {
      name: "CD Automation",
      category: "Thyristor Power Controllers",
      image: "/product_images/CD_automation.png",
      role: "Multi-zone digital thyristor units (REVEX & REVO) integrated in our heavy-duty industrial heating control panels."
    },
    {
      name: "Gefran",
      category: "Linear Transducers & Pressure Sensors",
      image: "/product_hero_card/Gefran.png",
      role: "High-precision linear displacement transducers and melt pressure sensors for our hydraulic presses and tilters."
    },
    {
      name: "JUMO India",
      category: "Temperature & Process Controllers",
      image: "/product_hero_card/JUMO-India.png",
      role: "Precision RTD Pt100 temperature sensors and micro-controllers integrated into our continuous hot water and chiller skids."
    },
    {
      name: "Emerson / Alco Controls",
      category: "Refrigeration Compressors & Fluid Controls",
      image: "/product_hero_card/Emerson.png",
      role: "High-efficiency Copeland compressors, expansion valves, and fluid regulation integrated into our industrial chiller systems."
    }
  ];

  return (
    <div className="site-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #7f1d1d 100%)", padding: "5rem 0 4.5rem", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "radial-gradient(circle at 80% 20%, rgba(200, 16, 46, 0.25) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "920px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fbbf24", borderColor: "rgba(245,158,11,0.3)", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.45rem 1.1rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.2rem" }}>
              <Factory size={16} /> IN-HOUSE MANUFACTURING • SP ENTERPRISES
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.8rem" }}>
              SP <span style={{ color: "#fbbf24" }}>Enterprises</span>
            </h1>
            <div style={{ fontSize: "1.2rem", color: "#f8fafc", fontWeight: 700, marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(200,16,46,0.35)", padding: "0.25rem 0.8rem", borderRadius: "6px", border: "1px solid rgba(248,113,113,0.4)", color: "#fecdd3" }}>
                In-House Manufacturing Division
              </span>
              <span>Handling the Complete SAHPL Engineering &amp; Product Portfolio</span>
            </div>
            <p style={{ fontSize: "1.15rem", color: "#e2e8f0", lineHeight: 1.6, marginBottom: "2rem" }}>
              <strong>SP Enterprises</strong> directly manages, designs, and manufactures the entire product range originally developed under <strong>Smart Automation &amp; Hydropneumatics (SAHPL)</strong>. Providing turnkey Design, Manufacturing, Installation, and Commissioning for Special Purpose Machines (SPM), Automated Conveyors, Industrial Control Panels, Heavy Material Handling, Chillers &amp; cGMP SS Cleanroom Equipment.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href="#divisions"
                style={{ background: "#c8102e", color: "white", padding: "0.85rem 1.8rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 15px rgba(200,16,46,0.4)" }}
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

      {/* SP Enterprises & SAHPL Integration Credo */}
      <section style={{ padding: "3.5rem 0", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
            <div style={{ gridColumn: "span 1" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#c8102e", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>
                <Award size={18} /> 10+ Years of Industrial Trust
              </div>
              <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.3, marginBottom: "1rem" }}>
                SAHPL Product Portfolio Handled Exclusively Under SP Enterprises
              </h2>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.65, marginBottom: "1.2rem" }}>
                The complete manufacturing product range of <strong>Smart Automation and Hydropneumatics Pvt. Ltd. (SAHPL)</strong> is managed, engineered, and delivered under <strong>SP Enterprises</strong>. Operating from our advanced fabrication and assembly facility in Pune, Maharashtra, we deliver end-to-end <em>Design, Manufacturing, Installation, and Commissioning</em> for SPMs, Hot Melt Packaging Systems, Heavy Material Handling &amp; Tilters, Type-Tested Control Panels, and cGMP SS Cleanroom Equipment.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.6 }}>
                Every system is designed by qualified engineers and built with precision by skilled shop-floor technicians. With 10+ years serving top-tier automotive OEMs, pharmaceutical giants, and packaging leaders, all equipment strictly complies with <strong>cGMP procedures, IS 8623, and IEC 61439 standards</strong>, delivering <strong>uncompromising build quality with transparent, competitive pricing</strong>.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              {SAHPL_INFO.credentials.map((cred, idx) => (
                <div key={idx} style={{ background: "#f8fafc", padding: "1.2rem", borderRadius: "12px", border: "1px solid #e2e8f0", borderLeft: "4px solid #c8102e" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#c8102e", marginBottom: "0.3rem" }}>
                    {cred.value}
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#64748b" }}>
                    {cred.label}
                  </div>
                </div>
              ))}
              <div style={{ background: "#fef2f2", padding: "1.2rem", borderRadius: "12px", border: "1px solid #fecdd3", borderLeft: "4px solid #c8102e" }}>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#991b1b", marginBottom: "0.3rem" }}>
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

      {/* Prestigious Client List Section with Authentic Brand Logos */}
      <section style={{ padding: "3.5rem 0", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#c8102e" }}>
              Field-Tested &amp; Trusted By Industry Leaders
            </span>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginTop: "0.3rem" }}>
              Key Industrial Clients for Our In-House Manufactured Systems
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#64748b", maxWidth: "680px", margin: "0.5rem auto 0" }}>
              Delivered and supported under SP Enterprises for leading industrial conglomerates across automotive, pharmaceutical, and food packaging sectors.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {SAHPL_INFO.clientList.map((client, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  padding: "1.2rem 1.4rem",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s"
                }}
              >
                <div
                  style={{
                    width: "76px",
                    height: "54px",
                    position: "relative",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    borderRadius: "10px",
                    padding: "6px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                  }}
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    <Building2 size={24} color="#c8102e" />
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0 }}>
                  <span style={{ fontWeight: 800, color: "#0f172a", fontSize: "0.95rem", lineHeight: 1.25 }}>
                    {client.name}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.35 }}>
                    {client.division}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated OEM Automation & Hardware Brands Section */}
      <section style={{ padding: "4rem 0", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fef2f2", color: "#c8102e", border: "1px solid #fecdd3", padding: "0.35rem 0.9rem", borderRadius: "50px", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              <Sparkles size={14} /> Tier-1 OEM Hardware Integration
            </div>
            <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#0f172a" }}>
              Premier Brand Components Powering Our Manufactured Systems
            </h3>
            <p style={{ fontSize: "0.98rem", color: "#64748b", maxWidth: "750px", margin: "0.5rem auto 0", lineHeight: 1.6 }}>
              Every control panel, SPM, and automated line built by SP Enterprises integrates authentic, globally certified electrical and automation hardware with full factory traceability.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {integratedBrands.map((brand, idx) => (
              <div
                key={idx}
                style={{
                  background: "#f8fafc",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ position: "relative", height: "160px", background: "#0f172a", overflow: "hidden" }}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "0.75rem", left: "1rem", right: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "1rem" }}>
                      {brand.name}
                    </span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, background: "rgba(245,158,11,0.25)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.4)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      OEM INTEGRATED
                    </span>
                  </div>
                </div>
                <div style={{ padding: "1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#c8102e", marginBottom: "0.4rem" }}>
                    {brand.category}
                  </span>
                  <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                    {brand.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs for 5 Divisions */}
      <section id="divisions" style={{ padding: "4rem 0 2rem", background: "#f8fafc" }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="title-pill" style={{ background: "#fef2f2", color: "#991b1b", border: "1px solid #fecdd3", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
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
                borderColor: selectedDivision === "all" ? "#c8102e" : "#cbd5e1",
                background: selectedDivision === "all" ? "#c8102e" : "white",
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
                  borderColor: selectedDivision === item.id ? "#c8102e" : "#cbd5e1",
                  background: selectedDivision === item.id ? "#c8102e" : "white",
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
              {/* Division Header & Flagship Equipment Image */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                    <div style={{ color: "#c8102e", background: "#fff1f2", padding: "0.6rem", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {getIcon(division.iconName, 28)}
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#c8102e", textTransform: "uppercase", background: "#fef2f2", border: "1px solid #fecdd3", padding: "0.3rem 0.8rem", borderRadius: "20px" }}>
                      {division.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>
                    {division.title}
                  </h3>
                  <p style={{ fontSize: "1.05rem", color: "#c8102e", fontWeight: 600, marginBottom: "0.8rem" }}>
                    {division.tagline}
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    {division.description}
                  </p>

                  <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                    <Link
                      href={`/contact?subject=${encodeURIComponent(`Manufacturing: ${division.title}`)}`}
                      style={{
                        background: "#c8102e",
                        color: "white",
                        padding: "0.8rem 1.4rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: "0.92rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        boxShadow: "0 4px 12px rgba(200,16,46,0.3)"
                      }}
                    >
                      Request Division Quote <ArrowRight size={16} />
                    </Link>
                    <Link
                      href={`/manufacturing/${division.id}`}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                        padding: "0.8rem 1.3rem",
                        borderRadius: "8px",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem"
                      }}
                    >
                      View Division Details <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Division Flagship Photo */}
                {division.image && (
                  <div style={{ position: "relative", height: "280px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
                    <img
                      src={division.image}
                      alt={division.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 60%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: "1.2rem", left: "1.2rem", right: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#fbbf24", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                          FLAGSHIP EQUIPMENT • SP ENTERPRISES
                        </div>
                        <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "white" }}>
                          {division.shortTitle}
                        </div>
                      </div>
                      <span style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", color: "white", fontSize: "0.72rem", fontWeight: 700, padding: "0.3rem 0.65rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)" }}>
                        SAHPL Range
                      </span>
                    </div>
                  </div>
                )}
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
                        color: "#991b1b",
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
                    <Sparkles size={20} color="#f59e0b" /> Featured Equipment &amp; Machinery Systems
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
                    {division.featuredProducts.map((prod, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "14px",
                          padding: "1.5rem",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                          display: "flex",
                          flexDirection: "column",
                          transition: "border-color 0.2s"
                        }}
                      >
                        {/* Equipment Product Image */}
                        {prod.image && (
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "210px",
                              borderRadius: "10px",
                              overflow: "hidden",
                              marginBottom: "1.2rem",
                              background: "#f1f5f9",
                              boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
                            }}
                          >
                            <img
                              src={prod.image}
                              alt={prod.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                background: "rgba(15, 23, 42, 0.8)",
                                color: "#fbbf24",
                                fontSize: "0.72rem",
                                fontWeight: 800,
                                padding: "0.25rem 0.65rem",
                                borderRadius: "20px",
                                backdropFilter: "blur(4px)",
                                letterSpacing: "0.5px"
                              }}
                            >
                              SP ENTERPRISES • SAHPL
                            </div>
                          </div>
                        )}

                        {prod.client && (
                          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534", padding: "0.25rem 0.6rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.8rem", width: "fit-content" }}>
                            <CheckCircle size={12} color="#16a34a" /> Client: {prod.client}
                          </div>
                        )}
                        <h5 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.3rem" }}>
                          {prod.name}
                        </h5>
                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#c8102e", marginBottom: "0.8rem" }}>
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
                            background: "#fff1f2",
                            color: "#c8102e",
                            border: "1px solid #fecdd3",
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
                    <Wrench size={18} color="#c8102e" /> Manufacturing Capabilities
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    {division.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} style={{ borderBottom: cIdx === division.capabilities.length - 1 ? "none" : "1px solid #e2e8f0", paddingBottom: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
                          <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>{cap.name}</span>
                          {cap.client && (
                            <span style={{ fontSize: "0.72rem", background: "#fef2f2", color: "#991b1b", border: "1px solid #fecdd3", padding: "0.15rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
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
                      <Settings2 size={18} color="#f59e0b" /> Design &amp; Fabrication Standards
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
                          <CheckCircle2 size={16} color="#c8102e" style={{ flexShrink: 0, marginTop: "2px" }} />
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
            <div className="title-pill" style={{ background: "#fef2f2", color: "#991b1b", border: "1px solid #fecdd3", padding: "0.4rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
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
                <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fca5a5", lineHeight: 1, display: "block", marginBottom: "0.8rem" }}>
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
      <section style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)", padding: "5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Factory size={14} /> SP ENTERPRISES • SAHPL TURNKEY PROPOSALS
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
              style={{ background: "#c8102e", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 15px rgba(200,16,46,0.4)" }}
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
