"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Link } from "@/i18n/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");

  const links = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("skills"), href: "/skills" },
    { name: t("projects"), href: "/projects" },
    { name: t("experiences"), href: "/experiences" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-blue-300 hover:text-blue-600"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label={t("closeMenu")}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-20 z-40 bg-slate-950/30 backdrop-blur-sm"
          />

          <div className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="button-primary mt-4 w-full"
            >
              {t("contactButton")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}