import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PageMetadata.projects",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <h1 className="section-title mt-8">{t("title")}</h1>

        <p className="section-description">{t("description")}</p>

        <div className="card mt-12 p-8 text-center md:p-12">
          <h2 className="text-2xl font-black text-slate-950">
            {t("comingSoonTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {t("comingSoonDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}