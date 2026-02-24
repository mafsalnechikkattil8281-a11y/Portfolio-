"use client";

import { useState } from "react";
import { navLinks, socialLinks } from "@/lib/portfolio-data";

/**
 * Mobile Navigation Toggle - Client Component
 * Only this small component needs client-side JS for the toggle
 */

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

export default function MobileNavToggle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center p-2 text-[var(--color-text-primary)]"
                aria-label="Toggle menu"
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl border-b border-[var(--color-border)] p-6 z-[60]">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-[var(--color-text-secondary)] font-medium py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--color-border)]">
                            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs px-4 py-2 flex-1">
                                Say Hello
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
