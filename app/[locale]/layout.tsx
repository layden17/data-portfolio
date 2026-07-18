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
import { getTranslations } from "next-intl/server";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL("https://TON-DOMAINE.vercel.app"),

    title: {
      default: t("title"),
      template: `%s | ${t("name")}`,
    },

    description: t("description"),

    keywords: [
      "Data Analyst",
      "Data Engineer",
      "Business Intelligence",
      "Power BI",
      "Python",
      "SQL",
      "Machine Learning",
      "Intelligence Artificielle",
      "Portfolio Data",
    ],

    authors: [
      {
        name: t("name"),
      },
    ],

    creator: t("name"),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: t("name"),
      url: `/${locale}`,
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
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