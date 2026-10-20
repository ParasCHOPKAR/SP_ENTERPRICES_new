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
  FileText
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
      <section 
        className="page-hero-banner" 
        style={{ 
          backgroundImage: "linear-gradient(to right, rgba(2, 6, 23, 0.85) 0%, rgba(2, 6, 23, 0.6) 45%, rgba(2, 6, 23, 0) 100%), url('/contact/contact_hero_01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/4",
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
            
            <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>
              Let's Start a<br/>
              <span style={{ color: "#fbbf24" }}>Conversation</span>
            </h1>
            
            <p style={{ fontSize: "1.05rem", color: "#f8fafc", lineHeight: 1.5, marginBottom: "2.5rem" }}>
              Have a question, need information, or looking for a custom solution?<br/>
              Our team is here to help you with quick and reliable support.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Headphones size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Quick<br/>Response
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Users size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Expert<br/>Guidance
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <Shield size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Reliable<br/>Support
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                  <FileText size={20} color="#fbbf24" />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
                  Customer<br/>First Approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section style={{ padding: "4rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem" }}>
            {/* Form Column */}
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}>
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
                      style={{ background: "#c8102e", color: "white", padding: "0.9rem 1.8rem", borderRadius: "8px", border: "none", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.6rem", boxShadow: "0 4px 15px rgba(200,16,46,0.3)" }}
                    >
                      <Send size={16} /> Submit Quotation Request <ArrowRight size={16} />
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
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <h2 style={{ fontSize: "2rem", color: "#0f172a", margin: 0, fontWeight: 800 }}>Contact Information</h2>
                  <div style={{ height: "4px", width: "40px", background: "#c8102e", borderRadius: "2px" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <p style={{ color: "#64748b", fontSize: "0.95rem", margin: 0, maxWidth: "80%" }}>
                    Feel free to reach out to us through any of the following channels.<br/>
                    Our team will be happy to assist you.
                  </p>
                  <div style={{ fontFamily: "cursive", color: "#cbd5e1", fontSize: "2rem", transform: "rotate(-5deg)" }}>
                    Get In Touch
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <Phone size={18} fill="currentColor" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Phone / Mobile</h4>
                      <a href="tel:+918308502100" style={{ color: "#c8102e", fontSize: "1.1rem", fontWeight: 800, textDecoration: "none", display: "block" }}>
                        +91 8308502100
                      </a>
                      <a href="https://wa.me/918308502100" target="_blank" rel="noopener noreferrer" style={{ color: "#16a34a", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem", marginTop: "4px" }}>
                        <MessageSquare size={12} fill="currentColor" /> Chat on WhatsApp <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <Mail size={18} fill="currentColor" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.3rem", fontWeight: 700 }}>Official Email</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <a href="mailto:info@speautomation.com" style={{ color: "#c8102e", fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
                          info@speautomation.com
                        </a>
                        <a href="mailto:Spe.mktg@gmail.com" style={{ color: "#c8102e", fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
                          spe.mktg@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <ExternalLink size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Official Website</h4>
                      <a href="https://www.speautomation.com" target="_blank" rel="noopener noreferrer" style={{ color: "#c8102e", fontSize: "1rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                        www.speautomation.com <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8102e", flexShrink: 0 }}>
                      <MapPin size={18} fill="currentColor" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: "#0f172a", marginBottom: "0.2rem", fontWeight: 700 }}>Registered Office</h4>
                      <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
                        Sr. No. 14/1A + 2B/2, Gujarwadi Road, Near Mangdewadi, Katraj, Pune &ndash; 411046, Maharashtra (India)
                      </p>
                    </div>
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
