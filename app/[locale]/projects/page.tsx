import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

  const technologies = [
    "Python",
    "Pandas",
    "PostgreSQL",
    "Docker",
    "SQL",
    "Power BI",
    "DAX",
    "Pytest",
    "GitHub Actions",
  ];

  const highlights = [
    {
      icon: Database,
      value: "112 650",
      label: t("retailAnalytics.metrics.rows"),
    },
    {
      icon: BarChart3,
      value: "5",
      label: t("retailAnalytics.metrics.pages"),
    },
    {
      icon: GitBranch,
      value: "CI/CD",
      label: t("retailAnalytics.metrics.automation"),
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <h1 className="section-title mt-8">{t("title")}</h1>

        <p className="section-description">{t("description")}</p>

       <article className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                {t("retailAnalytics.status")}
            </span>

            <span className="text-sm font-semibold text-slate-500">
                Power BI Dashboard
            </span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
                src="/projects/retail-analytics/retail-analytics-dashboard.jpg"
                alt={t("retailAnalytics.imageAlt")}
                fill
                priority
                className="object-contain object-center"
                sizes="100vw"
            />
            </div>
        </div>

            <div className="flex flex-col p-7 md:p-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                    {t("retailAnalytics.category")}
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                    {t("retailAnalytics.title")}
                  </h2>
                </div>

                <Database
                  aria-hidden="true"
                  className="hidden size-11 shrink-0 text-blue-600 sm:block"
                />
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                {t("retailAnalytics.description")}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {highlights.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <Icon
                      aria-hidden="true"
                      className="mb-3 size-5 text-blue-600"
                    />

                    <p className="text-xl font-black text-slate-950">
                      {value}
                    </p>

                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <h3 className="text-sm font-black uppercase tracking-[0.15em] text-slate-900">
                  {t("retailAnalytics.highlightsTitle")}
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    t("retailAnalytics.highlights.pipeline"),
                    t("retailAnalytics.highlights.model"),
                    t("retailAnalytics.highlights.dashboard"),
                    t("retailAnalytics.highlights.validation"),
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-blue-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                href="https://github.com/layden17/retail-analytics-powerbi-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold !text-white transition hover:bg-blue-700 hover:!text-white [&_svg]:!text-white"
                >
                <FaGithub aria-hidden="true" className="size-5" />

                <span className="!text-white">
                    {t("retailAnalytics.github")}
                </span>

                <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>

                <a
                  href="/projects/retail-analytics/retail-analytics-dashboard.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  <BarChart3 aria-hidden="true" className="size-5" />
                  {t("retailAnalytics.preview")}
                </a>
              </div>
            </div>
        </article>
      </div>
    </section>
  );
}