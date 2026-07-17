import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lathan Tarmat | Data & AI",
    template: "%s | Lathan Tarmat",
  },
  description:
    "Portfolio professionnel en Data Analytics, Data Engineering, Business Intelligence et Intelligence Artificielle.",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}