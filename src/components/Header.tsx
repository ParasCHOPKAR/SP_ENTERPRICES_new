"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, MapPin, FileText, Search, ArrowRight, Menu, X, Download, ChevronDown } from "lucide-react";
import { BRANDS_DATA } from "@/data/brandsData";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowRecommendations(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendations(false);
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  const getRecommendations = () => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results = [];
    for (const brand of BRANDS_DATA) {
      if (brand.name.toLowerCase().includes(query) || brand.fullName.toLowerCase().includes(query)) {
        results.push({ type: "Brand", name: brand.name, href: `/products?brand=${brand.id}` });
      }
      for (const cat of brand.categories) {
        for (const product of cat.products) {
          if (product.name.toLowerCase().includes(query) || product.desc.toLowerCase().includes(query)) {
            results.push({ type: "Product", name: product.name, brand: brand.name, href: `/products?brand=${brand.id}&q=${encodeURIComponent(product.name)}` });
          }
        }
      }
    }
    // Deduplicate by name and return max 6
    const uniqueResults = [];
    const names = new Set();
    for (const res of results) {
      if (!names.has(res.name)) {
        names.add(res.name);
        uniqueResults.push(res);
      }
    }
    return uniqueResults.slice(0, 6);
  };

  const recommendations = getRecommendations();

  interface NavDropdownItem {
    label: string;
    href: string;
    sub?: string;
    tag?: string;
    isFeatured?: boolean;
  }

  interface NavItem {
    label: string;
    href: string;
    dropdown?: NavDropdownItem[];
  }

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "Relays & Switching", href: "/products?category=relays" },
        { label: "SMPS & Power Resistors", href: "/products?category=power" },
        { label: "PLCs, HMIs & Software", href: "/products?category=automation" },
        { label: "Sensors & Instrumentation", href: "/products?category=sensors" },
        { label: "Cleanroom & Pass Boxes", href: "/products?category=cleanroom" },
      ]
    },
    {
      label: "Manufacturing",
      href: "/manufacturing",
      dropdown: [
        {
          label: "Special Purpose Machines (SPM)",
          sub: "Hot Oil Units, 1000 LPH Hot Water, Paint Booth & Incinerator",
          tag: "Custom SPM",
          href: "/manufacturing/special-purpose-machines"
        },
        {
          label: "Packaging & Hot Melt Conveyors",
          sub: "Box Packaging (General Mills), 15m File Conveyor (Navneet)",
          tag: "Automated",
          href: "/manufacturing/glue-conveyors"
        },
        {
          label: "Material Handling & Tilters",
          sub: "Roller Conveyors, 90° Chain Tilters & 6m SS304 Lifters",
          tag: "Heavy Automation",
          href: "/manufacturing/material-handling"
        },
        {
          label: "Industrial Control Panels",
          sub: "Thyristor Panels, VFD Panels, APFC, Annunciator & SS POU",
          tag: "Type-Tested",
          href: "/manufacturing/control-panels"
        },
        {
          label: "Fixtures, Trolleys & Fabrication",
          sub: "Industrial Trolleys (Mahindra/Hikal), SS Tables & Cleanroom Racks",
          tag: "SS304 / MS",
          href: "/manufacturing/ss-fabrication"
        },
        {
          label: "SP Enterprises Manufacturing Overview",
          sub: "Handling Complete SAHPL Product Portfolio - 8+ Yrs, GMP Compliant",
          tag: "Overview",
          href: "/manufacturing",
          isFeatured: true
        }
      ]
    },

    { label: "Contact", href: "/contact" },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+918308502100" className="top-bar-item top-bar-link">
              <Phone size={14} /> +91 83085 02100
            </a>
            <a href="mailto:sales@sahpl.com" className="top-bar-item top-bar-link">
              <Mail size={14} /> sales@sahpl.com
            </a>
            <span className="top-bar-item">
              <MapPin size={14} /> Katraj, Pune - 411046
            </span>
          </div>
          <div className="top-bar-right">
            <span style={{ fontSize: "0.78rem", color: "#f59e0b", fontWeight: 700, borderRight: "1px solid rgba(255,255,255,0.2)", paddingRight: "1rem" }}>
              Director: Mr. Pradeep Kulkarni
            </span>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              className="top-bar-link"
              title="Download Product PDF"
            >
              <FileText size={14} /> Download Catalogue (PDF)
            </a>
            <Link href="/request-quote" className="top-bar-link">
              <Mail size={14} /> Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <Link href="/" className="logo-img-wrapper" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Image
                src="/new_logo_01.png"
                alt="SP Enterprises Logo"
                width={195}
                height={78}
                style={{ objectFit: "contain", height: "76px", width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: "1.8rem" }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");

              if (item.dropdown) {
                return (
                  <div
                    key={item.href}
                    style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={isActive ? "active" : ""}
                      style={{ padding: "0.5rem 0", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
                    >
                      {item.label} <ChevronDown size={15} style={{ marginTop: "2px", transition: "transform 0.2s", transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div style={{
                        position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                        background: "white", borderRadius: "14px", padding: "0.8rem",
                        boxShadow: "0 20px 50px rgba(15,23,42,0.15)", border: "1px solid #e2e8f0",
                        minWidth: item.label === "Manufacturing" ? "390px" : "280px",
                        zIndex: 150, display: "flex", flexDirection: "column", gap: "0.4rem"
                      }}>
                        {item.label === "Manufacturing" && (
                          <div style={{ padding: "0.3rem 0.8rem 0.6rem", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#c8102e", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                              SP Enterprises Manufacturing (SAHPL Portfolio)
                            </span>
                            <span style={{ fontSize: "0.7rem", background: "#fef3c7", color: "#b45309", padding: "0.15rem 0.5rem", borderRadius: "20px", fontWeight: 700 }}>
                              10+ Years Exp
                            </span>
                          </div>
                        )}
                        {item.dropdown.map(dropItem => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            style={{
                              padding: "0.65rem 0.9rem", borderRadius: "8px", textDecoration: "none",
                              color: dropItem.isFeatured ? "#c8102e" : "#1e293b",
                              background: dropItem.isFeatured ? "#fff1f2" : "transparent",
                              border: dropItem.isFeatured ? "1px dashed #fca5a5" : "1px solid transparent",
                              display: "flex", flexDirection: "column", gap: "0.2rem",
                              transition: "all 0.2s"
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLElement).style.background = dropItem.isFeatured ? "#fee2e2" : "#f8fafc";
                              (e.currentTarget as HTMLElement).style.borderColor = "#fca5a5";
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLElement).style.background = dropItem.isFeatured ? "#fff1f2" : "transparent";
                              (e.currentTarget as HTMLElement).style.borderColor = dropItem.isFeatured ? "#fca5a5" : "transparent";
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                              <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>{dropItem.label}</span>
                              {dropItem.tag && (
                                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#c8102e", background: "#fff1f2", padding: "0.12rem 0.45rem", borderRadius: "4px" }}>
                                  {dropItem.tag}
                                </span>
                              )}
                            </div>
                            {dropItem.sub && (
                              <span style={{ fontSize: "0.75rem", color: "#64748b", lineHeight: 1.35 }}>
                                {dropItem.sub}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : ""}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <div ref={searchRef} style={{ position: "relative" }}>
              <form onSubmit={handleSearch} className="search-bar">
                <Search size={18} color="#94a3b8" style={{ marginLeft: "10px" }} />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowRecommendations(true);
                  }}
                  onFocus={() => setShowRecommendations(true)}
                />
                <button type="submit" className="search-btn" title="Search">
                  <Search size={18} />
                </button>
              </form>

              {showRecommendations && searchQuery.trim().length > 0 && recommendations.length > 0 && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: "0.5rem",
                  background: "white",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e2e8f0",
                  zIndex: 100,
                  overflow: "hidden"
                }}>
                  {recommendations.map((rec, i) => (
                    <Link
                      key={i}
                      href={rec.href}
                      onClick={() => {
                        setShowRecommendations(false);
                        setSearchQuery("");
                      }}
                      style={{
                        display: "block",
                        padding: "0.75rem 1rem",
                        borderBottom: i === recommendations.length - 1 ? "none" : "1px solid #f1f5f9",
                        textDecoration: "none",
                        color: "#334155",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8fafc"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{rec.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "2px" }}>
                        {rec.type} {rec.brand && `• ${rec.brand}`}
                      </div>
                    </Link>
                  ))}
                  <div
                    onClick={() => {
                      setShowRecommendations(false);
                      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
                    }}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "#f8fafc",
                      borderTop: "1px solid #e2e8f0",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#c8102e",
                      textAlign: "center",
                      cursor: "pointer"
                    }}
                  >
                    View all results for "{searchQuery}"
                  </div>
                </div>
              )}
            </div>
            <Link href="/request-quote" className="quote-btn">
              Request Quote <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem 2rem" }}>
              {navItems.map((item) => (
                <div key={item.href} style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: pathname === item.href ? "#c8102e" : "#0f172a",
                      fontWeight: 700,
                      textDecoration: "none",
                      fontSize: "1.05rem",
                      display: "block",
                      padding: "0.4rem 0"
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", paddingLeft: "0.8rem", marginTop: "0.2rem" }}>
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: drop.isFeatured ? "#c8102e" : "#475569",
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            fontWeight: drop.isFeatured ? 700 : 500,
                            padding: "0.25rem 0",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem"
                          }}
                        >
                          <span style={{ color: "#c8102e", fontSize: "0.75rem" }}>•</span>
                          <span>{drop.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "1rem" }}>
                <Link
                  href="/request-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary"
                  style={{ textAlign: "center", textDecoration: "none" }}
                >
                  Request a Quote
                </Link>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  className="btn-outline"
                  style={{ textAlign: "center", textDecoration: "none", borderColor: "#cbd5e1", color: "#334155" }}
                >
                  <Download size={16} /> Download PDF Catalogue
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
