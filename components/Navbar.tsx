"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#041827]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-white/20 bg-white/6 text-sm font-semibold text-white">
            RG
          </div>
          <span className="ml-2 text-sm font-medium text-white">
            Ricky Githinji
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-white border-2 border-transparent transition-transform duration-200 ease-out hover:scale-105 hover:bg-white hover:text-[#041827] hover:border-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-full border border-white/20 bg-white/6 px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 ease-out hover:scale-105 hover:bg-white hover:text-[#041827] hover:border-white"
          >
            Let's Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#071827] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
