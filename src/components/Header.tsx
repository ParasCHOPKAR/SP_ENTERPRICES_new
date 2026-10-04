"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, MapPin, FileText, Search, ArrowRight, Menu, X, Download, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  const navItems = [
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
        { label: "Control Panels", href: "/manufacturing/control-panels" },
        { label: "Material Handling", href: "/manufacturing/material-handling" },
        { label: "Packaging Conveyors", href: "/manufacturing/glue-conveyors" },
        { label: "Pharma SS Furniture", href: "/manufacturing/ss-fabrication" }
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
            <a href="mailto:spe@sahpl.com" className="top-bar-item top-bar-link">
              <Mail size={14} /> spe@sahpl.com
            </a>
            <span className="top-bar-item">
              <MapPin size={14} /> Katraj, Pune - 411046
            </span>
          </div>
          <div className="top-bar-right">
            <span style={{ fontSize: "0.78rem", color: "#93c5fd", fontWeight: 600, borderRight: "1px solid rgba(255,255,255,0.2)", paddingRight: "1rem" }}>
              Contact: Pradeep Kulkarni
            </span>
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              className="top-bar-link"
              title="Download Product PDF"
            >
              <FileText size={14} /> Download Catalogue (PDF)
            </a>
            <Link href="/contact" className="top-bar-link">
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
                src="/logo_01.png"
                alt="SP Enterprises Logo"
                width={170}
                height={60}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
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
                      style={{ padding: "1.5rem 0", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
                    >
                      {item.label} <ChevronDown size={15} style={{ marginTop: "2px", transition: "transform 0.2s", transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)" }} />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div style={{
                        position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                        background: "white", borderRadius: "12px", padding: "0.8rem",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)", border: "1px solid #f1f5f9",
                        minWidth: "260px", zIndex: 50, display: "flex", flexDirection: "column", gap: "0.4rem"
                      }}>
                        {item.dropdown.map(dropItem => (
                          <Link 
                            key={dropItem.href} 
                            href={dropItem.href}
                            style={{
                              padding: "0.8rem 1rem", borderRadius: "8px", textDecoration: "none",
                              color: "#334155", fontSize: "0.95rem", fontWeight: 600,
                              transition: "all 0.2s", background: "transparent"
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLElement).style.background = "#eff6ff";
                              (e.currentTarget as HTMLElement).style.color = "#2563eb";
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                              (e.currentTarget as HTMLElement).style.color = "#334155";
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropItem.label}
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
            <form onSubmit={handleSearch} className="search-bar">
              <Search size={18} color="#94a3b8" style={{ marginLeft: "10px" }} />
              <input
                type="text"
                placeholder="Search products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn" title="Search">
                <Search size={18} />
              </button>
            </form>
            <Link href="/contact" className="quote-btn">
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: pathname === item.href ? "#2563eb" : "#0f172a",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #f1f5f9"
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "1rem" }}>
                <Link
                  href="/contact"
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
