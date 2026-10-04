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
  MessageSquare
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }, 6000);
  };

  return (
    <div className="site-wrapper">
      <Header />

      {/* Page Hero Banner */}
      <section className="page-hero-banner" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", padding: "4.5rem 0", color: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <div className="title-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#93c5fd", borderColor: "rgba(255,255,255,0.25)" }}>
              <Mail size={14} /> GET IN TOUCH
            </div>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.2rem" }}>
              Contact Our Team &amp; <span style={{ color: "#60a5fa" }}>Request a Quote</span>
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              Connect directly with <strong>Mr. Pradeep Kulkarni</strong> for product pricing, delivery schedules, and technical panel sizing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "4rem" }}>
            {/* Form Column */}
            <div>
              <div className="title-pill">
                <Send size={14} /> SEND US A MESSAGE
              </div>
              <h2 style={{ fontSize: "2.3rem", color: "#0f172a", margin: "0.8rem 0 1.5rem", fontWeight: 800 }}>
                Request Quotation / RFQ
              </h2>
              <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Fill out the form below with your required brand, part numbers, quantity, or panel technical parameters. We will review and provide a commercial proposal promptly.
              </p>

              {submitted ? (
                <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", padding: "2.5rem 2rem", borderRadius: "14px", color: "#065f46" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
                    <CheckCircle2 size={28} color="#059669" />
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Thank You! Inquiry Received</h3>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Your quotation request has been sent to our sales &amp; engineering team. <strong>Mr. Pradeep Kulkarni</strong> will review your specifications and contact you at {email || "your provided address"} shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setSubmitted(false)}
                    style={{ background: "#059669" }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
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
                      <optgroup label="Authorized Distributorship Brands">
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

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ background: "#2563eb", color: "white", padding: "1rem 2.2rem", borderRadius: "8px", border: "none", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}
                  >
                    Submit Quotation Request <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Official Information Card strictly from PDF Page 29 */}
            <div>
              <div style={{ background: "white", padding: "3rem", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", marginBottom: "2rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#2563eb", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                  OFFICIAL CONTACT DETAILS (AS PER BROCHURE)
                </span>
                <h3 style={{ fontSize: "1.8rem", color: "#0f172a", marginTop: "0.4rem", fontWeight: 800 }}>
                  S. P. ENTERPRISES
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "1.8rem" }}>
                  Authorized Industrial Partner &amp; In-House Manufacturer
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Contact Person</h4>
                      <p style={{ color: "#1e293b", fontSize: "1.1rem", fontWeight: 800 }}>Pradeep Kulkarni</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Mobile Number</h4>
                      <a href="tel:+918308502100" style={{ color: "#2563eb", fontSize: "1.15rem", fontWeight: 800, textDecoration: "none", display: "block" }}>
                        +91 83085 02100
                      </a>
                      <a href="https://wa.me/918308502100" target="_blank" rel="noopener noreferrer" style={{ color: "#16a34a", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem", marginTop: "4px" }}>
                        <MessageSquare size={13} /> Chat on WhatsApp (+91 83085 02100)
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Official Email</h4>
                      <a href="mailto:spe@sahpl.com" style={{ color: "#1e293b", fontSize: "0.98rem", fontWeight: 700, textDecoration: "none", display: "block" }}>
                        spe@sahpl.com
                      </a>
                      <a href="mailto:Spe.mktg@gmail.com" style={{ color: "#64748b", fontSize: "0.88rem", textDecoration: "none" }}>
                        Spe.mktg@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <ExternalLink size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Official Website</h4>
                      <a href="https://www.sahpl.com" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontSize: "0.95rem", fontWeight: 700, textDecoration: "underline" }}>
                        www.sahpl.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Registered Office</h4>
                      <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.5 }}>
                        Sr. No. 14/1A + 2B/2, Gujarwadi Road,<br />
                        Near Mangdewadi, Katraj,<br />
                        Pune &ndash; 411046, Maharashtra (India)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Working Hours</h4>
                      <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.4 }}>
                        Monday &ndash; Saturday: 9:30 AM &ndash; 7:00 PM<br />
                        Sunday: Closed (Emergency breakdown calls answered)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct PDF Download Box */}
              <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", padding: "2rem", borderRadius: "16px", color: "white" }}>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Download Full PDF Catalogue</h4>
                <p style={{ fontSize: "0.88rem", color: "#bfdbfe", lineHeight: 1.5, marginBottom: "1.2rem" }}>
                  Get the official SP Enterprises product brochure directly on your device.
                </p>
                <a
                  href="/01.SP Enterprises (1).pdf"
                  download="SP_Enterprises_Catalogue.pdf"
                  style={{ background: "white", color: "#1e3a8a", padding: "0.8rem 1.4rem", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Download size={16} /> Download PDF (5.3 MB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "0 0 5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ background: "white", padding: "1rem", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7570.037857208688!2d73.86047314206468!3d18.437449680559993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSr.%20No.%2014%2F1A%20%2B%202B%2F2%2C%20Gujarwadi%20Road%2C%20Katraj%2C%20Pune%20-%20411046%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1791021663511!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: "12px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
