"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Download,
  Building2,
  ArrowRight,
  PhoneCall,
  Smartphone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA } from "@/data/brandsData";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

function RequestQuoteContent() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject") || searchParams.get("brand") || "";

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(subjectParam);
  const [partModel, setPartModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [urgency, setUrgency] = useState("Standard (1-2 Weeks)");
  const [specifications, setSpecifications] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("WhatsApp");
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");
  const [secondaryWhatsAppUrl, setSecondaryWhatsAppUrl] = useState("");

  useEffect(() => {
    if (subjectParam) {
      setCategory(subjectParam);
    }
  }, [subjectParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct formatted WhatsApp message
    const waMessage =
      `*🚨 NEW RFQ / QUOTATION REQUEST*
*S. P. ENTERPRISES, PUNE*
━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${fullName.trim()}
🏢 *Company / Organization:* ${company.trim() || "Not Specified"}
📱 *Mobile / WhatsApp:* ${phone.trim()}
✉️ *Official Email:* ${email.trim()}
🏷️ *Brand / Division:* ${category.trim() || "General Quotation Request"}
📦 *Part No. / Model:* ${partModel.trim() || "Refer to requirements"}
🔢 *Required Quantity:* ${quantity.trim() || "1 Unit / Batch"}
⏳ *Urgency:* ${urgency}
━━━━━━━━━━━━━━━━━━━━━
📝 *Technical Specifications & Requirements:*
${specifications.trim() || "Standard OEM specifications requested."}
━━━━━━━━━━━━━━━━━━━━━
💬 *Preferred Contact Channel:* ${preferredMethod}
🌐 *Submitted via:* SP Enterprises Online RFQ Portal`;

    const encodedText = encodeURIComponent(waMessage);

    // Primary WhatsApp: Director Mr. Pradeep Kulkarni (+91 83085 02100)
    const primaryUrl = `https://api.whatsapp.com/send?phone=918308502100&text=${encodedText}`;
    // Secondary WhatsApp: (+91 94220 12179)
    const secondaryUrl = `https://api.whatsapp.com/send?phone=919422012179&text=${encodedText}`;

    setGeneratedWhatsAppUrl(primaryUrl);
    setSecondaryWhatsAppUrl(secondaryUrl);
    setSubmitted(true);

    // Attempt to open WhatsApp directly in new window/tab
    try {
      const openedWindow = window.open(primaryUrl, "_blank", "noopener,noreferrer");
      if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === "undefined") {
        // In case popup blocker intercepts, the user will click the prominent green button on screen
      }
    } catch {
      // Fallback handled in the confirmation UI
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setPartModel("");
    setQuantity("");
    setSpecifications("");
  };

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section
        className="page-hero-banner"
        style={{
          width: "100%",
          backgroundImage: "url('/contact/new_request_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "220px",
          position: "relative"
        }}
      >
        <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>
          Request a Commercial Quotation - S. P. Enterprises
        </h1>
      </section>

      {/* Main Quotation Form & Support Information */}
      <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="quote-main-grid">

            {/* Left Column: Quotation Form / Success View */}
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", border: "1px solid #e2e8f0" }}>

              {submitted ? (
                /* WhatsApp Submission Success Confirmation State */
                <div style={{ padding: "1rem 0" }}>
                  <div style={{ width: "65px", height: "65px", background: "#dcfce7", color: "#16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <CheckCircle2 size={38} />
                  </div>

                  <span style={{ display: "inline-block", background: "#dcfce7", color: "#15803d", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.8rem" }}>
                    Quotation Prepared Successfully
                  </span>

                  <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.8rem", lineHeight: 1.2 }}>
                    WhatsApp Opened with Your <span style={{ color: "#16a34a" }}>Quotation Details</span>
                  </h2>

                  <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                    Thank you, <strong>{fullName}</strong>! We have pre-formatted your quotation request and launched WhatsApp to connect directly with <strong>Mr. Pradeep Kulkarni</strong> at <strong>+91 83085 02100</strong>.
                  </p>

                  {/* Summary Box */}
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.4rem", marginBottom: "2rem" }}>
                    <div style={{ fontSize: "0.8rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 700, marginBottom: "0.8rem" }}>
                      Summary of Your RFQ
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", fontSize: "0.88rem" }}>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Client Name</span>
                        <strong style={{ color: "#0f172a" }}>{fullName}</strong>
                      </div>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Company</span>
                        <strong style={{ color: "#0f172a" }}>{company || "Not specified"}</strong>
                      </div>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Category / Brand</span>
                        <strong style={{ color: "#c8102e" }}>{category || "General RFQ"}</strong>
                      </div>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Quantity</span>
                        <strong style={{ color: "#0f172a" }}>{quantity || "Standard"}</strong>
                      </div>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Client Phone</span>
                        <strong style={{ color: "#0f172a" }}>{phone}</strong>
                      </div>
                      <div>
                        <span style={{ color: "#94a3b8", display: "block", fontSize: "0.76rem" }}>Timeline / Urgency</span>
                        <strong style={{ color: "#0f172a" }}>{urgency}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Direct Launch Action Buttons */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                        color: "white",
                        textDecoration: "none",
                        padding: "1rem 1.8rem",
                        borderRadius: "10px",
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                        transition: "transform 0.2s"
                      }}
                    >
                      <MessageSquare size={22} fill="currentColor" /> Click to Send to Mr. Pradeep Kulkarni (+91 83085 02100) <ArrowRight size={18} />
                    </a>

                    <a
                      href={secondaryWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#ffffff",
                        color: "#0f172a",
                        border: "1px solid #cbd5e1",
                        textDecoration: "none",
                        padding: "0.85rem 1.4rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem"
                      }}
                    >
                      <MessageSquare size={16} color="#16a34a" /> Alternatively Send to Secondary Mobile (+91 94220 12179)
                    </a>
                  </div>

                  <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <button
                      type="button"
                      onClick={handleReset}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#c8102e",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem"
                      }}
                    >
                      &larr; Submit Another Quotation Request
                    </button>

                    <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                      Direct calls answered at <a href="tel:02024336245" style={{ color: "#0f172a", fontWeight: 700, textDecoration: "none" }}>020-24336245</a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Quotation Form */
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{ width: "50px", height: "50px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#16a34a" }}>
                      <MessageSquare size={24} fill="currentColor" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: "1.8rem", color: "#0f172a", margin: 0, fontWeight: 800 }}>
                        Quotation Form <span style={{ color: "#16a34a" }}>(WhatsApp Direct)</span>
                      </h2>
                      <p style={{ color: "#64748b", fontSize: "0.92rem", margin: "0.2rem 0 0 0" }}>
                        Fill in your requirements below. Clicking submit will automatically format and send your inquiry to Mr. Pradeep Kulkarni on WhatsApp.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>

                    {/* Step 1: Contact Details */}
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", color: "#c8102e", marginBottom: "0.8rem" }}>
                        1. Your Contact Information
                      </div>

                      <div className="quote-input-row" style={{ marginBottom: "1.1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rahul Patil"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="e.g. Tata Motors / Plant Engineering"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                      </div>

                      <div className="quote-input-row">
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            WhatsApp / Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Official Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. rahul@company.com"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Product & Requirements */}
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.3rem" }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", color: "#c8102e", marginBottom: "0.8rem" }}>
                        2. Component Brand or Manufacturing Division
                      </div>

                      <div style={{ marginBottom: "1.1rem" }}>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                          Choose Product Category or In-House Division *
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          required
                          style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none", background: "white", color: "#0f172a" }}
                        >
                          <option value="">-- Select Brand or Manufacturing Division --</option>
                          <optgroup label="Global Authorized Distributorship Brands">
                            {BRANDS_DATA.map((b) => (
                              <option key={b.id} value={`Brand: ${b.fullName}`}>
                                {b.name} &ndash; {b.tagline}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="SP Enterprises In-House Manufacturing (SAHPL Range)">
                            {MANUFACTURING_DATA.map((m) => (
                              <option key={m.id} value={`Manufacturing: ${m.title}`}>
                                {m.title}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="General Automation">
                            <option value="Custom Special Purpose Machine (SPM)">Custom Special Purpose Machine (SPM)</option>
                            <option value="Turnkey Industrial Automation Project">Turnkey Industrial Automation Project</option>
                            <option value="Annual Maintenance / Spare Supply Contract">Annual Maintenance / Spare Supply Contract</option>
                          </optgroup>
                        </select>
                      </div>

                      <div className="quote-input-row">
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Part Number / Model / Machine Name
                          </label>
                          <input
                            type="text"
                            value={partModel}
                            onChange={(e) => setPartModel(e.target.value)}
                            placeholder="e.g. Cermet DBR 500W or 3-Phase VFD Panel"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Required Quantity / Batch
                          </label>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="e.g. 10 Nos / 1 Unit / Project"
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Specifications, Urgency & Method */}
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.3rem" }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", color: "#c8102e", marginBottom: "0.8rem" }}>
                        3. Technical Specifications &amp; Timeline
                      </div>

                      <div className="quote-input-row" style={{ marginBottom: "1.1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Delivery Urgency
                          </label>
                          <select
                            value={urgency}
                            onChange={(e) => setUrgency(e.target.value)}
                            style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none", background: "white" }}
                          >
                            <option value="Immediate / Emergency Breakdown (24-48 Hrs)">Immediate / Emergency Breakdown (24-48 Hrs)</option>
                            <option value="Standard Delivery (1-2 Weeks)">Standard Delivery (1-2 Weeks)</option>
                            <option value="Planned Project Schedule (3-4 Weeks)">Planned Project Schedule (3-4 Weeks)</option>
                            <option value="Budgetary Inquiry / Tender RFQ">Budgetary Inquiry / Tender RFQ</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                            Preferred Response Channel
                          </label>
                          <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.2rem" }}>
                            {[
                              { id: "WhatsApp", label: "WhatsApp (Fastest)", icon: <MessageSquare size={14} color="#16a34a" /> },
                              { id: "Phone Call", label: "Call", icon: <Phone size={14} /> },
                              { id: "Email", label: "Email", icon: <Mail size={14} /> }
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setPreferredMethod(opt.id)}
                                style={{
                                  flex: 1,
                                  padding: "0.75rem 0.5rem",
                                  borderRadius: "6px",
                                  border: preferredMethod === opt.id ? "2px solid #16a34a" : "1px solid #cbd5e1",
                                  background: preferredMethod === opt.id ? "#f0fdf4" : "white",
                                  color: preferredMethod === opt.id ? "#15803d" : "#475569",
                                  fontWeight: 700,
                                  fontSize: "0.8rem",
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "0.3rem"
                                }}
                              >
                                {opt.icon} {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                          Detailed Technical Specifications, Ratings &amp; Target Application *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={specifications}
                          onChange={(e) => setSpecifications(e.target.value)}
                          placeholder="Please specify operating voltage/current, temperature range, enclosure protection (IP rating), brand preference, or factory location..."
                          style={{ padding: "0.9rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit via WhatsApp CTA */}
                    <div style={{ marginTop: "0.5rem" }}>
                      <button
                        type="submit"
                        style={{
                          width: "100%",
                          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                          color: "white",
                          padding: "1.1rem 2rem",
                          borderRadius: "10px",
                          border: "none",
                          fontWeight: 800,
                          fontSize: "1.05rem",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.6rem",
                          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                          transition: "all 0.2s"
                        }}
                      >
                        <MessageSquare size={20} fill="currentColor" /> Submit Quotation Request to WhatsApp <ArrowRight size={18} />
                      </button>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.8rem", fontSize: "0.78rem", color: "#64748b" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                          <ShieldCheck size={14} color="#16a34a" /> Instant message sent directly to Director Mr. Pradeep Kulkarni
                        </span>
                        <span>Zero Spam &bull; OEM Verified</span>
                      </div>
                    </div>

                  </form>
                </div>
              )}

            </div>

            {/* Right Column: Direct Director Contact & Support Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Executive Contact Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  borderRadius: "16px",
                  padding: "1.8rem",
                  color: "white",
                  border: "1px solid rgba(200, 16, 46, 0.4)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <Building2 size={18} color="#f59e0b" />
                  <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "1px", color: "#fbbf24", fontWeight: 700 }}>
                    DIRECT LEADERSHIP CONTACT
                  </span>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0.2rem 0 0.2rem", color: "#ffffff" }}>
                  Mr. Pradeep Kulkarni
                </h3>
                <div style={{ fontSize: "0.82rem", color: "#fbbf24", marginBottom: "1.4rem" }}>
                  Director &bull; S. P. Enterprises &bull; Commercial &amp; Technical Sales
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem" }}>
                  {/* WhatsApp Quick Link */}
                  <a
                    href="https://wa.me/918308502100"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      background: "rgba(37, 211, 102, 0.2)",
                      border: "1px solid rgba(37, 211, 102, 0.5)",
                      color: "#4ade80",
                      padding: "0.6rem 0.8rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: 700
                    }}
                  >
                    <MessageSquare size={16} fill="currentColor" />
                    <span>WhatsApp: +91 83085 02100</span>
                  </a>

                  {/* Secondary Mobile */}
                  <a
                    href="tel:+919422012179"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.2rem 0.4rem"
                    }}
                  >
                    <Smartphone size={16} color="#fbbf24" />
                    <span>Mobile 2: +91 94220 12179</span>
                  </a>

                  {/* Landline */}
                  <a
                    href="tel:02024336245"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.2rem 0.4rem"
                    }}
                  >
                    <PhoneCall size={16} color="#fbbf24" />
                    <span>Landline: 020-24336245</span>
                  </a>

                  {/* Official Email */}
                  <a
                    href="mailto:sales@sahpl.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "0.2rem 0.4rem"
                    }}
                  >
                    <Mail size={16} color="#fbbf24" />
                    <span>Official Email: sales@sahpl.com</span>
                  </a>

                  {/* Address */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "#cbd5e1", fontSize: "0.8rem", lineHeight: 1.4, padding: "0.3rem 0.4rem" }}>
                    <MapPin size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>Sr. No. 14/1A + 2B/2, Gujarwadi Road, Katraj, Pune &ndash; 411046, Maharashtra</span>
                  </div>
                </div>
              </div>

              {/* Quotation Process Steps */}
              <div style={{ background: "white", padding: "1.8rem", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                  How Our Quotation Process Works
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fff1f2", color: "#c8102e", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>
                      1
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#0f172a" }}>Submit Requirements</div>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0.2rem 0 0" }}>Fill out part numbers, quantities, or technical requirements and click submit.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f0fdf4", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>
                      2
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#0f172a" }}>Instant WhatsApp Handshake</div>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0.2rem 0 0" }}>WhatsApp launches directly with pre-formatted specs for immediate engineering review.</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>
                      3
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#0f172a" }}>Commercial Quotation Issued</div>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0.2rem 0 0" }}>Receive formal commercial proposal with OEM warranties, datasheets, and delivery timeline.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Full Catalogue CTA */}
              <div style={{ background: "linear-gradient(135deg, #c8102e 0%, #991b1b 100%)", borderRadius: "14px", padding: "1.5rem", color: "white", boxShadow: "0 6px 20px rgba(200, 16, 46, 0.3)" }}>
                <div style={{ fontSize: "0.76rem", textTransform: "uppercase", letterSpacing: "1px", color: "#fef08a", fontWeight: 800, marginBottom: "0.3rem" }}>
                  TECHNICAL CATALOGUE
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.5rem" }}>
                  Download Complete SP Enterprises Product Catalog
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#fee2e2", lineHeight: 1.4, margin: "0 0 1.2rem" }}>
                  Full technical specifications across 13 global brands and 5 manufacturing divisions in a single 5.2 MB PDF.
                </p>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  style={{
                    background: "white",
                    color: "#c8102e",
                    textDecoration: "none",
                    padding: "0.75rem 1.2rem",
                    borderRadius: "6px",
                    fontWeight: 800,
                    fontSize: "0.86rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
                  }}
                >
                  <Download size={16} /> Download Full PDF (5.2 MB)
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div style={{ padding: "5rem", textAlign: "center", color: "#64748b" }}>Loading Quotation Portal...</div>}>
      <RequestQuoteContent />
    </Suspense>
  );
}
