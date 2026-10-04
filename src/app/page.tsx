"use client";

import React, { useState, useEffect } from "react";
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
import { BRANDS_DATA } from "@/data/brandsData";
import BrandDirectory from "@/components/BrandDirectory";
import ManufacturingSection from "@/components/ManufacturingSection";

const HERO_PRODUCT_SLIDES = [
  {
    id: "power-switching",
    image: "/home_hero_product.png",
    alt: "Industrial Automation Hardware - Solid State Relays, SMPS, Heatsinks & Terminal Blocks",
    title: "Relays, SMPS & Power Control",
    tag: "Power Switching"
  },
  {
    id: "sensors-instrumentation",
    image: "/home_hero_product_03.png",
    alt: "Industrial Automation Instrumentation - Pressure Transmitters, Flow Meters, Gauges, HMI & PLC",
    title: "Sensors, Transmitters & Instrumentation",
    tag: "Process Automation"
  }
];

export default function Home() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  // Auto change product image every 5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => {
        setPrevSlide(current);
        return (current + 1) % HERO_PRODUCT_SLIDES.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (nextIndex: number) => {
    if (nextIndex === activeSlide) return;
    setPrevSlide(activeSlide);
    setActiveSlide(nextIndex);
  };

  const getSlideClass = (index: number) => {
    if (index === activeSlide) {
      return prevSlide === null ? "hero-product-slide initial" : "hero-product-slide active";
    }
    if (index === prevSlide) {
      return "hero-product-slide inactive";
    }
    return "hero-product-slide hidden";
  };

  const handleInquire = (subject: string) => {
    router.push(`/contact?subject=${encodeURIComponent(subject)}`);
  };

  return (
    <main id="top" className="site-wrapper">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-image">
          <Image
            src="/home_hero_background.png"
            alt="SP Enterprises Industrial Automation and Control Technology"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Dynamic Sliding Product Showcase */}
        <div className="hero-product-layer">
          {HERO_PRODUCT_SLIDES.map((slide, index) => {
            const slideClass = getSlideClass(index);
            return (
              <div
                key={`${slide.id}-${slideClass}`}
                className={slideClass}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={index === 0}
                />
              </div>
            );
          })}
        </div>

        <div className="hero-gradient-overlay"></div>

        {/* Interactive Slide Controls & Badge */}
        <div className="hero-product-controls" aria-label="Hero product showcase navigation">
          <div className="hero-product-info-pill">
            <span className="hero-product-status-dot" />
            <span className="hero-product-caption">
              {HERO_PRODUCT_SLIDES[activeSlide].title}
            </span>
          </div>
          <div className="hero-product-nav-actions">
            <button
              type="button"
              className="hero-product-arrow"
              onClick={() => goToSlide((activeSlide - 1 + HERO_PRODUCT_SLIDES.length) % HERO_PRODUCT_SLIDES.length)}
              aria-label="Previous product showcase"
              title="Previous Showcase"
            >
              <ChevronLeft size={14} />
            </button>
            <div className="hero-product-indicators">
              {HERO_PRODUCT_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`hero-product-dot ${idx === activeSlide ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide to ${slide.title}`}
                  title={slide.title}
                />
              ))}
            </div>
            <button
              type="button"
              className="hero-product-arrow"
              onClick={() => goToSlide((activeSlide + 1) % HERO_PRODUCT_SLIDES.length)}
              aria-label="Next product showcase"
              title="Next Showcase"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Precision Solutions for<br />
              <span className="highlight">Industrial Automation</span> &amp; Control
            </h1>
            <p className="hero-desc">
              Authorised Channel Partner for 13 premier global engineering brands including ERI Solid State Relays, Weidmüller SMPS, Phoenix Contact, Gefran, West PID, Renu, JUMO, Emerson, and Honeywell Automation &mdash; coupled with in-house Control Panel and Packaging Machine Manufacturing in Pune.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn-primary">
                Explore Products (13 Brands) <ArrowRight size={18} />
              </Link>
              <Link href="/manufacturing" className="btn-secondary" style={{ background: "#ffffff", color: "#1e3a8a", padding: "0.9rem 1.6rem", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
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
              <span style={{ fontSize: "0.75rem", color: "#93c5fd", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginRight: "0.5rem" }}>
                Featured Brands:
              </span>
              {BRANDS_DATA.slice(0, 7).map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => router.push(`/products/${b.id}`)}
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "white",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "14px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  title={`Click to view ${b.name} products`}
                >
                  {b.name}
                </button>
              ))}
              <Link
                href="/products"
                style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", marginLeft: "0.5rem" }}
              >
                +6 more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Trust Bar */}
      <div className="middle-features-bar" style={{ background: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
          <div style={{ flex: "1.5 1 500px", display: "flex", justifyContent: "space-between", padding: "1.5rem 2rem 1.5rem 0", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <Award size={28} color="#2563eb" />
              <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#1e293b" }}>
                Authorised<br />Distributor
              </span>
            </div>
            <div style={{ width: "1px", height: "40px", background: "#e2e8f0" }} className="feature-divider"></div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <Package size={28} color="#2563eb" />
              <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#1e293b" }}>
                13 Premier<br />Global Brands
              </span>
            </div>
            <div style={{ width: "1px", height: "40px", background: "#e2e8f0" }} className="feature-divider"></div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <Truck size={28} color="#2563eb" />
              <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#1e293b" }}>
                Pan-India<br />Prompt Supply
              </span>
            </div>
            <div style={{ width: "1px", height: "40px", background: "#e2e8f0" }} className="feature-divider"></div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <HeadphonesIcon size={28} color="#2563eb" />
              <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#1e293b" }}>
                Technical<br />Engineering Support
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 280px", background: "linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", position: "relative" }}>
            <div style={{ textAlign: "right" }}>
              <h3 style={{ fontSize: "1.2rem", letterSpacing: "2px", marginBottom: "0.2rem" }}>S. P. ENTERPRISES</h3>
              <p style={{ fontSize: "0.75rem", letterSpacing: "1px", color: "#93c5fd" }}>
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
          padding: "5.5rem 0",
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
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="title-pill" style={{ marginBottom: "1rem" }}>
                <Sparkles size={14} /> ABOUT S. P. ENTERPRISES
              </div>
              <h2 style={{ fontSize: "2.4rem", color: "#0f172a", marginBottom: "1.2rem", lineHeight: "1.2", fontWeight: 800 }}>
                Pioneering Automation, Control &amp; <span style={{ color: "#2563eb" }}>Precision Manufacturing</span>
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.7", marginBottom: "1.2rem" }}>
                <strong>S. P. Enterprises</strong>, founded and spearheaded by <strong>Mr. Pradeep Kulkarni</strong> in Pune, Maharashtra, is a multi-disciplinary industrial engineering firm bridging world-class global automation distribution with specialized domestic manufacturing.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: "1.7", marginBottom: "1.8rem" }}>
                Operating with zero-compromise quality, we serve OEMs, chemical plants, pharmaceutical companies, and process industries across India through two specialized divisions:
              </p>

              {/* Dual Core Pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255, 255, 255, 0.90)", backdropFilter: "blur(6px)", border: "1px solid rgba(226, 232, 240, 0.8)", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)", padding: "1.1rem 1.25rem", borderRadius: "10px", borderLeft: "4px solid #2563eb" }}>
                  <Award size={22} color="#2563eb" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "#0f172a", fontWeight: 700, marginBottom: "0.25rem" }}>
                      Authorized Channel Partner (13 Premier Brands)
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
                  style={{ color: "#2563eb", padding: "0.85rem 1.2rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Download size={16} /> Catalogue PDF
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ position: "relative", height: "320px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.08)" }}>
                <Image
                  src="/home/home_about_01.png"
                  alt="S. P. Enterprises Automation Components and Manufacturing Pune"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(15,23,42,0.85), transparent)", padding: "1.5rem", color: "white" }}>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "#93c5fd", fontWeight: 700 }}>
                    Pune Facility &bull; Katraj
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Trusted Partner to 200+ Industrial Plants
                  </div>
                </div>
              </div>

              {/* Official Contact & Leadership Card */}
              <div style={{ background: "rgba(255, 255, 255, 0.92)", backdropFilter: "blur(6px)", border: "1px solid rgba(226, 232, 240, 0.9)", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 8px 25px rgba(0, 0, 0, 0.04)" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Building2 size={18} color="#2563eb" /> Direct Leadership &amp; Headquarters
                </h4>
                <div style={{ fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "#475569" }}>
                  <div><strong>Managing Partner:</strong> Mr. Pradeep Kulkarni</div>
                  <div><strong>Direct Phone:</strong> <a href="tel:+918308502100" style={{ color: "#2563eb", fontWeight: 700, textDecoration: "none" }}>+91 83085 02100</a></div>
                  <div><strong>Corporate Email:</strong> <a href="mailto:spe@sahpl.com" style={{ color: "#1e293b", textDecoration: "none" }}>spe@sahpl.com</a> / <a href="mailto:Spe.mktg@gmail.com" style={{ color: "#64748b", textDecoration: "none" }}>Spe.mktg@gmail.com</a></div>
                  <div><strong>Registered Office:</strong> Katraj, Pune - 411046, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products & Brand Directory */}
      <BrandDirectory 
        onSelectBrand={(brand) => router.push(`/products/${brand.id}`)} 
        limit={3}
        hideFilters={true}
        showViewAll={true}
      />

      {/* Manufacturing Showcase */}
      <ManufacturingSection />

      {/* Testimonials */}
      <section className="testimonials-section" style={{ padding: "5rem 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#3b82f6", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "bold" }}>
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
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#3b82f6", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>R</div>
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
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f43f5e", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>A</div>
                <div><h4 style={{ fontSize: "0.95rem", color: "#0f172a" }}>Amit Kulkarni</h4><span style={{ fontSize: "0.75rem", color: "#64748b" }}>Project Manager, Sterile Formulations</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <h2 style={{ fontSize: "2.3rem", marginBottom: "0.8rem", lineHeight: 1.2, fontWeight: 800 }}>
              Need Authentic Components or Custom Panels?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#bfdbfe" }}>
              Talk directly with Mr. Pradeep Kulkarni (+91 83085 02100) or submit a technical quotation request.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ background: "white", color: "#1e3a8a", padding: "1rem 2rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}
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
