"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Award, Download, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Factory, Cpu } from "lucide-react";
import { BrandData, BRANDS_DATA } from "@/data/brandsData";

interface BrandModalProps {
  brand: BrandData | null;
  onClose: () => void;
  onSelectBrand: (brand: BrandData) => void;
  onInquire: (brandName: string) => void;
}

export default function BrandModal({ brand, onClose, onSelectBrand, onInquire }: BrandModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (brand) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [brand, onClose]);

  if (!brand) return null;

  const currentIndex = BRANDS_DATA.findIndex((b) => b.id === brand.id);
  const prevBrand = BRANDS_DATA[(currentIndex - 1 + BRANDS_DATA.length) % BRANDS_DATA.length];
  const nextBrand = BRANDS_DATA[(currentIndex + 1) % BRANDS_DATA.length];

  return (
    <div className="brand-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="brand-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="brand-modal-header" style={{ background: brand.logoBg }}>
          <div className="brand-modal-header-top">
            <div className="brand-modal-nav-controls">
              <button
                type="button"
                className="brand-nav-arrow"
                onClick={() => onSelectBrand(prevBrand)}
                title={`Previous: ${prevBrand.name}`}
              >
                <ChevronLeft size={18} />
                <span className="brand-nav-arrow-label">{prevBrand.name}</span>
              </button>
              <button
                type="button"
                className="brand-nav-arrow"
                onClick={() => onSelectBrand(nextBrand)}
                title={`Next: ${nextBrand.name}`}
              >
                <span className="brand-nav-arrow-label">{nextBrand.name}</span>
                <ChevronRight size={18} />
              </button>
            </div>
            <button type="button" className="brand-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={22} />
            </button>
          </div>

          <div className="brand-modal-header-main">
            <div className="brand-modal-logo-badge">
              <span className="brand-modal-logo-text">{brand.name}</span>
            </div>
            <div className="brand-modal-titles">
              <div className="brand-modal-meta-row">
                <span className="brand-auth-pill">
                  <Award size={14} /> {brand.badge}
                </span>
                <span className="brand-category-pill">{brand.filterCategory.toUpperCase()}</span>
              </div>
              <h2 className="brand-modal-full-name">{brand.fullName}</h2>
              <p className="brand-modal-tagline">{brand.tagline}</p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="brand-modal-body">
          {/* Quick Stats / Overview Banner */}
          <div className="brand-overview-card">
            <h3 className="brand-section-heading">Brand Overview & Technology Scope</h3>
            <p className="brand-overview-text">{brand.overview}</p>

            <div className="brand-features-grid">
              {brand.keyFeatures.map((feat, i) => (
                <div key={i} className="brand-feature-item">
                  <CheckCircle2 size={16} color={brand.accentColor} className="brand-feature-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Categories Section */}
          <div className="brand-products-section">
            <div className="brand-products-header">
              <h3 className="brand-section-heading">
                <Cpu size={20} color={brand.accentColor} /> Complete Product Catalog & Lineup
              </h3>
              <span className="brand-products-count">
                {brand.categories.reduce((acc, cat) => acc + cat.products.length, 0)} Key Products Listed
              </span>
            </div>

            <div className="brand-categories-wrapper">
              {brand.categories.map((cat, idx) => (
                <div key={idx} className="brand-category-block">
                  <h4 className="brand-category-title">
                    <span className="brand-cat-accent-bar" style={{ background: brand.accentColor }}></span>
                    {cat.categoryName}
                  </h4>
                  <div className="brand-products-grid">
                    {cat.products.map((prod, pIdx) => (
                      <div key={pIdx} className="brand-product-card">
                        <div className="brand-product-card-top">
                          <h5 className="brand-product-name">{prod.name}</h5>
                          {prod.badge && (
                            <span className="brand-product-badge" style={{ borderColor: brand.accentColor, color: brand.accentColor }}>
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <p className="brand-product-desc">{prod.desc}</p>
                        {prod.specs && prod.specs.length > 0 && (
                          <div className="brand-product-specs">
                            {prod.specs.map((spec, sIdx) => (
                              <span key={sIdx} className="brand-spec-chip">
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Target Applications */}
          <div className="brand-meta-grid">
            <div className="brand-meta-card">
              <h4 className="brand-meta-title">
                <ShieldCheck size={18} color="#16a34a" /> Quality Certifications & Approvals
              </h4>
              <div className="brand-tags-list">
                {brand.certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="brand-cert-tag">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="brand-meta-card">
              <h4 className="brand-meta-title">
                <Factory size={18} color="#2563eb" /> Typical Industry Applications
              </h4>
              <div className="brand-tags-list">
                {brand.targetIndustries.map((ind, iIdx) => (
                  <span key={iIdx} className="brand-industry-tag">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="brand-modal-footer">
          <div className="brand-modal-footer-left">
            {brand.externalReference && (
              <a
                href={brand.externalReference}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-external-link"
              >
                <ExternalLink size={15} /> Official Reference Page
              </a>
            )}
            <a
              href="/01.SP Enterprises (1).pdf"
              download="SP_Enterprises_Catalogue.pdf"
              className="brand-catalogue-btn"
              title="Download Product Catalogue (PDF)"
            >
              <Download size={16} /> Download Full PDF Catalogue
            </a>
          </div>

          <div className="brand-modal-footer-right">
            <button
              type="button"
              className="brand-inquire-btn"
              style={{ background: brand.accentColor }}
              onClick={() => {
                onClose();
                onInquire(brand.fullName);
              }}
            >
              Request Quote for {brand.name} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
