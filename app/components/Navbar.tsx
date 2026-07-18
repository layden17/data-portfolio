"use client";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Database } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";



export default function Navbar() {
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Database size={22} />
          </span>

          <span>
            <span className="block font-extrabold">Lathan Tarmat</span>
            <span className="block text-xs text-slate-500">Data & IA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
        <LanguageSwitcher />

        <Link
        href="/contact"
        className="button-primary hidden lg:inline-flex whitespace-nowrap"
        >
        {t("contactButton")}
        </Link>

        <MobileMenu />
        </div>
      </div>
    </header>

    
    
  );

  
}