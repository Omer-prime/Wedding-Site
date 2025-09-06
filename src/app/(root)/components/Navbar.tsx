"use client";

import { useState } from "react";
import Link from "next/link";
import type { UrlObject } from "url";

const brandHref: UrlObject = { pathname: "/" };

const NAV: { label: string; href: UrlObject }[] = [
  { label: "Home", href: { pathname: "/", hash: "home" } },
  { label: "Gallery", href: { pathname: "/gallery" } },
  { label: "About", href: { pathname: "/about" } },
  { label: "Contact", href: { pathname: "/contact" } },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100"
      style={{ height: "var(--nav-h)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand */}
        <Link
          href={brandHref}
          className="text-xl font-semibold text-slate-900 [font-family:var(--font-parisienne)]"
        >
          Cinematics By Taha
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-700 hover:text-blush-600"
            >
              {item.label}
            </Link>
          ))}
          {/* CTA as styled Link (no Button component) */}
          <Link
            href={{ pathname: "/contact" }}
            className="ml-2 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition shadow-soft bg-blush-600 text-white hover:opacity-95"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-700 hover:text-blush-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={{ pathname: "/contact" }}
              className="w-full inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition shadow-soft bg-blush-600 text-white hover:opacity-95"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
