"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Award,
  Package,
  Truck,
  HeadphonesIcon,
  ShieldCheck,
  Star,
  Cpu,
  Boxes,
  Sparkles,
  Download,
  Building2,
  Phone,
  Mail,
  ExternalLink,
  MapPin,
  Factory,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA, BRAND_STRIP_LOGOS } from "@/data/brandsData";
import BrandDirectory from "@/components/BrandDirectory";
import ManufacturingSection from "@/components/ManufacturingSection";

const HOME_MARQUEE_BRAND_ITEMS = [
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS
];

const HERO_BG_IMAGES = [
  {
    src: "/home/hero_ERI_BG.png",
    brand: "ERI",
    id: "eri",
    title: "Electronic Relays India Solid State Relays & I/O Modules",
  },
  {
    src: "/home/hero_weidmuller_bg.png",
    brand: "Weidmüller",
    id: "weidmuller",
    title: "Weidmüller High-End Power Supplies & Automation Systems",
  },
  {
    src: "/home/hero_phoenix_bg.png",
    brand: "Phoenix Contact",
    id: "phoenix",
    title: "Phoenix Contact Terminal Blocks & Connectivity Solutions",
  },
  {
    src: "/home/hero_renu_BG.png",
    brand: "Renu Electronics",
    id: "renu",
    title: "Renu Electronics Smart PLCs, HMIs & Controllers",
  },
  {
    src: "/home/hero_Emerson_BG.png",
    brand: "Emerson",
    id: "emerson",
    title: "Emerson Industrial Automation & Control Technology",
  },
  {
    src: "/home/hero_honeywell_bg.png",
    brand: "Honeywell",
    id: "honeywell",
    title: "Honeywell Process & Building Automation Solutions",
  },
  {
    src: "/home/hero_gefran_bg.png",
    brand: "Gefran",
    id: "gefran",
    title: "Gefran Industrial Sensors, Controllers & SSRs",
  },
  {
    src: "/home/hero_west_control_bg.png",
    brand: "West Control",
    id: "west",
    title: "West Control Solutions PID Temperature & Process Controllers",
  },
  {
    src: "/home/hero_CD_bg.png",
    brand: "CD Automation",
    id: "cd-automation",
    title: "CD Automation Heavy-Duty Thyristor Power Controllers",
  },
  {
    src: "/home/hero_cermet_bg.png",
    brand: "Cermet Resistors",
    id: "cermet",
    title: "Cermet Resistive Products & Dynamic Braking Resistors",
  },
  {
    src: "/home/hero_custom_bg.png",
    brand: "SCADA & Software",
    id: "automation-software",
    title: "Custom Industrial Automation Software & SCADA Systems",
  },
];

export default function Home() {
  const router = useRouter();
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);
  const [isHeroPaused, setIsHeroPaused] = React.useState(false);

  React.useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_BG_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  return (
    <main id="top" className="site-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-bg-image"
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
        >
          {HERO_BG_IMAGES.map((item, idx) => (
            <div
              key={item.src}
              style={{
                position: "absolute",
                inset: 0,
                opacity: idx === currentHeroSlide ? 1 : 0,
                transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out",
                transform: idx === currentHeroSlide ? "scale(1.025)" : "scale(1.0)",
                zIndex: idx === currentHeroSlide ? 1 : 0,
                pointerEvents: "none",
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        <div className="hero-gradient-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Precision Solutions for<br />
              <span className="highlight">Industrial Automation</span> &amp; Control
            </h1>
            <p className="hero-desc">
              Channel Partner for 13 premier global engineering brands including ERI Solid State Relays, Weidmüller SMPS, Phoenix Contact, Gefran, West PID, Renu, JUMO, Emerson, and Honeywell Automation &mdash; coupled with in-house Control Panel and Packaging Machine Manufacturing in Pune.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn-primary">
                Explore Products (13 Brands) <ArrowRight size={18} />
              </Link>
              <Link href="/manufacturing" className="btn-secondary" style={{ background: "#ffffff", color: "#c8102e", padding: "0.9rem 1.6rem", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Cpu size={18} /> Manufacturing Side
              </Link>
              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                className="btn-outline"
                style={{ padding: "0.9rem 1.5rem" }}
              >
                <Download size={18} /> PDF Brochure
              </a>
            </div>

            {/* Quick Hero Brand Ticker */}
            <div className="hero-brand-tags" style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#f59e0b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginRight: "0.5rem" }}>
                Featured Brands:
              </span>
              {BRANDS_DATA.slice(0, 7).map((b) => {
                const heroIndex = HERO_BG_IMAGES.findIndex((s) => s.id === b.id);
                const isCurrentSlide = heroIndex === currentHeroSlide;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      if (heroIndex !== -1) {
                        setCurrentHeroSlide(heroIndex);
                      }
                      router.push(`/products/${b.id}`);
                    }}
                    onMouseEnter={() => {
                      if (heroIndex !== -1) {
                        setCurrentHeroSlide(heroIndex);
                      }
                    }}
                    style={{
                      background: isCurrentSlide ? "rgba(200, 16, 46, 0.75)" : "rgba(255, 255, 255, 0.15)",
                      border: isCurrentSlide ? "1px solid #fbbf24" : "1px solid rgba(255, 255, 255, 0.25)",
                      boxShadow: isCurrentSlide ? "0 0 12px rgba(251, 191, 36, 0.5)" : "none",
                      color: "white",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "14px",
                      fontSize: "0.75rem",
                      fontWeight: isCurrentSlide ? 700 : 600,
                      cursor: "pointer",
                      transition: "all 0.25s ease"
                    }}
                    title={`Click to view ${b.name} products`}
                  >
                    {b.name}
                  </button>
                );
              })}
              <Link
                href="/products"
                style={{ color: "#fbbf24", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", marginLeft: "0.5rem" }}
              >
                +6 more &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Slide Switcher Controls */}
        <div
          className="hero-slide-controls"
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "clamp(1.5rem, 5vw, 4rem)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(10px)",
            padding: "0.4rem 0.85rem",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45)",
          }}
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
        >
          <button
            type="button"
            onClick={() =>
              setCurrentHeroSlide(
                (prev) => (prev - 1 + HERO_BG_IMAGES.length) % HERO_BG_IMAGES.length
              )
            }
            aria-label="Previous Hero Background"
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.85,
              transition: "opacity 0.2s",
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            {HERO_BG_IMAGES.map((slide, idx) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentHeroSlide(idx)}
                aria-label={`Switch to ${slide.brand} background`}
                title={`${slide.brand} (${idx + 1} of ${HERO_BG_IMAGES.length})`}
                style={{
                  background:
                    idx === currentHeroSlide ? "#c8102e" : "rgba(255, 255, 255, 0.35)",
                  width: idx === currentHeroSlide ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  boxShadow:
                    idx === currentHeroSlide
                      ? "0 0 10px rgba(200, 16, 46, 0.8)"
                      : "none",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentHeroSlide((prev) => (prev + 1) % HERO_BG_IMAGES.length)
            }
            aria-label="Next Hero Background"
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.85,
              transition: "opacity 0.2s",
            }}
          >
            <ChevronRight size={18} />
          </button>

          <span
            style={{
              fontSize: "0.72rem",
              color: "#fbbf24",
              fontWeight: 700,
              marginLeft: "0.2rem",
              paddingLeft: "0.4rem",
              borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.5px",
            }}
          >
            {HERO_BG_IMAGES[currentHeroSlide].brand}
          </span>
        </div>
      </section>

      {/* Authorized Global Brands Marquee Slider (Below Hero Section) */}
      <section
        className="hero-brand-marquee-section"
        style={{
          background: "linear-gradient(180deg, #07090e 0%, #12050a 50%, #07090e 100%)",
          borderTop: "1px solid rgba(245, 158, 11, 0.35)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "1.25rem 0 1.5rem 0",
          position: "relative",
          zIndex: 5,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)"
        }}
      >
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2.5rem)", marginBottom: "0.9rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  background: "linear-gradient(180deg, #c8102e, #f59e0b)",
                  borderRadius: "2px"
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#f59e0b",
                    fontWeight: 800,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    lineHeight: 1.2
                  }}
                >
                  AUTHORIZED DISTRIBUTION &amp; CHANNEL PARTNERS
                </div>
                <h2
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.3px",
                    margin: 0
                  }}
                >
                  Global Industrial Automation &amp; Control Brands
                </h2>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.78rem",
                  color: "#cbd5e1"
                }}
              >
                <ShieldCheck size={16} color="#ef4444" />
                <span>100% Genuine Factory-Sealed OEM Stock</span>
              </div>
              <Link
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#f59e0b",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "20px",
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(245, 158, 11, 0.25)";
                  e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245, 158, 11, 0.12)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Explore All 13 Brands <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Continuous Marquee Slider Track */}
        <div
          className="footer-marquee-container"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            padding: "0.3rem 0"
          }}
        >
          {/* Left Edge Ambient Fade Mask */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "100px",
              background: "linear-gradient(to right, #07090e, transparent)",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          {/* Right Edge Ambient Fade Mask */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "100px",
              background: "linear-gradient(to left, #07090e, transparent)",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          <div className="footer-marquee-track">
            {HOME_MARQUEE_BRAND_ITEMS.map((brand, index) => (
              <Link
                key={`home-marquee-${brand.id}-${index}`}
                href={brand.href}
                title={`${brand.name} - Explore Products`}
                className="footer-marquee-card"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  style={{
                    maxHeight: "34px",
                    maxWidth: "125px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block"
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Trust Features Bar */}
      <div
        className="middle-features-bar"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)",
          position: "relative",
          zIndex: 4,
          overflow: "hidden"
        }}
      >
        <div className="middle-features-container">
          {/* 4 Trust Badges Horizontal Row */}
          <div
            className="trust-badges-wrapper"
            style={{
              flex: "1 1 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.1rem clamp(1rem, 2.5vw, 3rem)",
              gap: "clamp(0.8rem, 1.6vw, 2rem)"
            }}
          >
            {/* Badge 1 */}
            <div className="trust-badge-item">
              <div className="trust-badge-icon">
                <Award size={24} color="#c8102e" />
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>
                  Premier Distributor
                </div>
                <div style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 600 }}>
                  100% Genuine OEM Sourcing
                </div>
              </div>
            </div>

            <div className="feature-divider" />

            {/* Badge 2 */}
            <div className="trust-badge-item">
              <div className="trust-badge-icon">
                <Package size={24} color="#c8102e" />
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>
                  13 Premier Brands
                </div>
                <div style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 600 }}>
                  Full Factory Warranty
                </div>
              </div>
            </div>

            <div className="feature-divider" />

            {/* Badge 3 */}
            <div className="trust-badge-item">
              <div className="trust-badge-icon">
                <Truck size={24} color="#c8102e" />
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>
                  Pan-India Supply
                </div>
                <div style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 600 }}>
                  Prompt Express Dispatch
                </div>
              </div>
            </div>

            <div className="feature-divider" />

            {/* Badge 4 */}
            <div className="trust-badge-item">
              <div className="trust-badge-icon">
                <HeadphonesIcon size={24} color="#c8102e" />
              </div>
              <div>
                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>
                  Technical Support
                </div>
                <div style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 600 }}>
                  Application Engineering
                </div>
              </div>
            </div>
          </div>

          {/* Crimson Credo Box (Right Side Fixed Anchor) */}
          <div className="crimson-credo-box">
            <div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  marginBottom: "0.2rem",
                  color: "#ffffff"
                }}
              >
                S. P. ENTERPRISES
              </h3>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.8px",
                  color: "#fef08a",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.3
                }}
              >
                PIONEERING INDUSTRIAL AUTOMATION<br />AND CONTROL ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: About S. P. Enterprises (Company Overview & Divisions) */}
      <section
        id="about"
        className="about-section"
        style={{
          position: "relative",
          padding: "clamp(3.5rem, 6vw, 5.5rem) 0",
          overflow: "hidden",
          borderTop: "1px solid #e2e8f0"
        }}
      >
        {/* Background Graphic Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <Image
            src="/about_section_bg_img.png"
            alt="SP Enterprises Industrial Automation Engineering"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={false}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255, 255, 255, 0.40)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="home-about-grid">
            <div>
              <div className="title-pill" style={{ marginBottom: "1rem" }}>
                <Sparkles size={14} /> ABOUT S. P. ENTERPRISES
              </div>
              <h2 style={{ fontSize: "2.4rem", color: "#0f172a", marginBottom: "1.2rem", lineHeight: "1.2", fontWeight: 800 }}>
                Pioneering Automation, Control &amp; <span style={{ color: "#c8102e" }}>Precision Engineering Solution</span>
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.7", marginBottom: "1.2rem" }}>
                <strong>S. P. Enterprises</strong>, founded and spearheaded by <strong>Mr. Pradeep Kulkarni</strong> in Pune, Maharashtra, is a multi-disciplinary industrial engineering firm bridging world-class global automation distribution with specialized domestic manufacturing.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: "1.7", marginBottom: "1.8rem" }}>
                Operating with zero-compromise quality, we serve OEMs, chemical plants, pharmaceutical companies, and process industries across India through two specialized divisions:
              </p>

              {/* Dual Core Pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255, 255, 255, 0.90)", backdropFilter: "blur(6px)", border: "1px solid rgba(226, 232, 240, 0.8)", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)", padding: "1.1rem 1.25rem", borderRadius: "10px", borderLeft: "4px solid #c8102e" }}>
                  <Award size={22} color="#c8102e" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "#0f172a", fontWeight: 700, marginBottom: "0.25rem" }}>
                      Channel Partner (13 Premier Brands)
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                      Direct distributor for ERI Solid State Relays, Weidmüller SMPS, Phoenix Contact, Gefran, West PID, Renu, JUMO, Emerson, and Honeywell Automation with full manufacturer warranties.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255, 255, 255, 0.90)", backdropFilter: "blur(6px)", border: "1px solid rgba(226, 232, 240, 0.8)", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)", padding: "1.1rem 1.25rem", borderRadius: "10px", borderLeft: "4px solid #16a34a" }}>
                  <Factory size={22} color="#16a34a" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "#0f172a", fontWeight: 700, marginBottom: "0.25rem" }}>
                      In-House Engineering &amp; Panel Manufacturing (Katraj, Pune)
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5", margin: 0 }}>
                      Type-tested PCC, MCC, PLC, VFD control panels, automated glue carton packaging machinery, and sanitary cGMP stainless steel cleanroom furniture.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/about" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Read Our Full Story <ArrowRight size={16} />
                </Link>
                <Link
                  href="/products"
                  className="btn-secondary"
                  style={{ background: "#f1f5f9", color: "#0f172a", padding: "0.85rem 1.5rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  Explore 13 Brands <Boxes size={16} />
                </Link>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  style={{ color: "#c8102e", padding: "0.85rem 1.2rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Download size={16} /> Catalogue PDF
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1536 / 1024",
                  minHeight: "320px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.08)"
                }}
              >
                <Image
                  src="/home/all_product_img.png"
                  alt="S. P. Enterprises Authorized Industrial Automation Components & Control Systems"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    padding: "0.35rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <ShieldCheck size={14} color="#22c55e" />
                  <span>100% Genuine OEM Stock</span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.90) 0%, rgba(15, 23, 42, 0.45) 60%, transparent 100%)",
                    padding: "1.2rem 1.4rem",
                    color: "white"
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#fbbf24",
                      fontWeight: 700,
                      marginBottom: "0.2rem"
                    }}
                  >
                    13 Premier OEM Brands Stocked
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Direct Authorized Distribution &amp; Engineering Supply
                  </div>
                </div>
              </div>

              {/* Official Contact & Leadership Card */}
              <div style={{ background: "rgba(255, 255, 255, 0.92)", backdropFilter: "blur(6px)", border: "1px solid rgba(226, 232, 240, 0.9)", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 8px 25px rgba(0, 0, 0, 0.04)" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Building2 size={18} color="#c8102e" /> Direct Leadership &amp; Headquarters
                </h4>
                <div style={{ fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "#475569" }}>
                  <div><strong>Director:</strong> Mr. Pradeep Kulkarni</div>
                  <div><strong>Mobile No.:</strong> <a href="tel:+918308502100" style={{ color: "#c8102e", fontWeight: 700, textDecoration: "none" }}>+91 83085 02100</a>, <a href="tel:+919422012179" style={{ color: "#c8102e", fontWeight: 700, textDecoration: "none" }}>+91 94220 12179</a></div>
                  <div><strong>Official Email:</strong> <a href="mailto:info@speautomation.com" style={{ color: "#c8102e", fontWeight: 700, textDecoration: "none" }}>info@speautomation.com</a></div>
                  <div><strong>Official Website:</strong> <a href="https://www.speautomation.com" target="_blank" rel="noopener noreferrer" style={{ color: "#c8102e", fontWeight: 700, textDecoration: "none" }}>www.speautomation.com</a></div>
                  <div><strong>Registered Office:</strong> Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products & Brand Directory */}
      <BrandDirectory 
        onSelectBrand={(brand) => router.push(`/products/${brand.id}`)} 
        hideFilters={true}
        showViewAll={true}
        asSlider={true}
      />

      {/* Manufacturing Showcase */}
      <ManufacturingSection />

      {/* Testimonials */}
      <section className="testimonials-section" style={{ padding: "5rem 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#c8102e", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "bold" }}>
              Client Trust &amp; Reviews
            </span>
            <h2 style={{ fontSize: "2.4rem", color: "#0f172a", margin: "0.8rem 0" }}>What Industrial Clients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div style={{ background: "white", padding: "2rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#f59e0b" color="#f59e0b" size={16} />
                ))}
              </div>
              <p style={{ color: "#475569", fontStyle: "italic", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                &ldquo;Outstanding reliability for ERI Solid State Relays and Weidmüller power supplies. SP Enterprises has been our primary instrumentation vendor in Pune for over 8 years.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#c8102e", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>R</div>
                <div><h4 style={{ fontSize: "0.95rem", color: "#0f172a" }}>Rahul Deshmukh</h4><span style={{ fontSize: "0.75rem", color: "#64748b" }}>Plant Operations Head</span></div>
              </div>
            </div>

            <div style={{ background: "white", padding: "2rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#f59e0b" color="#f59e0b" size={16} />
                ))}
              </div>
              <p style={{ color: "#475569", fontStyle: "italic", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                &ldquo;Mr. Pradeep Kulkarni&apos;s technical guidance on West PID temperature controllers and Gefran sensors made our extrusion line commissioning completely seamless.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#10b981", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>S</div>
                <div><h4 style={{ fontSize: "0.95rem", color: "#0f172a" }}>Sandeep Mane</h4><span style={{ fontSize: "0.75rem", color: "#64748b" }}>Chief Automation Engineer</span></div>
              </div>
            </div>

            <div style={{ background: "white", padding: "2rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#f59e0b" color="#f59e0b" size={16} />
                ))}
              </div>
              <p style={{ color: "#475569", fontStyle: "italic", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                &ldquo;Their custom SS Pharma cleanroom furniture and glue box packing conveyor exceeded our GMP audit criteria. High finish quality and on-time project handover.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f59e0b", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>A</div>
                <div><h4 style={{ fontSize: "0.95rem", color: "#0f172a" }}>Amit Kulkarni</h4><span style={{ fontSize: "0.75rem", color: "#64748b" }}>Project Manager, Sterile Formulations</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #c8102e 50%, #991b1b 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "0.8rem", lineHeight: 1.2, fontWeight: 800 }}>
              Need Authentic Components or Custom Panels?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#fef08a" }}>
              Talk directly with Director Mr. Pradeep Kulkarni (+91 83085 02100 / +91 94220 12179) or submit a technical quotation request.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/request-quote"
              style={{ background: "white", color: "#c8102e", padding: "1rem 2rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}
            >
              Request Quote <ArrowRight size={18} />
            </Link>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "1rem 2rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}
            >
              <Download size={18} /> Download Catalogue PDF
            </a>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
}
