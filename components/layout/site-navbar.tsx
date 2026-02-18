"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type SiteNavbarProps = {
  isHome?: boolean;
};

export default function SiteNavbar({ isHome = false }: SiteNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSectionClick = (id: string) => {
    if (isHome) {
      scrollToSection(id);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-blue-500"
          onClick={() => setMobileMenuOpen(false)}
        >
          وزیر
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          {isHome ? (
            <button
              onClick={() => handleSectionClick("features")}
              className="hover:text-white transition"
            >
              امکانات
            </button>
          ) : (
            <Link href="/#features" className="hover:text-white transition">
              امکانات
            </Link>
          )}
          <Link href="/features" className="hover:text-white transition">
            ماژول‌ها
          </Link>
          {isHome ? (
            <button
              onClick={() => handleSectionClick("ai")}
              className="hover:text-white transition"
            >
              هوش مصنوعی
            </button>
          ) : (
            <Link href="/#ai" className="hover:text-white transition">
              هوش مصنوعی
            </Link>
          )}
          <Link href="/pricing" className="hover:text-white transition">
            قیمت‌گذاری
          </Link>
        </div>
        <Link href="/contact" className="hidden md:block">
          <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition">
            شروع رایگان
          </button>
        </Link>
        <button
          type="button"
          className="order-first md:order-none md:hidden inline-flex shrink-0 items-center justify-center w-10 h-10 me-1 rounded-lg border border-white/10 bg-white/5 text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-md px-4 py-4">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-300">
            {isHome ? (
              <button
                onClick={() => handleSectionClick("features")}
                className="w-full text-right px-3 py-2 rounded-lg hover:bg-white/5"
              >
                امکانات
              </button>
            ) : (
              <Link
                href="/#features"
                className="px-3 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                امکانات
              </Link>
            )}
            <Link
              href="/features"
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              ماژول‌ها
            </Link>
            {isHome ? (
              <button
                onClick={() => handleSectionClick("ai")}
                className="w-full text-right px-3 py-2 rounded-lg hover:bg-white/5"
              >
                هوش مصنوعی
              </button>
            ) : (
              <Link
                href="/#ai"
                className="px-3 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                هوش مصنوعی
              </Link>
            )}
            <Link
              href="/pricing"
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              قیمت‌گذاری
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="mt-2 w-full px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition">
                شروع رایگان
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
