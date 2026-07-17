"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "../../i18n/navigation";
import {Languages} from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "fr" ? "en" : "fr";

  function changeLanguage() {
    router.replace(pathname, {
      locale: nextLocale
    });
  }

  return (
    <button
      type="button"
      onClick={changeLanguage}
      aria-label={
        locale === "fr"
          ? "Afficher le site en anglais"
          : "Display the website in French"
      }
      className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
    >
      <Languages size={18} />
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}