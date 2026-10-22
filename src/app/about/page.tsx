"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Download,
  Cpu,
  Layers,
  Wrench,
  Factory,
  Globe,
  Zap,
  TrendingUp,
  Star,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── Intersection Observer Hook ───────────────────────────── */
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Animated Number Counter ───────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(t); }
      else setVal(start);
    }, 28);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Fade-in wrapper ───────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const milestones = [
    {
      icon: <Globe size={28} />,
      label: "Dealership & Distribution",
      title: "13 Global Brand Partnerships",
      desc: "Direct distributorship with world leaders — ERI, Weidmüller, West, Phoenix Contact, Gefran, JUMO, Emerson, Honeywell, Automation Software, and more.",
      color: "#c8102e",
      bg: "rgba(200,16,46,0.08)"
    },
    {
      icon: <Cpu size={28} />,
      label: "Manufacturing Facility",
      title: "Custom Panel Fabrication",
      desc: "State-of-the-art Katraj facility for PCC, MCC, PLC, VFD and instrumentation control panels fully compliant with IEC/IS standards.",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.08)"
    },
    {
      icon: <Zap size={28} />,
      label: "Packaging Automation",
      title: "Glue Conveyor Systems",
      desc: "Engineered high-speed automated hot-melt and cold glue carton packing conveyors for pharma and FMCG industries.",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.08)"
    },
    {
      icon: <ShieldCheck size={28} />,
      label: "Pharma SS Equipment",
      title: "cGMP Sanitary Fabrication",
      desc: "Delivering sterile SS 304/316 cleanroom tables, crossover benches, and furniture to USFDA/EU-GMP approved plants.",
      color: "#16a34a",
      bg: "rgba(22,163,74,0.08)"
    }
  ];

  const stats = [
    { value: 13, suffix: "+", label: "Global Partner Brands", icon: <Globe size={22} /> },
    { value: 25, suffix: "+", label: "Years of Engineering Excellence", icon: <TrendingUp size={22} /> },
    { value: 500, suffix: "+", label: "Industrial Clients Served", icon: <Users size={22} /> },
    { value: 100, suffix: "%", label: "Genuine OEM Components", icon: <CheckCircle2 size={22} /> }
  ];

  const values = [
    {
      icon: <Target size={28} />,
      title: "Our Mission",
      desc: "To empower Indian industries, machine builders, and pharmaceutical facilities with certified automation hardware, type-tested control enclosures, and world-class cleanroom technologies that elevate productivity, safety, and energy efficiency.",
      gradient: "linear-gradient(135deg, #c8102e 0%, #991b1b 100%)",
      iconBg: "rgba(200,16,46,0.15)"
    },
    {
      icon: <Sparkles size={28} />,
      title: "Our Vision",
      desc: "To stand as Maharashtra's premier benchmark for industrial automation integration — recognized for 100% genuine components, unmatched technical consultation, and innovative manufacturing solutions driving smart Industry 4.0 transformation.",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
      iconBg: "rgba(245,158,11,0.15)"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Guarantee",
      desc: "Every component carries original manufacturer test certificates, serial tracking, and full warranty. Every panel undergoes 100% point-to-point continuity, megger insulation, and functional simulation before shipment.",
      gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
      iconBg: "rgba(22,163,74,0.15)"
    }
  ];

  return (
    <div className="site-wrapper">
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section
        style={{
          position: "relative",
          background: "radial-gradient(ellipse at center, #0f172a 0%, #020617 100%)",
          minHeight: "380px",
          padding: "clamp(3rem, 6vw, 4.5rem) 0",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          color: "white"
        }}
      >
        {/* Animated grid bg */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(200,16,46,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none"
          }}
        />
        {/* Glowing orbs */}
        <div style={{ position: "absolute", top: "10%", right: "8%", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(200,16,46,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "3%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="about-hero-grid">
            <div>
              {/* Pill badge */}
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(200,16,46,0.18)", border: "1px solid rgba(245,158,11,0.35)",
                  color: "#fbbf24", padding: "0.3rem 0.8rem", borderRadius: "50px",
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1px",
                  textTransform: "uppercase", marginBottom: "1rem"
                }}
              >
                <Building2 size={12} /> About S. P. Enterprises
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 900, lineHeight: 1.15,
                  marginBottom: "1rem",
                  background: "linear-gradient(135deg, #ffffff 0%, #fef08a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Pioneering Automation,
                <br />Control &amp; Precision <span style={{ WebkitTextFillColor: "#fbbf24" }}>Engineering Solution</span>
              </h1>

              <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: 1.6, maxWidth: "550px", marginBottom: "1.5rem" }}>
                Pune&apos;s trusted industrial channel partner led by{" "}
                <strong style={{ color: "#ffffff" }}>Mr. Pradeep Kulkarni</strong>{" "}
                — delivering premier global electrical components and bespoke in-house manufacturing.
              </p>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <Link
                  href="/products"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    background: "linear-gradient(135deg, #c8102e, #991b1b)",
                    color: "white", padding: "0.7rem 1.4rem", borderRadius: "6px",
                    fontWeight: 700, textDecoration: "none", fontSize: "0.85rem",
                    boxShadow: "0 4px 15px rgba(200,16,46,0.4)",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(200,16,46,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(200,16,46,0.4)"; }}
                >
                  Explore Brands <ArrowRight size={14} />
                </Link>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)",
                    color: "white", padding: "0.7rem 1.4rem", borderRadius: "6px",
                    fontWeight: 700, textDecoration: "none", fontSize: "0.85rem",
                    backdropFilter: "blur(6px)", transition: "background 0.2s"
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}
                >
                  <Download size={14} /> Download Brochure
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px", padding: "1.5rem",
                backdropFilter: "blur(12px)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                justifySelf: "end", width: "100%", maxWidth: "340px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #c8102e, #991b1b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Users size={18} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "#fbbf24", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px" }}>DIRECTOR</div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff" }}>Mr. Pradeep Kulkarni</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.8rem" }}>
                <a href="tel:+918308502100" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff", textDecoration: "none", background: "rgba(200,16,46,0.2)", border: "1px solid rgba(245,158,11,0.3)", padding: "0.4rem 0.6rem", borderRadius: "6px", fontWeight: 700, transition: "background 0.2s" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(200,16,46,0.3)"}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(200,16,46,0.2)"}>
                  <Phone size={14} color="#fbbf24" /> +91 83085 02100 / 94220 12179
                </a>
                <a href="tel:02024336245" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e2e8f0", textDecoration: "none", padding: "0.2rem" }}>
                  <Phone size={14} color="#fbbf24" /> Phone: 020-24336245
                </a>
                <a href="mailto:sales@sahpl.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e2e8f0", textDecoration: "none", padding: "0.2rem" }}>
                  <Mail size={14} color="#fbbf24" /> sales@sahpl.com
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#cbd5e1", fontSize: "0.75rem", padding: "0.2rem" }}>
                  <MapPin size={14} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>Sr. No. 14/1A + 2B/2, Gujarwadi Rd, Katraj, Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #7f1d1d 50%, #c8102e 100%)",
          padding: "1.5rem 0"
        }}
      >
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((s, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div
                  className="about-stat-item"
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    textAlign: "center", padding: "0.5rem 1rem", color: "white",
                    borderRight: idx < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none"
                  }}
                >
                  <div style={{ color: "#fbbf24", marginBottom: "0.5rem" }}>{s.icon}</div>
                  <div style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1, marginBottom: "0.4rem" }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#fef08a", fontWeight: 600 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", background: "#ffffff", overflow: "hidden" }}>
        <div className="container">
          <div className="about-whoweare-grid">
            {/* Left text */}
            <FadeIn>
              <span style={{ fontSize: "0.8rem", color: "#c8102e", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                WHO WE ARE
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  color: "#0f172a", fontWeight: 900, lineHeight: 1.2, marginBottom: "1.5rem"
                }}
              >
                Bridging Global Innovation with{" "}
                <span style={{ color: "#c8102e" }}>Domestic Manufacturing</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
                <strong>S. P. Enterprises</strong> was established in Pune, Maharashtra, to solve a critical industrial need: providing manufacturing plants and OEMs with authentic, manufacturer-backed electronic automation components combined with tailor-made electrical control panels.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.7, marginBottom: "2rem" }}>
                Under the strategic leadership of <strong>Mr. Pradeep Kulkarni</strong>, our enterprise operates across two complementary divisions — bridging the gap between global engineering innovation and precision domestic fabrication.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {[
                  {
                    icon: <Award size={22} />, color: "#c8102e", bg: "#fef2f2",
                    title: "Dealership & Solutions Division (13 Brands)",
                    desc: "Direct distributor for ERI Solid State Relays, Weidmüller SMPS, Cermet Resistors, West PID, Phoenix Contact, Renu PLC/HMI, CD Automation, Gefran Sensors, JUMO India, Emerson HVAC, Automation Software, Honeywell Systems, and Clean Grad Slovenia."
                  },
                  {
                    icon: <Factory size={22} />, color: "#16a34a", bg: "#f0fdf4",
                    title: "In-House Manufacturing Division — SP Enterprises (SAHPL Portfolio)",
                    desc: "SP Enterprises directly designs, manufactures, and delivers the complete SAHPL product portfolio: End-to-end Design, Manufacturing, Installation, and Commissioning of Special Purpose Machines (SPM), Hot Melt Packaging Conveyors, Heavy Material Handling & 90° Tilters, Type-Tested Control Panels (Thyristor, VFD, APFC, Annunciator), and cGMP SS/MS Industrial Fabrication."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex", gap: "1rem", alignItems: "flex-start",
                      background: item.bg, padding: "1.4rem 1.2rem",
                      borderRadius: "12px", borderLeft: `4px solid ${item.color}`,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "default"
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", color: "#0f172a", fontWeight: 700, marginBottom: "0.3rem" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.84rem", color: "#64748b", lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/products"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #c8102e, #991b1b)", color: "white", padding: "0.85rem 1.8rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 15px rgba(200,16,46,0.3)", transition: "transform 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
                >
                  Explore 13 Brands <ArrowRight size={16} />
                </Link>
                <Link
                  href="/manufacturing"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f1f5f9", color: "#0f172a", padding: "0.85rem 1.8rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", border: "1px solid #e2e8f0", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#e2e8f0"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#f1f5f9"}
                >
                  Manufacturing Division <Cpu size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* Right image stack */}
            <FadeIn delay={150}>
              <div style={{ position: "relative" }}>
                {/* Main image */}
                <div style={{ position: "relative", height: "360px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="/products_showcase.jpg"
                    alt="S. P. Enterprises Products"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                    <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "0.8rem 1rem", color: "white" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fbbf24", marginBottom: "0.2rem" }}>PREMIER PRODUCTS</div>
                      <div style={{ fontWeight: 800, fontSize: "1rem" }}>13 Global Engineering Brands</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge top-right */}
                <div
                  style={{
                    position: "absolute", top: "-18px", right: "-18px",
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    borderRadius: "14px", padding: "0.9rem 1.2rem",
                    color: "white", boxShadow: "0 10px 30px rgba(245,158,11,0.4)",
                    textAlign: "center", minWidth: "90px"
                  }}
                >
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1 }}>25+</div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, marginTop: "0.2rem", opacity: 0.9 }}>YEARS EXP.</div>
                </div>

                {/* Contact card below */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    background: "#f8fafc", border: "1px solid #e2e8f0",
                    borderRadius: "16px", padding: "1.6rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                  }}
                >
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Building2 size={18} color="#c8102e" /> Key Leadership &amp; Headquarters
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.85rem" }}>
                    {[
                      { label: "Director", value: "Mr. Pradeep Kulkarni", strong: true },
                      { label: "Mobile No.", value: "+91 83085 02100, +91 94220 12179", link: "tel:+918308502100" },
                      { label: "Phone No.", value: "020-24336245", link: "tel:02024336245" },
                      { label: "Official Email", value: "sales@sahpl.com", link: "mailto:sales@sahpl.com" },
                      { label: "Official Website", value: "www.speautomation.com", link: "https://www.speautomation.com" },
                    ].map((row, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.4rem 0", borderBottom: "1px solid #f1f5f9" }}>
                        <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{row.label}</span>
                        {row.link ? (
                          <a href={row.link} style={{ color: "#c8102e", fontWeight: 700, textDecoration: "none" }}>{row.value}</a>
                        ) : (
                          <strong style={{ color: "#0f172a" }}>{row.value}</strong>
                        )}
                      </div>
                    ))}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", paddingTop: "0.3rem" }}>
                      <MapPin size={14} color="#c8102e" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.4 }}>Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION / QUALITY ─── */}
      <section
        style={{
          padding: "clamp(3rem, 6vw, 5rem) 0",
          background: "linear-gradient(180deg, #020617 0%, #0a1628 100%)",
          position: "relative", overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(200,16,46,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(200,16,46,0.15)", border: "1px solid rgba(245,158,11,0.3)", color: "#fbbf24", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                <Target size={13} /> Our Core Purpose
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, marginBottom: "0.8rem" }}>
                Mission, Vision &amp; <span style={{ color: "#fbbf24" }}>Commitment</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.6 }}>
                Guided by a commitment to zero-downtime engineering, transparent client dealings, and lasting value creation.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {values.map((v, idx) => (
              <FadeIn key={idx} delay={idx * 120}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px", padding: "2.5rem",
                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                    cursor: "default", height: "100%"
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
                    el.style.borderColor = "rgba(200,16,46,0.4)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: v.gradient, display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "1.5rem", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>{v.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES TIMELINE ─── */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", background: "#ffffff" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 4rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fef2f2", border: "1px solid #fecdd3", color: "#c8102e", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                <Layers size={13} /> Capabilities Journey
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.2, marginBottom: "0.8rem" }}>
                End-to-End <span style={{ color: "#c8102e" }}>Engineering Scope</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.6 }}>
                From direct component sourcing to turnkey plant automation, panel building, and sterile pharma furniture.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
            {milestones.map((m, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div
                  style={{
                    background: "#fafafa", padding: "2rem",
                    borderRadius: "16px", border: "1px solid #f1f5f9",
                    position: "relative", overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                    cursor: "default"
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = `0 20px 40px ${m.color}20`;
                    el.style.borderColor = `${m.color}40`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#f1f5f9";
                  }}
                >
                  {/* Top accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${m.color}, ${m.color}80)` }} />
                  {/* Large number watermark */}
                  <div style={{ position: "absolute", bottom: "-10px", right: "-5px", fontSize: "7rem", fontWeight: 900, color: `${m.color}08`, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: m.bg, border: `1px solid ${m.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, marginBottom: "1.2rem" }}>
                    {m.icon}
                  </div>

                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: m.color, background: m.bg, padding: "0.2rem 0.7rem", borderRadius: "12px", border: `1px solid ${m.color}30`, display: "inline-block", marginBottom: "0.8rem" }}>
                    {m.label}
                  </span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.6rem" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.87rem", color: "#64748b", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #fff1f2 100%)",
          borderTop: "1px solid #e2e8f0"
        }}
      >
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <FadeIn>
              <span style={{ fontSize: "0.8rem", color: "#c8102e", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>WHY CHOOSE US</span>
              <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                The S. P. Enterprises <span style={{ color: "#c8102e" }}>Advantage</span>
              </h2>
              <p style={{ fontSize: "0.98rem", color: "#64748b", lineHeight: 1.7, marginBottom: "2rem" }}>
                We combine the breadth of 13 premier global brands with the agility and precision of in-house manufacturing — all under one roof in Pune.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "100% genuine components with full OEM traceability",
                  "Type-tested panels compliant with IEC, IS & CPRI",
                  "Single point of contact for procurement + fabrication",
                  "Rapid turnaround with Pune-based manufacturing",
                  "cGMP-grade SS furniture for pharma/cleanroom",
                  "Pan-India delivery with site commissioning support"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="#c8102e" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.92rem", color: "#374151", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { icon: <Globe size={24} />, title: "13 Brands", sub: "Global dealership & distributorship", color: "#c8102e", bg: "#fef2f2" },
                  { icon: <Factory size={24} />, title: "OEM Mfg.", sub: "In-house panel fabrication", color: "#7c3aed", bg: "#f5f3ff" },
                  { icon: <Wrench size={24} />, title: "Site Support", sub: "Installation & commissioning", color: "#f59e0b", bg: "#fef3c7" },
                  { icon: <Star size={24} />, title: "4.9★ Rating", sub: "50+ verified Google reviews", color: "#d97706", bg: "#fffbeb" }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: card.bg, border: `1px solid ${card.color}20`,
                      borderRadius: "16px", padding: "1.5rem",
                      transition: "transform 0.25s, box-shadow 0.25s",
                      cursor: "default"
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${card.color}20`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: card.color, marginBottom: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      {card.icon}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1rem", color: "#0f172a", marginBottom: "0.3rem" }}>{card.title}</div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>{card.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #0f172a 0%, #7f1d1d 50%, #c8102e 100%)",
          padding: "6rem 0", color: "white", overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.08) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2.5rem" }}>
              <div style={{ maxWidth: "620px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fbbf24", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                  <Sparkles size={13} /> Get In Touch
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
                  Ready to Automate or Build Your Next Control Panel?
                </h2>
                <p style={{ fontSize: "1.05rem", color: "#fef08a", lineHeight: 1.6 }}>
                  Access our complete catalogue — product photographs, electrical ratings, wiring schematics, and corporate credentials. Or speak directly with our engineering team today.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "white", color: "#c8102e", padding: "1rem 2rem", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "0.95rem", boxShadow: "0 6px 20px rgba(0,0,0,0.2)", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)"; }}
                >
                  <Download size={18} /> Download Brochure (PDF)
                </a>
                <Link
                  href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "1rem 2rem", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", backdropFilter: "blur(6px)", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}
                >
                  Contact Our Engineers <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
