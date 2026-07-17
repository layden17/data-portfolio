import Link from "next/link";
import { Database } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Compétences", href: "/skills" },
  { name: "Projets", href: "/projects" },
  { name: "Expériences", href: "/experiences" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
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
        <Link href="/contact" className="button-primary">
          Me contacter
        </Link>
        </div>
      </div>
    </header>

    
    
  );

  
}