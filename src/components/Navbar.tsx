"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo, socialLinks } from "@/lib/portfolio-data";

/**
 * Navbar - Client Component
 * Implements high-performance iOS-style glassmorphism with scroll detection.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navIcons = {
    Home: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
    About: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    Works: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    ),
    Skills: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
    ),
    Contact: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    )
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? "md:pt-4 md:px-4" : ""
        }`}
    >
      <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden glass-nav ${isScrolled
        ? "max-w-full md:max-w-[fit-content] md:rounded-full md:shadow-2xl px-4 py-2"
        : "max-w-full w-full h-[64px] rounded-none px-4 md:px-12"
        }`}>
        <nav className={`flex items-center justify-between h-full gap-2 md:gap-4`}>
          {/* Logo */}
          <a
            href="#"
            className={`text-base xs:text-lg md:text-xl font-black text-[var(--color-text-primary)] tracking-tighter transition-all duration-500 ${isScrolled ? "opacity-100 md:w-0 md:opacity-0 overflow-hidden" : "w-auto opacity-100"
              }`}
          >
            {personalInfo.name}<span className="text-primary">.</span>
          </a>

          {/* Navigation Links - Icons on Mobile, Text on Desktop */}
          <div className={`flex items-center gap-1 sm:gap-4 md:gap-8 transition-all duration-500`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all duration-300 flex items-center justify-center relative group p-1.5 sm:p-2`}
                title={link.label}
              >
                {/* Icons - Mobile only */}
                <span className={`transition-all duration-300 text-[var(--color-text-primary)] md:hidden hover:text-primary`}>
                  {navIcons[link.label as keyof typeof navIcons]}
                </span>
                {/* Text - Desktop only */}
                <span className={`transition-all duration-300 hidden md:block font-bold uppercase tracking-wider text-[13px] ${isScrolled
                  ? "text-[var(--color-text-primary)] hover:text-primary"
                  : "text-[var(--color-text-secondary)] hover:text-primary"
                  }`}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className={`flex items-center`}>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn transition-all duration-500 overflow-hidden ${isScrolled
                ? "p-2 min-w-0 h-10 rounded-full flex items-center justify-center bg-transparent border-none text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)]/10 md:bg-[var(--color-text-primary)] md:text-[var(--color-bg-primary)] md:w-10"
                : "btn-primary h-8 md:h-10 px-3 md:px-6 text-[9px] md:text-[11px] font-black uppercase tracking-widest"
                }`}
              title="Say Hello"
            >
              <span className="flex items-center justify-center">
                {isScrolled ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                ) : (
                  <>
                    <span className="md:hidden p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                    </span>
                    <span className="hidden md:inline">Say Hello</span>
                  </>
                )}
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
