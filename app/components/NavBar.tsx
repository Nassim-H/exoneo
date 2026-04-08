"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  // { label: "Avis", href: "#avis" },
  { label: "Questions", href: "#questions" },
  { label: "À propos", href: "#a-propos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e4dc] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Exonéo"
            width={120}
            height={40}
            priority
            className="h-auto w-[108px] sm:w-[116px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium tracking-[-0.01em] text-[#040325] transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#reservation"
            className="inline-flex h-[44px] items-center rounded-[4px] bg-[#4141f5] px-5 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(65,65,245,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#3535ef] lg:px-6 lg:text-[15px]"
          >
            Réserver un appel gratuit
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#e7e4dc] text-[#040325] md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 origin-center bg-current transition-all duration-200 ${
                isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-current transition-all duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 origin-center bg-current transition-all duration-200 ${
                isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>

        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#e7e4dc] bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-4 py-4 sm:px-6 lg:px-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[8px] px-3 py-3 text-[15px] font-medium text-[#040325] transition-colors hover:bg-[#f5f5ff]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex h-[44px] items-center justify-center rounded-[4px] bg-[#4141f5] px-5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(65,65,245,0.18)]"
            >
              Réserver un appel gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}