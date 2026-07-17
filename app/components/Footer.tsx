import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">Lathan Tarmat</p>
          <p className="mt-1 text-sm text-slate-500">
            Data Analytics · Data Engineering · Intelligence Artificielle
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://github.com/layden17"
            target="_blank"
            aria-label="GitHub"
            className="rounded-xl border border-slate-200 p-3"
          >
            <FaGithub className="h-5 w-5" size={20}/>

          </Link>

          <Link
            href="https://www.linkedin.com/in/lathan-tarmat-2238601b3/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-xl border border-slate-200 p-3"
          >
             <FaLinkedinIn className="h-5 w-5" size={20} />
          </Link>

          <Link
            href="mailto:lathan.etu@gmail.com"
            aria-label="E-mail"
            className="rounded-xl border border-slate-200 p-3"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}