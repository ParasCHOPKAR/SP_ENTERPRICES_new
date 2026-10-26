"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Boxes,
  HeadphonesIcon,
  Download,
  ChevronUp,
  Clock,
  Award,
  Building2,
  Truck,
  Users,
  Shield
} from "lucide-react";
import { BRAND_STRIP_LOGOS } from "@/data/brandsData";

const MARQUEE_BRAND_ITEMS = [
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS,
  ...BRAND_STRIP_LOGOS
];

export default function Footer() {
  return (
    <>
      <footer
        className="main-footer"
        style={{
          position: "relative",
          backgroundImage: "linear-gradient(180deg, rgba(8, 2, 5, 0.62) 0%, rgba(8, 2, 5, 0.22) 40%, rgba(8, 2, 5, 0.78) 100%), url('/footer_new_bg_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#080205",
          color: "white",
          paddingTop: "3.5rem",
          overflow: "hidden",
          boxShadow: "inset 0 35px 70px rgba(0, 0, 0, 0.92), inset 0 -35px 70px rgba(0, 0, 0, 0.92), 0 -20px 40px rgba(0, 0, 0, 0.5)",
          borderTop: "1px solid rgba(245, 158, 11, 0.35)"
        }}
      >
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Main 4 Columns Row */}
          <div className="footer-main-grid" style={{ marginBottom: "2.8rem" }}>
            {/* Column 1: S. P. ENTERPRISES Profile */}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  background: "#ffffff",
                  padding: "0.45rem 0.9rem",
                  display: "inline-flex",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                }}
              >
                <Image
                  src="/new_logo_01.png"
                  alt="S. P. Enterprises"
                  width={140}
                  height={52}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  marginBottom: "0.25rem",
                  color: "#ffffff"
                }}
              >
                S. P. ENTERPRISES
              </h3>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#f59e0b",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginBottom: "0.85rem"
                }}
              >
                ENGINEERING AUTOMATION EXCELLENCE
              </div>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#94a3b8",
                  lineHeight: 1.55,
                  margin: "0 0 1.25rem 0",
                  maxWidth: "340px"
                }}
              >
                Your trusted partner for genuine OEM industrial automation products, engineering support and end-to-end solutions.
              </p>

              {/* 4 Pillars Horizontal Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                  gap: "0.45rem"
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "0.45rem 0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}
                >
                  <ShieldCheck size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>13+</div>
                    <div style={{ fontSize: "0.62rem", color: "#94a3b8", lineHeight: 1.2 }}>Global Brands</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "0.45rem 0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}
                >
                  <Cpu size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>Type-Tested</div>
                    <div style={{ fontSize: "0.62rem", color: "#94a3b8", lineHeight: 1.2 }}>Control Panels</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "0.45rem 0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}
                >
                  <Boxes size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>Engineering</div>
                    <div style={{ fontSize: "0.62rem", color: "#94a3b8", lineHeight: 1.2 }}>Support</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "0.45rem 0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}
                >
                  <HeadphonesIcon size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>Dedicated</div>
                    <div style={{ fontSize: "0.62rem", color: "#94a3b8", lineHeight: 1.2 }}>Customer Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
                <div style={{ width: "3px", height: "18px", background: "#f59e0b", borderRadius: "2px" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>Quick Navigation</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About S. P. Enterprises", href: "/about" },
                  { label: "Products (13 Global Brands)", href: "/products" },
                  { label: "Manufacturing Division", href: "/manufacturing" },
                  { label: "Request a Quote", href: "/request-quote" },
                  { label: "Contact & Location", href: "/contact" }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    style={{
                      color: "#cbd5e1",
                      textDecoration: "none",
                      fontSize: "0.86rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                      <ChevronRight size={13} color="#f59e0b" />
                      <span>{item.label}</span>
                    </span>
                    <ChevronRight size={13} color="rgba(255, 255, 255, 0.35)" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Partner Brands (13) */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
                <div style={{ width: "3px", height: "18px", background: "#f59e0b", borderRadius: "2px" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  Partner Brands (13)
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem 1.2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { name: "ERI", id: "eri" },
                    { name: "Cermet Resistors", id: "cermet" },
                    { name: "Phoenix Contact", id: "phoenix" },
                    { name: "CD Automation", id: "cd-automation" },
                    { name: "JUMO India", id: "jumo" },
                    { name: "Automation Software", id: "automation-software" },
                    { name: "Clean Grad Slovenia", id: "cleangrad" },
                  ].map((b) => (
                    <Link
                      key={b.id}
                      href={`/products/${b.id}`}
                      style={{
                        color: "#cbd5e1",
                        textDecoration: "none",
                        fontSize: "0.83rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                    >
                      <ChevronRight size={13} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {b.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { name: "Weidmüller", id: "weidmuller" },
                    { name: "West Control Solutions", id: "west" },
                    { name: "Renu Electronics", id: "renu" },
                    { name: "Gefran", id: "gefran" },
                    { name: "Emerson", id: "emerson" },
                    { name: "Honeywell Automation", id: "honeywell" },
                  ].map((b) => (
                    <Link
                      key={b.id}
                      href={`/products/${b.id}`}
                      style={{
                        color: "#cbd5e1",
                        textDecoration: "none",
                        fontSize: "0.83rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                    >
                      <ChevronRight size={13} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {b.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 4: Pune Headquarters */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.9rem" }}>
                <Building2 size={18} color="#f59e0b" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  Pune Headquarters
                </h3>
              </div>

              <div style={{ marginBottom: "0.9rem" }}>
                <div style={{ fontSize: "0.72rem", color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 700 }}>
                  DIRECTOR
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginTop: "0.15rem" }}>
                  Mr. Pradeep Kulkarni
                </div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                  S. P. Enterprises &bull; Commercial &amp; Technical Sales
                </div>
              </div>

              {/* Phone Numbers Pill */}
              <div
                style={{
                  background: "rgba(90, 15, 25, 0.65)",
                  border: "1px solid rgba(200, 16, 46, 0.4)",
                  borderRadius: "8px",
                  padding: "0.45rem 0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  marginBottom: "0.9rem"
                }}
              >
                <a
                  href="tel:+918308502100"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.82rem"
                  }}
                >
                  <Phone size={13} color="#fbbf24" />
                  <span>83085 02100</span>
                </a>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>|</span>
                <a
                  href="tel:+919422012179"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.82rem"
                  }}
                >
                  <Phone size={13} color="#fbbf24" />
                  <span>94220 12179</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", fontSize: "0.82rem" }}>
                <a
                  href="mailto:info@speautomation.com"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#cbd5e1", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <Mail size={15} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <span>info@speautomation.com</span>
                </a>

                <a
                  href="https://www.speautomation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#cbd5e1", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <ExternalLink size={15} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <span>www.speautomation.com</span>
                </a>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <MapPin size={15} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#cbd5e1", fontSize: "0.78rem", lineHeight: 1.4 }}>
                    Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046, Maharashtra, India
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#cbd5e1", fontSize: "0.78rem" }}>
                  <Clock size={14} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Authorized Distribution & Channel Partners Banner */}
        <div
          style={{
            borderTop: "1px solid rgba(245, 158, 11, 0.25)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
            background: "rgba(10, 3, 6, 0.75)",
            padding: "1.3rem 0 1.6rem",
            position: "relative"
          }}
        >
          <div
            style={{
              maxWidth: "1560px",
              margin: "0 auto",
              padding: "0 2rem 1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#f59e0b",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "0.2rem"
                }}
              >
                AUTHORIZED DISTRIBUTION &amp; CHANNEL PARTNERS
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ width: "3px", height: "18px", background: "#f59e0b", borderRadius: "2px" }} />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  Global Industrial Automation &amp; Control Brands
                </h4>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.8rem",
                  color: "#cbd5e1"
                }}
              >
                <ShieldCheck size={16} color="#ef4444" />
                <span>100% Genuine Factory-Sealed Products with OEM Warranty</span>
              </div>

              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{
                  background: "#c8102e",
                  color: "#ffffff",
                  padding: "0.55rem 1.15rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  boxShadow: "0 4px 14px rgba(200, 16, 46, 0.5)",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#a30d24")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8102e")}
              >
                <Download size={14} /> Download Brochure <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Continuous Partner Brand Marquee Slider */}
          <div
            className="footer-marquee-container"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "0.5rem 0 0.8rem 0",
              width: "100%"
            }}
          >
            {/* Left Edge Ambient Fade Mask */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "90px",
                background: "linear-gradient(to right, rgba(8, 2, 5, 0.95), transparent)",
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
                width: "90px",
                background: "linear-gradient(to left, rgba(8, 2, 5, 0.95), transparent)",
                zIndex: 2,
                pointerEvents: "none"
              }}
            />

            <div className="footer-marquee-track">
              {MARQUEE_BRAND_ITEMS.map((brand, index) => (
                <Link
                  key={`${brand.id}-${index}`}
                  href={brand.href}
                  title={`${brand.name} - View Products`}
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
        </div>

        {/* 5 Assurance Pillars (The Dark Red / Crimson Bar) */}
        <div
          style={{
            background: "linear-gradient(90deg, #660d19 0%, #4a0812 50%, #660d19 100%)",
            borderTop: "1px solid rgba(245, 158, 11, 0.2)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.2)",
            padding: "1rem 0"
          }}
        >
          <div
            className="footer-trust-row"
            style={{
              maxWidth: "1560px",
              margin: "0 auto",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              alignItems: "center",
              gap: "1.2rem"
            }}
          >
            {/* Pillar 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <ShieldCheck size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>100% Genuine OEM</div>
                <div style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.3 }}>Direct manufacturer warranty &amp; OEM guarantee</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Award size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>Type-Tested Reliability</div>
                <div style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.3 }}>Compliant with IEC &amp; CPRI testing standards</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Truck size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>Pan-India Delivery</div>
                <div style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.3 }}>Rapid dispatches &amp; site commissioning</div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Users size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>Expert Engineering Support</div>
                <div style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.3 }}>From selection to implementation</div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Shield size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>Pharma cGMP Compliant</div>
                <div style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.3 }}>SS 304/316 Cleanroom furniture &amp; doors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal & Copyright Bar */}
        <div
          style={{
            padding: "1rem 0",
            background: "#080205",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <div
            className="footer-legal-bar"
            style={{
              maxWidth: "1560px",
              margin: "0 auto",
              padding: "0 2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.8rem",
              color: "#94a3b8",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div>
              &copy; {new Date().getFullYear()}{" "}
              <strong style={{ color: "#ffffff" }}>S. P. Enterprises</strong>. All Rights Reserved.
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              <MapPin size={14} color="#c8102e" style={{ flexShrink: 0 }} />
              <span>Registered Facility: Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</Link>
                <span>|</span>
                <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms &amp; Conditions</Link>
                <span>|</span>
                <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Sitemap</Link>
              </div>

              {/* Social Icons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#0a66c2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    fontWeight: 800
                  }}
                >
                  in
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#c8102e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none"
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918308502100"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#25d366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none"
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.777.978-.952 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.677-.517-.175-.009-.376-.011-.577-.011s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.197 1.897.12.579-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.408C8.423 21.499 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </a>

                {/* Scroll to Top circular button */}
                <a
                  href="#top"
                  title="Back to Top"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#c8102e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    marginLeft: "0.4rem",
                    boxShadow: "0 2px 8px rgba(200, 16, 46, 0.5)",
                    transition: "transform 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <ChevronUp size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
