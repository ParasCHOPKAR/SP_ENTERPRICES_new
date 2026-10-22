"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="floating-actions-container">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918308502100" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="floating-action-btn"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)"
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          <path d="M16.5 13c-.22-.11-1.3-.64-1.5-.71-.21-.08-.36-.11-.51.11-.15.22-.57.71-.7.86-.12.15-.25.17-.46.06-.21-.11-.93-.34-1.77-1.1-.65-.58-1.09-1.31-1.22-1.52-.12-.22-.01-.34.1-.45.1-.1.22-.25.33-.37.11-.12.15-.22.22-.36.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.71-1.68-.19-.44-.38-.38-.51-.38-.13 0-.28 0-.43 0-.15 0-.39.06-.59.28-.21.22-.79.77-.79 1.88s.81 2.18.92 2.33c.11.15 1.58 2.42 3.84 3.39.54.23.96.37 1.28.48.54.17 1.03.15 1.42.09.43-.07 1.3-.53 1.49-1.05.18-.51.18-.95.13-1.05-.06-.09-.21-.15-.43-.26z" fill="currentColor" stroke="none" />
        </svg>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+918308502100" 
        title="Call Us Now"
        className="floating-action-btn"
        style={{
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)"
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.6)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.4)";
        }}
      >
        <Phone size={24} />
      </a>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        title="Scroll to Top"
        className="floating-scroll-btn"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(4px)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? "visible" : "hidden",
          transform: showScrollTop ? "translateY(0)" : "translateY(20px)"
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = "#0f172a";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.8)";
        }}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
