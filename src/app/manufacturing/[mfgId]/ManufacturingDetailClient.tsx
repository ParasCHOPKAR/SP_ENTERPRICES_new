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

function EquipmentGallery({
  name,
  images,
  defaultImage
}: {
  name: string;
  images?: string[];
  defaultImage?: string;
}) {
  const allImages = images && images.length > 0 ? images : defaultImage ? [defaultImage] : [];
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (allImages.length === 0) return null;

  const currentImg = allImages[activeIndex] || allImages[0];

  return (
    <div className="mfg-equipment-gallery-wrap">
      <div className="mfg-equipment-img-wrapper">
        <img
          src={currentImg}
          alt={`${name} photo ${activeIndex + 1}`}
          className="mfg-equipment-img"
        />
        <div className="mfg-equipment-img-badge">
          SP ENTERPRISES • SAHPL
        </div>

        {allImages.length > 1 && (
          <div className="mfg-equipment-gallery-counter">
            {activeIndex + 1} / {allImages.length} Photos
          </div>
        )}

        {allImages.length > 1 && (
          <div className="mfg-gallery-nav-btns">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
              className="mfg-gallery-nav-btn"
              aria-label="Previous photo"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev + 1) % allImages.length)}
              className="mfg-gallery-nav-btn"
              aria-label="Next photo"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="mfg-equipment-thumbnails-row">
          {allImages.map((imgUrl, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`mfg-thumb-btn ${idx === activeIndex ? "active" : ""}`}
              aria-label={`View ${name} photo ${idx + 1}`}
            >
              <img src={imgUrl} alt={`${name} thumb ${idx + 1}`} />
              <span className="mfg-thumb-num">{idx + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const sortedTabs = [...MANUFACTURING_DATA].sort((a, b) => {
    const navbarOrder = [
      "special-purpose-machines",
      "glue-conveyors",
      "material-handling",
      "control-panels",
      "ss-fabrication"
    ];
    const indexA = navbarOrder.indexOf(a.id);
    const indexB = navbarOrder.indexOf(b.id);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section
        className="page-hero-banner"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #7f1d1d 100%)",
          padding: "4.5rem 0 4rem",
          color: "white"
        }}
      >
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/manufacturing" style={{ color: "#cbd5e1", textDecoration: "none" }}>Manufacturing</Link>
            <span>/</span>
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>{activeItem.shortTitle}</span>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <div
              className="title-pill"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fbbf24",
                border: "1px solid rgba(245,158,11,0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.38rem 1rem",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.5px",
                marginBottom: "1rem"
              }}
            >
              <Factory size={14} /> SP ENTERPRISES • SAHPL BESPOKE MANUFACTURING FACILITY, PUNE
            </div>

            <h1 style={{ fontSize: "clamp(1.9rem, 4.2vw, 2.9rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.85rem", color: "#ffffff" }}>
              {activeItem.title}
            </h1>

            <p style={{ fontSize: "clamp(1.02rem, 1.8vw, 1.18rem)", color: "#fca5a5", fontWeight: 600, lineHeight: 1.5, marginBottom: "1.5rem" }}>
              {activeItem.tagline}
            </p>

            {/* 4 Credentials Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", padding: "0.4rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <CheckCircle size={14} color="#4ade80" /> 10+ Years Heavy Engineering
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", padding: "0.4rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <Building2 size={14} color="#38bdf8" /> 100% In-House Facility (Pune)
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", padding: "0.4rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <Settings2 size={14} color="#facc15" /> Turnkey CAD to Commissioning
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", padding: "0.4rem 0.85rem", borderRadius: "8px", fontSize: "0.8rem", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <ShieldCheck size={14} color="#a78bfa" /> 100% Pre-Dispatch Quality FAT
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => handleInquire(activeItem.title)}
                style={{
                  background: "#d01018",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 15px rgba(208, 16, 24, 0.4)",
                  transition: "all 0.2s"
                }}
              >
                <span>Request Custom Design Quote</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  padding: "0.75rem 1.4rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <Download size={16} />
                <span>Download Catalogue PDF</span>
              </a>

              <a
                href="#equipment"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#e2e8f0",
                  padding: "0.75rem 1.2rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <span>View Machinery Specifications &darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: "4rem 0 5rem", background: "#f8fafc" }}>
        <div className="container">
          {/* Quick Division Selector Tabs */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1.2rem" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                5 IN-HOUSE MANUFACTURING DISCIPLINES
              </span>
            </div>
            <div className="manufacturing-tabs-row">
              {sortedTabs.map((item) => (
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
          </div>

          {/* Division Overview Card (Properly structured in clear paragraphs) */}
          <div className="mfg-division-overview-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <div>
                <div className="mfg-overview-badge">
                  <Factory size={14} /> TURNKEY ENGINEERING &amp; MANUFACTURING OVERVIEW
                </div>
                <h2 className="mfg-overview-title">
                  {activeItem.title}
                </h2>
                <div className="mfg-overview-tagline">
                  {activeItem.tagline}
                </div>
              </div>

              <button
                type="button"
                className="btn-primary mfg-cta-btn"
                onClick={() => handleInquire(activeItem.title)}
              >
                Request Custom Design Quote <ArrowRight size={16} />
              </button>
            </div>

            {/* Active Division Flagship Banner Image */}
            {activeItem.image && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(220px, 32vw, 360px)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  margin: "1.2rem 0 2rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0"
                }}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "1.4rem", left: "1.6rem", right: "1.6rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.8rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fbbf24", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.2rem" }}>
                      SP ENTERPRISES • SAHPL MANUFACTURING RANGE
                    </div>
                    <div style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 800, color: "white" }}>
                      {activeItem.title}
                    </div>
                  </div>
                  <span style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)", color: "white", fontSize: "0.78rem", fontWeight: 700, padding: "0.4rem 0.9rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)" }}>
                    {activeItem.badge}
                  </span>
                </div>
              </div>
            )}

            {/* Division Overview Paragraphs */}
            <div className="mfg-overview-paragraphs">
              {activeItem.description.split("\n\n").map((para, pIdx) => (
                <p key={pIdx} className="mfg-overview-para">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Clients / Field Deployments Badges */}
            {activeItem.featuredClients && activeItem.featuredClients.length > 0 && (
              <div style={{ background: "#f8fafc", padding: "1.1rem 1.4rem", borderRadius: "10px", border: "1px solid #e2e8f0", marginTop: "1.8rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.7rem" }}>
                <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#334155" }}>
                  Key Clients &amp; Field Deployments:
                </span>
                {activeItem.featuredClients.map((cl, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      background: "white",
                      border: "1px solid #cbd5e1",
                      color: "#991b1b",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.7rem",
                      borderRadius: "6px"
                    }}
                  >
                    {cl}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Machinery & Equipment Systems (Properly structured in clear paragraphs & detailed parameter tables) */}
          {activeItem.featuredProducts && activeItem.featuredProducts.length > 0 && (
            <div id="equipment" style={{ scrollMarginTop: "2rem" }}>
              <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
                <div className="title-pill" style={{ background: "#fef2f2", color: "#991b1b", border: "1px solid #fecdd3", padding: "0.4rem 1.1rem", borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", fontWeight: 800, marginBottom: "0.8rem" }}>
                  <Sparkles size={15} /> TURNKEY MACHINERY &amp; PROCESS EQUIPMENT
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>
                  Featured Machinery &amp; <span style={{ color: "#c8102e" }}>Equipment Systems</span>
                </h2>
                <p style={{ fontSize: "1.02rem", color: "#64748b", maxWidth: "780px", margin: "0 auto" }}>
                  Explore comprehensive engineering narratives, operating parameters, materials of construction, and client deployments manufactured under SP Enterprises in Pune.
                </p>
              </div>

              {/* Dedicated Equipment Showcase Cards Stack */}
              <div className="mfg-equipment-showcase-list">
                {activeItem.featuredProducts.map((prod, pIdx) => (
                  <div key={pIdx} className="mfg-equipment-showcase-card">
                    {/* Top Header Bar */}
                    <div className="mfg-equipment-header-bar">
                      <div className="mfg-equipment-number-badge">
                        EQUIPMENT {String(pIdx + 1).padStart(2, "0")} OF {String(activeItem.featuredProducts?.length || 0).padStart(2, "0")} • SAHPL RANGE
                      </div>
                      {prod.client && (
                        <div className="mfg-equipment-client-badge">
                          <CheckCircle size={14} color="#86efac" />
                          <span>Client Deployment: <strong>{prod.client}</strong></span>
                        </div>
                      )}
                    </div>

                    {/* Main Body */}
                    <div className="mfg-equipment-body">
                      <div className="mfg-equipment-grid">
                        {/* Left Column: Visual, Quick Metrics & Highlights */}
                        <div className="mfg-equipment-media-col">
                          <EquipmentGallery
                            name={prod.name}
                            images={prod.images}
                            defaultImage={prod.image}
                          />

                          {/* Quick Metric Badges (first 4 specs) */}
                          {prod.specs && prod.specs.length > 0 && (
                            <div className="mfg-equipment-metrics-row">
                              {prod.specs.slice(0, 4).map((sp, idx) => (
                                <div key={idx} className="mfg-metric-pill">
                                  <span className="mfg-metric-label">{sp.label}</span>
                                  <span className="mfg-metric-value">{sp.value}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Key Engineering Highlights */}
                          {prod.highlights && prod.highlights.length > 0 && (
                            <div className="mfg-equipment-highlights-box">
                              <div className="mfg-highlights-title">
                                <Sparkles size={14} color="#991b1b" /> Key Engineering Highlights:
                              </div>
                              <ul className="mfg-highlights-list">
                                {prod.highlights.map((hl, hIdx) => (
                                  <li key={hIdx} className="mfg-highlight-item">
                                    <CheckCircle2 size={15} color="#16a34a" className="mfg-highlight-icon" />
                                    <span>{hl}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Right Column: Title, Tagline, Paragraphs, Parameters Table & Action */}
                        <div className="mfg-equipment-content-col">
                          <h3 className="mfg-equipment-title">{prod.name}</h3>
                          <p className="mfg-equipment-tagline">{prod.tagline}</p>

                          {/* Structured Paragraphs (clean, readable paragraph way) */}
                          <div className="mfg-equipment-paragraphs">
                            {prod.description.split("\n\n").map((para, paraIdx) => (
                              <p key={paraIdx} className="mfg-equipment-para">
                                {para}
                              </p>
                            ))}
                          </div>

                          {/* Full Technical Specifications Matrix Table */}
                          {prod.specs && prod.specs.length > 0 && (
                            <div className="mfg-equipment-specs-table-wrap">
                              <div className="mfg-specs-table-title">
                                <Settings2 size={15} color="#c8102e" /> Technical Parameters &amp; Engineering Specifications
                              </div>
                              <div className="mfg-specs-table-body">
                                {prod.specs.map((sp, sIdx) => (
                                  <div key={sIdx} className="mfg-spec-row-item">
                                    <span className="mfg-spec-key">{sp.label}</span>
                                    <span className="mfg-spec-val">{sp.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Inquiry Action Button */}
                          <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                            <button
                              type="button"
                              onClick={() => handleInquire(prod.name)}
                              className="mfg-btn-inquire-equipment"
                            >
                              <span>Request Sizing / Quote for {prod.name}</span>
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1.5rem" }}>
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
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.8rem" }}>
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
