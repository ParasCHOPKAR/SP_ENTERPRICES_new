"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Download,
  Building2,
  ArrowRight,
  MessageSquare,
  Home,
  ChevronRight,
  Headphones,
  Users,
  Shield,
  FileText,
  PhoneCall,
  Smartphone,
  Globe,
  UserCheck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRANDS_DATA } from "@/data/brandsData";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";

function ContactContent() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject") || "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState(subjectParam);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (subjectParam) {
      setSubject(subjectParam);
    }
  }, [subjectParam]);

  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage =
      `*🚨 NEW RFQ / INQUIRY*
*S. P. ENTERPRISES, PUNE*
━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${fullName.trim()}
🏢 *Company:* ${company.trim() || "Not Specified"}
📱 *Mobile:* ${phone.trim()}
✉️ *Email:* ${email.trim()}
🏷️ *Brand / Division:* ${subject.trim() || "General Inquiry"}
━━━━━━━━━━━━━━━━━━━━━
📝 *Technical Requirements:*
${message.trim()}
━━━━━━━━━━━━━━━━━━━━━
🌐 *Submitted via S. P. Enterprises Contact Page*`;

    const waUrl = `https://api.whatsapp.com/send?phone=918308502100&text=${encodeURIComponent(waMessage)}`;
    setLastWhatsAppUrl(waUrl);
    setSubmitted(true);
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch { }
  };

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section
        className="page-hero-banner"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(2, 6, 23, 0.85) 0%, rgba(2, 6, 23, 0.6) 45%, rgba(2, 6, 23, 0) 100%), url('/contact/contact_hero_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "360px",
          padding: "clamp(3rem, 6vw, 4.5rem) 0",
          display: "flex",
          alignItems: "center",
          color: "white"
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div style={{ maxWidth: "600px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#e2e8f0", marginBottom: "1.5rem" }}>
              <Home size={16} />
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
              <ChevronRight size={14} />
              <span>Contact Us</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Let's Start a<br />
              <span style={{ color: "#fbbf24" }}>Conversation</span>
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#f8fafc", lineHeight: 1.5, marginBottom: "2.5rem" }}>
              Have a question, need information, or looking for a custom solution?<br />
              Our team is here to help you with quick and reliable support.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Headphones size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Quick<br />Response
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Users size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Expert<br />Guidance
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Shield size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Reliable<br />Support
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <FileText size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Customer<br />First Approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="contact-main-grid">
            {/* Form Column */}
            <div style={{ background: "white", padding: "clamp(1.5rem, 4vw, 2.5rem)", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "50px", height: "50px", background: "#fff1f2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e" }}>
                  <Send size={24} />
                </div>
                <div>
                  <h2 style={{ fontSize: "1.8rem", color: "#0f172a", margin: 0, fontWeight: 800 }}>
                    Request a <span style={{ color: "#c8102e" }}>Quotation</span> / RFQ
                  </h2>
                  <p style={{ color: "#64748b", fontSize: "0.95rem", margin: "0.2rem 0 0 0" }}>
                    Fill out the form below with your requirements. We will review and provide a commercial proposal promptly.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", padding: "2.5rem 2rem", borderRadius: "14px", color: "#065f46" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
                    <CheckCircle2 size={28} color="#059669" />
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Quotation Prepared for WhatsApp!</h3>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Your quotation details have been pre-formatted and sent to WhatsApp. <strong>Director Mr. Pradeep Kulkarni</strong> will receive your specifications directly on <strong>+91 83085 02100</strong>.
                  </p>
                  <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#16a34a",
                          color: "white",
                          textDecoration: "none",
                          padding: "0.75rem 1.4rem",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)"
                        }}
                      >
                        <MessageSquare size={16} fill="currentColor" /> Open in WhatsApp Now
                      </a>
                    )}
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setCompany("");
                        setMessage("");
                      }}
                      style={{ background: "#0f172a" }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                  <div className="contact-input-row" style={{ gap: "1.2rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Deshmukh"
                        style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ramesh@company.com"
                        style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div className="contact-input-row" style={{ gap: "1.2rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization Name"
                        style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                      Product Brand or Manufacturing Division *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none", background: "white", color: "#0f172a" }}
                    >
                      <option value="">-- Choose Brand or Division --</option>
                      <optgroup label="Global Distributorship Brands">
                        {BRANDS_DATA.map((b) => (
                          <option key={b.id} value={`Brand: ${b.fullName}`}>
                            {b.name} &ndash; {b.tagline}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Manufacturing Division">
                        {MANUFACTURING_DATA.map((m) => (
                          <option key={m.id} value={`Manufacturing: ${m.title}`}>
                            Manufacturing: {m.shortTitle}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem" }}>
                      Technical Requirements, Quantities &amp; Specifications *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify part numbers, current/voltage ratings, dimensions, motor ratings, or delivery timelines..."
                      style={{ padding: "0.95rem 1rem", borderRadius: "8px", border: "1px solid #cbd5e1", width: "100%", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
                    ></textarea>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", color: "white", padding: "0.95rem 1.8rem", borderRadius: "8px", border: "none", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.6rem", boxShadow: "0 4px 15px rgba(37,211,102,0.3)" }}
                    >
                      <MessageSquare size={16} fill="currentColor" /> Submit Quotation via WhatsApp <ArrowRight size={16} />
                    </button>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.75rem" }}>
                      <ShieldCheck size={14} />
                      <span style={{ maxWidth: "200px", lineHeight: 1.3 }}>Your information is secure and will only be used to respond to your inquiry.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Information Column */}
            <div>
              <div style={{ marginBottom: "1.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <h2 style={{ fontSize: "2rem", color: "#0f172a", margin: 0, fontWeight: 800 }}>Contact Information</h2>
                  <div style={{ height: "4px", width: "40px", background: "#c8102e", borderRadius: "2px" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <p style={{ color: "#64748b", fontSize: "0.95rem", margin: 0, maxWidth: "80%" }}>
                    Feel free to reach out to us through any of the following channels.<br />
                    Our team will be happy to assist you.
                  </p>
                  <div style={{ fontFamily: "cursive", color: "#cbd5e1", fontSize: "2rem", transform: "rotate(-5deg)" }}>
                    Get In Touch
                  </div>
                </div>
              </div>

              {/* Director & Executive Leadership Banner */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  color: "white",
                  marginBottom: "1.2rem",
                  border: "1px solid rgba(200, 16, 46, 0.4)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1.2rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(200, 16, 46, 0.25)", border: "1px solid rgba(245, 158, 11, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fbbf24", flexShrink: 0 }}>
                    <UserCheck size={26} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: "#fbbf24", fontWeight: 700 }}>
                      DIRECTOR &bull; S. P. ENTERPRISES
                    </div>
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
                      Mr. Pradeep Kulkarni
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "2px" }}>
                      Commercial &amp; Technical Sales &bull; Executive Leadership
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  <a
                    href="tel:+918308502100"
                    style={{
                      background: "#c8102e",
                      color: "white",
                      textDecoration: "none",
                      padding: "0.6rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      boxShadow: "0 2px 10px rgba(200,16,46,0.3)"
                    }}
                  >
                    <Phone size={14} /> Call Director
                  </a>
                  <a
                    href="https://wa.me/918308502100"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#16a34a",
                      color: "white",
                      textDecoration: "none",
                      padding: "0.6rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem"
                    }}
                  >
                    <MessageSquare size={14} fill="currentColor" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* 3 Information Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "1.2rem" }}>
                {/* Mobile Numbers */}
                <div style={{ background: "white", padding: "1.4rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.3rem", fontWeight: 700 }}>Mobile No.</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <a href="tel:+918308502100" style={{ color: "#c8102e", fontSize: "1.05rem", fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
                          +91 83085 02100
                        </a>
                        <a href="tel:+919422012179" style={{ color: "#c8102e", fontSize: "1.05rem", fontWeight: 800, textDecoration: "none", display: "inline-block" }}>
                          +91 94220 12179
                        </a>
                      </div>
                      <span style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "0.3rem", display: "block" }}>
                        Direct calls &amp; WhatsApp support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div style={{ background: "white", padding: "1.4rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <Mail size={18} fill="currentColor" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.35rem", fontWeight: 700 }}>Official Email</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <a
                          href="mailto:info@speautomation.com"
                          style={{
                            color: "#c8102e",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            fontFamily: "inherit",
                            textDecoration: "none",
                            display: "inline-block",
                            transition: "opacity 0.2s"
                          }}
                        >
                          info@speautomation.com
                        </a>
                      </div>
                      <span style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "0.3rem", display: "block" }}>
                        Official inquiries &amp; quotations
                      </span>
                    </div>
                  </div>
                </div>

                {/* Official Website */}
                <div style={{ background: "white", padding: "1.4rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.3rem", fontWeight: 700 }}>Official Website</h4>
                      <a href="https://www.speautomation.com" target="_blank" rel="noopener noreferrer" style={{ color: "#c8102e", fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                        www.speautomation.com <ArrowRight size={14} />
                      </a>
                      <span style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "0.3rem", display: "block" }}>
                        Official website of S. P. Enterprises
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registered Office & Business Address (Retained on Contact Us page) */}
              <div style={{ background: "white", padding: "1.4rem 1.6rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                    <MapPin size={20} fill="currentColor" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", margin: 0, fontWeight: 700 }}>
                        Registered Business Address
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#64748b", fontSize: "0.75rem" }}>
                        <Clock size={13} color="#c8102e" />
                        <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                    <p style={{ color: "#334155", fontSize: "0.92rem", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                      Sr. No. 14/1A + 2B/2, Gujarwadi Road, Near Mangdewadi, Katraj, Pune &ndash; 411046, Maharashtra (India)
                    </p>
                    <p style={{ color: "#64748b", fontSize: "0.78rem", margin: "0.4rem 0 0 0" }}>
                      Headquarters, In-House Manufacturing Facility &amp; Central Distribution Warehouse
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading Contact Details...</div>}>
      <ContactContent />
    </Suspense>
  );
}
