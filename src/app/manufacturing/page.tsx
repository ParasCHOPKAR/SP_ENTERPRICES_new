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
  Download
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MANUFACTURING_DATA, ManufacturingItem } from "@/data/manufacturingData";

// Exact 5 divisions matching the Navbar menu of Manufacturing
const NAVBAR_ORDER = [
  "special-purpose-machines",
  "glue-conveyors",
  "material-handling",
  "control-panels",
  "ss-fabrication"
];

const NAVBAR_DIVISIONS_META = [
  {
    id: "special-purpose-machines",
    label: "Special Purpose Machines (SPM)",
    sub: "Hot Oil Units, 1000 LPH Hot Water, Paint Booth & Incinerator",
    tag: "Custom SPM",
    href: "/manufacturing/special-purpose-machines"
  },
  {
    id: "glue-conveyors",
    label: "Packaging & Hot Melt Conveyors",
    sub: "Box Packaging (General Mills), 15m File Conveyor (Navneet)",
    tag: "Automated",
    href: "/manufacturing/glue-conveyors"
  },
  {
    id: "material-handling",
    label: "Material Handling & Tilters",
    sub: "Roller Conveyors, 90° Chain Tilters & 6m SS304 Lifters",
    tag: "Heavy Automation",
    href: "/manufacturing/material-handling"
  },
  {
    id: "control-panels",
    label: "Industrial Control Panels",
    sub: "Thyristor Panels, VFD Panels, APFC, Annunciator & SS POU",
    tag: "Type-Tested",
    href: "/manufacturing/control-panels"
  },
  {
    id: "ss-fabrication",
    label: "Fixtures, Trolleys & Fabrication",
    sub: "Industrial Trolleys (Mahindra/Hikal), SS Tables & Cleanroom Racks",
    tag: "SS304 / MS",
    href: "/manufacturing/ss-fabrication"
  }
];

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

  const sortedManufacturingData = [...MANUFACTURING_DATA].sort((a, b) => {
    const indexA = NAVBAR_ORDER.indexOf(a.id);
    const indexB = NAVBAR_ORDER.indexOf(b.id);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  const filteredData = selectedDivision === "all"
    ? sortedManufacturingData
    : sortedManufacturingData.filter((item) => item.id === selectedDivision);


  return (
    <div className="site-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="mfg-hero-section">
        <div className="mfg-hero-container">
          <div className="mfg-hero-content">
            {/* Top Badge */}
            <div
              style={{
                background: "#7a0c14",
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.28rem 0.85rem",
                borderRadius: "9999px",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                marginBottom: "0.85rem",
                boxShadow: "0 2px 6px rgba(122, 12, 20, 0.25)"
              }}
            >
              <Factory size={13} color="#ffffff" style={{ flexShrink: 0 }} />
              <span>IN-HOUSE MANUFACTURING • SP ENTERPRISES</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(1.75rem, 2.3vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                margin: "0 0 0.35rem"
              }}
            >
              In-House Manufacturing &amp;<br />
              <span style={{ color: "#d01018" }}>Engineering</span>
            </h1>

            {/* Red Accent Bar */}
            <div
              style={{
                width: "42px",
                height: "3.5px",
                backgroundColor: "#d01018",
                borderRadius: "2px",
                marginTop: "0.4rem",
                marginBottom: "0.75rem"
              }}
            />

            {/* Description Text */}
            <p
              style={{
                fontSize: "clamp(0.78rem, 0.85vw, 0.88rem)",
                color: "#334155",
                lineHeight: 1.45,
                marginBottom: "1.1rem",
                maxWidth: "480px"
              }}
            >
              SP Enterprises is our premier in-house engineering and manufacturing enterprise in Pune, directly handling, manufacturing, and delivering the complete{" "}
              <strong style={{ color: "#0f172a", fontWeight: 700 }}>SAHPL product range.</strong> Operating from our advanced fabrication and assembly facility in Pune, Maharashtra, we deliver turnkey Design, CNC Fabrication, Installation, and Commissioning for a wide range of industrial machinery and automation solutions.
            </p>

            {/* 4 Feature Highlights */}
            <div className="mfg-features-row">
              {/* Feature 1: 100% SAHPL */}
              <div className="mfg-feature-item">
                <div className="mfg-feature-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                  </svg>
                </div>
                <div>
                  <div className="mfg-feature-title">100% SAHPL</div>
                  <div className="mfg-feature-subtitle">Product Range</div>
                </div>
              </div>

              {/* Feature 2: Turnkey Design */}
              <div className="mfg-feature-item">
                <div className="mfg-feature-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </div>
                <div>
                  <div className="mfg-feature-title">Turnkey Design</div>
                  <div className="mfg-feature-subtitle">to Installation</div>
                </div>
              </div>

              {/* Feature 3: 10+ Years */}
              <div className="mfg-feature-item">
                <div className="mfg-feature-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div>
                  <div className="mfg-feature-title">10+ Years</div>
                  <div className="mfg-feature-subtitle">Serving Industry</div>
                </div>
              </div>

              {/* Feature 4: Direct OEM Spares */}
              <div className="mfg-feature-item">
                <div className="mfg-feature-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
                    <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z" />
                  </svg>
                </div>
                <div>
                  <div className="mfg-feature-title">Direct OEM Spares</div>
                  <div className="mfg-feature-subtitle">&amp; Technical Support</div>
                </div>
              </div>
            </div>

            {/* 3 Call to Action Buttons */}
            <div className="mfg-actions-row">
              <a href="#divisions" className="mfg-btn-red">
                <span>Explore All Equipment</span>
                <ArrowRight size={15} />
              </a>
              <Link href="/quote" className="mfg-btn-outline">
                Request Custom Design Quote
              </Link>
              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                className="mfg-btn-dark"
              >
                <Download size={15} />
                <span>Brochure PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Manufacturing Divisions Cards */}
      <section id="divisions" style={{ padding: "4rem 0 5rem", background: "#f8fafc" }}>
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: "2.2rem" }}>
            <div className="title-pill" style={{ background: "#fef2f2", color: "#991b1b", border: "1px solid #fecdd3", padding: "0.35rem 1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.8rem" }}>
              <Settings2 size={15} /> 5 CORE MANUFACTURING DISCIPLINES
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>
              In-House <span>Manufacturing Divisions</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1.02rem", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
              Engineered, fabricated, and delivered directly from our facility in Pune, Maharashtra. Explore our 5 core manufacturing divisions below or click &quot;View More Details&quot; for complete machinery specifications.
            </p>
          </div>

          {/* Division Filter Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "2.8rem" }}>
            <button
              type="button"
              onClick={() => setSelectedDivision("all")}
              style={{
                padding: "0.6rem 1.3rem",
                borderRadius: "30px",
                border: "1px solid",
                borderColor: selectedDivision === "all" ? "#c8102e" : "#cbd5e1",
                background: selectedDivision === "all" ? "#c8102e" : "white",
                color: selectedDivision === "all" ? "white" : "#475569",
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              All Divisions ({sortedManufacturingData.length})
            </button>
            {sortedManufacturingData.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedDivision(item.id)}
                style={{
                  padding: "0.6rem 1.3rem",
                  borderRadius: "30px",
                  border: "1px solid",
                  borderColor: selectedDivision === item.id ? "#c8102e" : "#cbd5e1",
                  background: selectedDivision === item.id ? "#c8102e" : "white",
                  color: selectedDivision === item.id ? "white" : "#475569",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {item.shortTitle}
              </button>
            ))}
          </div>

          {/* Manufacturing Cards Grid */}
          <div className="mfg-cards-grid">
            {filteredData.map((division) => {
              const navMeta = NAVBAR_DIVISIONS_META.find((n) => n.id === division.id);
              return (
                <div key={division.id} className="mfg-card">
                  {/* Card Image */}
                  <Link
                    href={`/manufacturing/${division.id}`}
                    className="mfg-card-img-wrap"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {division.image && (
                      <img
                        src={division.image}
                        alt={division.title}
                        className="mfg-card-img"
                      />
                    )}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)" }} />
                    <span className="mfg-card-tag">
                      {navMeta?.tag || division.badge || "IN-HOUSE"}
                    </span>
                  </Link>

                  {/* Card Body */}
                  <div className="mfg-card-body">
                    <div className="mfg-card-header">
                      <div className="mfg-card-icon">
                        {getIcon(division.iconName, 20)}
                      </div>
                      <Link
                        href={`/manufacturing/${division.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <h3 className="mfg-card-title">
                          {division.shortTitle}
                        </h3>
                      </Link>
                    </div>

                    <p className="mfg-card-tagline">
                      {division.tagline}
                    </p>

                    {/* Key Equipment / Scope Box from Navbar */}
                    {navMeta && (
                      <div className="mfg-card-equipment-box">
                        <div className="mfg-card-equipment-label">
                          Key Equipment &amp; Scope:
                        </div>
                        <p className="mfg-card-equipment-text">
                          {navMeta.sub}
                        </p>
                      </div>
                    )}

                    {/* Featured Products Pills */}
                    {division.featuredProducts && division.featuredProducts.length > 0 && (
                      <div className="mfg-card-tags-row">
                        {division.featuredProducts.slice(0, 3).map((prod, pIdx) => (
                          <span key={pIdx} className="mfg-card-product-pill">
                            {prod.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons: View More Details (redirecting to detail page) & Request Quote */}
                    <div className="mfg-card-actions">
                      <Link
                        href={`/manufacturing/${division.id}`}
                        className="mfg-btn-view-details"
                      >
                        <span>View More Details</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href={`/request-quote?subject=${encodeURIComponent(`Manufacturing: ${division.shortTitle}`)}`}
                        className="mfg-btn-card-quote"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)", padding: "5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Factory size={14} /> SP ENTERPRISES • SAHPL TURNKEY MANUFACTURING
            </div>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.8rem" }}>
              Have a Custom Machine, Conveyor or Control Panel Requirement?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Whether you need machinery systems from the SAHPL product range, repeat equipment builds, or custom turnkey automation, SP Enterprises handles complete design, fabrication, and on-site commissioning from Pune, Maharashtra. Share your machinery specifications or single-line diagrams with our engineering team for a comprehensive technical proposal.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/request-quote?subject=Manufacturing%20Division%20Quotation"
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
