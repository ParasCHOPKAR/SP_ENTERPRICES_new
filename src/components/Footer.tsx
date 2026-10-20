"use client";

import React, { useState } from "react";
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
  Star,
  Factory,
  Truck
} from "lucide-react";
import { BRANDS_DATA } from "@/data/brandsData";

interface FooterProps {
  onSelectBrand?: (brandId: string) => void;
}

export default function Footer({ onSelectBrand }: FooterProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>("cermet");

  return (
    <>
      <footer
        className="main-footer"
        style={{
          backgroundImage: "url('/home/footer_final_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          color: "white",
          position: "relative",
          borderTop: "1px solid rgba(200, 16, 46, 0.4)",
          paddingTop: "3.5rem"
        }}
      >
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Main 4 Columns Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginBottom: "2.5rem"
            }}
          >
            {/* Column 1: S. P. ENTERPRISES Profile */}
            <div style={{ flex: "1.2 1 290px", maxWidth: "340px" }}>
              <div
                style={{
                  background: "#ffffff",
                  padding: "0.5rem 1rem",
                  display: "inline-flex",
                  borderRadius: "8px",
                  marginBottom: "1.2rem",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                }}
              >
                <Image
                  src="/new_logo_01.png"
                  alt="S. P. Enterprises"
                  width={145}
                  height={55}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  marginBottom: "0.3rem",
                  color: "#ffffff"
                }}
              >
                S. P. ENTERPRISES
              </h3>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "#f59e0b",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginBottom: "1rem"
                }}
              >
                ENGINEERING &amp; AUTOMATION EXCELLENCE
              </div>



              {/* 4 Pillars 2x2 Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.6rem"
                }}
              >
                <div
                  style={{
                    background: "rgba(20, 8, 12, 0.65)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(200, 16, 46, 0.35)",
                    borderRadius: "8px",
                    padding: "0.65rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <ShieldCheck size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>Global Partner</div>
                    <div style={{ fontSize: "0.68rem", color: "#cbd5e1" }}>13 Global Brands</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(20, 8, 12, 0.65)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(200, 16, 46, 0.35)",
                    borderRadius: "8px",
                    padding: "0.65rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <Cpu size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>Type-Tested</div>
                    <div style={{ fontSize: "0.68rem", color: "#cbd5e1" }}>Control Panels</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(20, 8, 12, 0.65)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(200, 16, 46, 0.35)",
                    borderRadius: "8px",
                    padding: "0.65rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <Boxes size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>Automation</div>
                    <div style={{ fontSize: "0.68rem", color: "#cbd5e1" }}>Lines &amp; Conveyors</div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(20, 8, 12, 0.65)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(200, 16, 46, 0.35)",
                    borderRadius: "8px",
                    padding: "0.65rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <HeadphonesIcon size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>Dedicated</div>
                    <div style={{ fontSize: "0.68rem", color: "#cbd5e1" }}>Engineering Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div style={{ flex: "0.9 1 190px", maxWidth: "230px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
                <div style={{ width: "3px", height: "16px", background: "#f59e0b", borderRadius: "2px" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>Quick Navigation</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "1.8rem" }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About S. P. Enterprises", href: "/about" },
                  { label: "Products (13 Global Brands)", href: "/products" },
                  { label: "Manufacturing Division", href: "/manufacturing" },
                  { label: "Contact & Location", href: "/contact" }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} color="#f59e0b" />
                  </Link>
                ))}
              </div>

              {/* Download Brochure Red Button */}
              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{
                  background: "#c8102e",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "0.65rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 15px rgba(200, 16, 46, 0.4)",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#a30d24")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8102e")}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Download size={16} /> Download PDF Brochure
                </span>
                <span style={{ fontSize: "0.78rem", opacity: 0.9 }}>5.2 MB</span>
              </a>
            </div>

            {/* Column 3: Partner Brands (13) */}
            <div style={{ flex: "1.3 1 310px", maxWidth: "370px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <div style={{ width: "3px", height: "16px", background: "#f59e0b", borderRadius: "2px" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  Partner Brands (13)
                </h3>
              </div>

              <p style={{ fontSize: "0.78rem", color: "#cbd5e1", marginBottom: "1rem", lineHeight: "1.4" }}>
                Direct factory dealership and distribution with genuine OEM warranty and engineering support:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem"
                }}
              >
                {BRANDS_DATA.map((brand) => {
                  const isHighlighted = brand.id === selectedBrand || brand.id === "cermet";
                  return (
                    <Link
                      key={brand.id}
                      href={`/products?brand=${brand.id}`}
                      onClick={() => {
                        setSelectedBrand(brand.id);
                        if (onSelectBrand) onSelectBrand(brand.id);
                      }}
                      style={{
                        background: isHighlighted ? "#c8102e" : "rgba(20, 8, 12, 0.65)",
                        border: isHighlighted
                          ? "1px solid #ef4444"
                          : "1px solid rgba(200, 16, 46, 0.3)",
                        borderRadius: "5px",
                        padding: "0.4rem 0.6rem",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        if (!isHighlighted) {
                          e.currentTarget.style.background = "rgba(200, 16, 46, 0.5)";
                          e.currentTarget.style.borderColor = "#ef4444";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isHighlighted) {
                          e.currentTarget.style.background = "rgba(20, 8, 12, 0.65)";
                          e.currentTarget.style.borderColor = "rgba(200, 16, 46, 0.3)";
                        }
                      }}
                    >
                      <ChevronRight size={13} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {brand.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Column 4: Pune Headquarters Box */}
            <div
              style={{
                flex: "1.2 1 300px",
                maxWidth: "340px",
                background: "rgba(20, 8, 12, 0.75)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 16, 46, 0.4)",
                borderRadius: "12px",
                padding: "1.4rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.45)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Building2 size={18} color="#f59e0b" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  Pune Headquarters
                </h3>
              </div>

              <div>
                <div style={{ fontSize: "0.72rem", color: "#fde68a", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 700 }}>
                  KEY CONTACT PERSON
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginTop: "0.1rem" }}>
                  Pradeep Kulkarni
                </div>
                <div style={{ fontSize: "0.78rem", color: "#fbbf24" }}>
                  Commercial &amp; Technical Sales
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.82rem" }}>
                <a
                  href="tel:+918308502100"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 700,
                    background: "rgba(200, 16, 46, 0.25)",
                    padding: "0.45rem 0.75rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(200, 16, 46, 0.4)"
                  }}
                >
                  <Phone size={15} color="#fbbf24" />
                  <span>+91 8308502100</span>
                </a>

                <a
                  href="mailto:info@speautomation.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "#ffffff",
                    textDecoration: "none"
                  }}
                >
                  <Mail size={15} color="#fbbf24" />
                  <span>info@speautomation.com</span>
                </a>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <MapPin size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#e2e8f0", fontSize: "0.8rem", lineHeight: "1.4" }}>
                    Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046, Maharashtra, India
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e2e8f0", fontSize: "0.78rem" }}>
                  <Clock size={14} color="#fbbf24" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <a
                href="/01.SP Enterprises (1).pdf"
                download="SP_Enterprises_Catalogue.pdf"
                style={{
                  background: "#c8102e",
                  color: "white",
                  padding: "0.7rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 15px rgba(200, 16, 46, 0.4)",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#a30d24")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8102e")}
              >
                <Download size={15} /> Download Full PDF (5.2 MB)
              </a>
            </div>
          </div>

          {/* Middle Row: Google Rating Card & Google Map Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "2.5rem"
            }}
          >
            {/* Google Customer Rating Card */}
            <div
              style={{
                flex: "1 1 360px",
                maxWidth: "430px",
                background: "rgba(20, 8, 12, 0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                borderRadius: "12px",
                padding: "1.1rem 1.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "0.8rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                  </svg>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "#ffffff", lineHeight: 1.2 }}>
                      Google Customer Rating
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "#f59e0b", fontWeight: 700 }}>
                      S. P. Enterprises Pune
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    background: "rgba(34, 197, 94, 0.2)",
                    border: "1px solid rgba(34, 197, 94, 0.5)",
                    color: "#4ade80",
                    padding: "0.2rem 0.65rem",
                    borderRadius: "14px",
                    fontSize: "0.72rem",
                    fontWeight: 700
                  }}
                >
                  Verified Reviews
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <span style={{ fontSize: "2.1rem", fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>
                  4.9
                </span>
                <div>
                  <div style={{ display: "flex", gap: "0.2rem", color: "#fbbf24" }}>
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                    <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#cbd5e1", marginTop: "0.2rem" }}>
                    Rated 4.9/5 by 50+ Industrial OEM &amp; Corporate Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-Footer Quality & Trust Assurance Bar with Top Button */}
        <div
          style={{
            borderTop: "1px solid rgba(245, 158, 11, 0.25)",
            borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
            background: "rgba(15, 5, 8, 0.75)",
            padding: "1.2rem 0"
          }}
        >
          <div
            style={{
              maxWidth: "1560px",
              margin: "0 auto",
              padding: "0 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}
          >
            {/* 100% Genuine OEM */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: "1 1 200px" }}>
              <ShieldCheck size={22} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>100% Genuine OEM</div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Direct manufacturer warranty &amp; OEM guarantee</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.15)" }} />

            {/* Type-Tested Reliability */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: "1 1 200px" }}>
              <Award size={22} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>Type-Tested Reliability</div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Compliant with IEC &amp; CPRI testing standards</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.15)" }} />

            {/* Pharma cGMP Compliant */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: "1 1 200px" }}>
              <Factory size={22} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>Pharma cGMP Compliant</div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>SS 304/316 Cleanroom furniture &amp; doors</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.15)" }} />

            {/* Pan-India Delivery */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: "1 1 200px" }}>
              <Truck size={22} color="#f59e0b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>Pan-India Delivery</div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Rapid dispatches &amp; site commissioning</div>
              </div>
            </div>

            {/* Circular Crimson Top Button */}
            <a
              href="#top"
              title="Back to Top"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#c8102e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.68rem",
                fontWeight: 700,
                boxShadow: "0 4px 14px rgba(200, 16, 46, 0.6)",
                flexShrink: 0,
                transition: "transform 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <ChevronUp size={16} />
              <span>Top</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Legal & Copyright Bar */}
        <div
          style={{
            padding: "1.2rem 0",
            background: "rgba(10, 3, 6, 0.92)",
            borderTop: "1px solid rgba(200, 16, 46, 0.2)"
          }}
        >
          <div
            style={{
              maxWidth: "1560px",
              margin: "0 auto",
              padding: "0 2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.82rem",
              color: "#94a3b8",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div>
              &copy; {new Date().getFullYear()}{" "}
              <strong style={{ color: "#ffffff" }}>S. P. Enterprises</strong>. All Rights Reserved.
            </div>

            <div>
              Registered Facility: Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune - 411046
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</Link>
              <span>|</span>
              <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms &amp; Conditions</Link>
              <span>|</span>
              <Link href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
