"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Factory,
  Cpu,
  Truck,
  Boxes,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Settings2,
  Award,
  Layers,
  Sparkles,
  Download,
  ChevronLeft,
  Building2,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

export default function ManufacturingDetailClient({ mfgId: propMfgId }: { mfgId?: string }) {
  const router = useRouter();
  const params = useParams();
  const mfgId = propMfgId || (params?.mfgId as string);

  const activeItem = MANUFACTURING_DATA.find((m) => m.id === mfgId);

  if (!activeItem) {
    return (
      <div className="site-wrapper">
        <Header />
        <div style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "60vh" }}>
          <h2>Division not found</h2>
          <p style={{ marginBottom: "2rem" }}>We could not find the requested manufacturing division.</p>
          <Link href="/manufacturing" className="btn-primary">
            Back to Manufacturing
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInquire = (title: string) => {
    router.push(`/request-quote?subject=${encodeURIComponent(`Manufacturing: ${title}`)}`);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu size={22} />;
      case "Truck":
        return <Truck size={22} />;
      case "Boxes":
        return <Boxes size={22} />;
      case "Shield":
        return <ShieldCheck size={22} />;
      default:
        return <Settings2 size={22} />;
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
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #7f1d1d 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container">
          <Link href="/manufacturing" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#fbbf24", textDecoration: "none", fontWeight: 600, marginBottom: "2rem" }}>
            <ChevronLeft size={16} /> Back to Manufacturing Overview
          </Link>
          <div style={{ maxWidth: "800px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#fbbf24", borderColor: "rgba(245,158,11,0.3)", display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>
              <Factory size={14} /> SP ENTERPRISES • SAHPL IN-HOUSE MANUFACTURING
            </div>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem" }}>
              {activeItem.shortTitle}
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              {activeItem.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Showcase */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">
              Our 5 Core <span>Manufacturing Disciplines</span>
            </h2>
            <p className="section-subtitle">
              Select a division below to review technical capacities, component architecture, engineering standards, and industry applications handled under SP Enterprises.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="manufacturing-tabs-row">
            {MANUFACTURING_DATA.map((item) => (
              <Link
                key={item.id}
                href={`/manufacturing/${item.id}`}
                className={`mfg-tab-btn ${activeItem.id === item.id ? "active" : ""}`}
                style={{ textDecoration: "none" }}
              >
                <span className="mfg-tab-icon">{getIcon(item.iconName)}</span>
                <div className="mfg-tab-texts">
                  <span className="mfg-tab-title">{item.shortTitle}</span>
                  <span className="mfg-tab-badge">{item.badge}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Active Division Showcase Card */}
          <div className="manufacturing-content-card">
            <div className="mfg-content-header">
              <div>
                <div className="mfg-head-badge">
                  <Award size={14} /> {activeItem.badge}
                </div>
                <h3 className="mfg-main-title">{activeItem.title}</h3>
                <p className="mfg-tagline">{activeItem.tagline}</p>
              </div>
              <button
                type="button"
                className="btn-primary mfg-cta-btn"
                onClick={() => handleInquire(activeItem.title)}
              >
                Request Custom Design Quote <ArrowRight size={16} />
              </button>
            </div>

            {/* Active Division Flagship Image Banner */}
            {activeItem.image && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "320px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  margin: "1.5rem 0 2rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0"
                }}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "1.2rem", left: "1.5rem", right: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fbbf24", textTransform: "uppercase", letterSpacing: "1px" }}>
                      SP ENTERPRISES • SAHPL MANUFACTURING RANGE
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "white" }}>
                      {activeItem.title}
                    </div>
                  </div>
                  <span style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", color: "white", fontSize: "0.75rem", fontWeight: 700, padding: "0.35rem 0.8rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)" }}>
                    {activeItem.badge}
                  </span>
                </div>
              </div>
            )}

            <p className="mfg-description">{activeItem.description}</p>

            {/* Key Clients if available */}
            {activeItem.featuredClients && activeItem.featuredClients.length > 0 && (
              <div style={{ background: "#f8fafc", padding: "0.9rem 1.2rem", borderRadius: "10px", border: "1px solid #e2e8f0", margin: "1.5rem 0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.6rem" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                  Key Clients / Field Deployments:
                </span>
                {activeItem.featuredClients.map((cl, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      background: "white",
                      border: "1px solid #cbd5e1",
                      color: "#991b1b",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "6px"
                    }}
                  >
                    {cl}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Machinery & Equipment Systems */}
            {activeItem.featuredProducts && activeItem.featuredProducts.length > 0 && (
              <div style={{ margin: "2rem 0 2.5rem" }}>
                <h4 className="mfg-subheading" style={{ marginBottom: "1.2rem" }}>
                  <Sparkles size={18} color="#f59e0b" /> Featured Equipment &amp; Machinery Systems
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                  {activeItem.featuredProducts.map((prod, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "1.4rem",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      {/* Product Image */}
                      {prod.image && (
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "190px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            marginBottom: "1rem",
                            background: "#f1f5f9"
                          }}
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "8px",
                              left: "8px",
                              background: "rgba(15, 23, 42, 0.8)",
                              color: "#fbbf24",
                              fontSize: "0.68rem",
                              fontWeight: 800,
                              padding: "0.2rem 0.5rem",
                              borderRadius: "15px",
                              backdropFilter: "blur(4px)"
                            }}
                          >
                            SAHPL RANGE • SP ENTERPRISES
                          </div>
                        </div>
                      )}

                      {prod.client && (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534", padding: "0.2rem 0.5rem", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.6rem", width: "fit-content" }}>
                          <CheckCircle size={12} color="#16a34a" /> Client: {prod.client}
                        </div>
                      )}
                      <h5 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.25rem" }}>
                        {prod.name}
                      </h5>
                      <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#c8102e", marginBottom: "0.7rem" }}>
                        {prod.tagline}
                      </p>
                      <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55, marginBottom: "1rem", flex: 1 }}>
                        {prod.description}
                      </p>

                      {/* Technical Parameters Table */}
                      {prod.specs && prod.specs.length > 0 && (
                        <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "0.7rem 0.8rem", border: "1px solid #f1f5f9", marginBottom: "1rem" }}>
                          <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                            Technical Parameters
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                            {prod.specs.map((sp, sIdx) => (
                              <div key={sIdx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", borderBottom: sIdx === prod.specs.length - 1 ? "none" : "1px solid #e2e8f0", paddingBottom: "0.25rem" }}>
                                <span style={{ color: "#64748b", fontWeight: 600 }}>{sp.label}:</span>
                                <span style={{ color: "#0f172a", fontWeight: 700, textAlign: "right" }}>{sp.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      {prod.highlights && prod.highlights.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1rem" }}>
                          {prod.highlights.map((hl, hIdx) => (
                            <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.35rem", fontSize: "0.8rem", color: "#334155" }}>
                              <CheckCircle2 size={13} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => handleInquire(prod.name)}
                        style={{
                          background: "#fff1f2",
                          color: "#c8102e",
                          border: "1px solid #fecdd3",
                          borderRadius: "6px",
                          padding: "0.55rem 0.9rem",
                          textAlign: "center",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.35rem",
                          marginTop: "auto"
                        }}
                      >
                        Inquire About This Equipment <ChevronRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Capabilities Grid */}
            <div className="mfg-capabilities-area">
              <h4 className="mfg-subheading">
                <Wrench size={18} color="#c8102e" /> Engineering Capabilities &amp; Configurations
              </h4>
              <div className="mfg-capabilities-grid">
                {activeItem.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="mfg-capability-card">
                    <h5 className="mfg-cap-title">{cap.name}</h5>
                    <p className="mfg-cap-desc">{cap.description}</p>
                    <div className="mfg-cap-specs">
                      {cap.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="mfg-cap-spec-item">
                          <CheckCircle2 size={13} color="#16a34a" className="mfg-spec-check" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs & Benefits */}
            <div className="mfg-specs-benefits-grid">
              <div className="mfg-specs-panel">
                <h4 className="mfg-subheading">
                  <Settings2 size={18} color="#f59e0b" /> Design Standards &amp; Technical Parameters
                </h4>
                <div className="mfg-specs-table">
                  {activeItem.specifications.map((spec, idx) => (
                    <div key={idx} className="mfg-spec-row">
                      <span className="mfg-spec-label">{spec.label}</span>
                      <span className="mfg-spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mfg-benefits-panel">
                <h4 className="mfg-subheading">
                  <ShieldCheck size={18} color="#16a34a" /> Key Value &amp; Engineering Benefits
                </h4>
                <ul className="mfg-benefits-list">
                  {activeItem.keyBenefits.map((ben, bIdx) => (
                    <li key={bIdx} className="mfg-benefit-item">
                      <CheckCircle2 size={16} color="#c8102e" className="benefit-check" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>

                <div className="mfg-industries-box">
                  <span className="industries-title">Key Industries Served:</span>
                  <div className="industries-chips">
                    {activeItem.industriesServed.map((ind, indIdx) => (
                      <span key={indIdx} className="industry-chip">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#fca5a5", lineHeight: 1, display: "block", marginBottom: "0.8rem" }}>
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
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #7f1d1d 50%, #c8102e 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.8rem" }}>
              Require a Custom Control Panel or Machinery Sizing?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#fef08a", lineHeight: 1.5 }}>
              Share your motor lists, electrical single-line diagrams, or packaging speeds with our engineering team for an accurate proposal.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ background: "white", color: "#c8102e", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
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
