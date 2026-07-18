import type { Metadata } from "next";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Download,
  GraduationCap,
  Languages,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PageMetadata.about",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const highlights = [
  {
    key: "education",
    icon: GraduationCap,
  },
  {
    key: "experience",
    icon: BriefcaseBusiness,
  },
  {
    key: "data",
    icon: Database,
  },
  {
    key: "international",
    icon: Languages,
  },
];

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="section-title">{t("title")}</h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>{t("paragraphs.first")}</p>
              <p>{t("paragraphs.second")}</p>
              <p>{t("paragraphs.third")}</p>
              <p>{t("paragraphs.fourth")}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/experiences" className="button-primary">
                {t("experienceButton")}
                <ArrowRight size={19} />
              </Link>

              <a
                href="/cv/CV-Lathan-Tarmat.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                {t("cvButton")}
                <Download size={19} />
              </a>
            </div>
          </div>

          <aside className="card h-fit p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <BrainCircuit size={26} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
              {t("profile.label")}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              {t("profile.title")}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {t("profile.description")}
            </p>

            <div className="mt-8 space-y-5 border-t border-slate-200 pt-7">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {t("profile.focusLabel")}
                </p>

                <p className="mt-1 font-black text-slate-950">
                  {t("profile.focusValue")}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {t("profile.goalLabel")}
                </p>

                <p className="mt-1 font-black text-slate-950">
                  {t("profile.goalValue")}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {t("profile.locationLabel")}
                </p>

                <p className="mt-1 font-black text-slate-950">
                  {t("profile.locationValue")}
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            {t("highlights.badge")}
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-950">
            {t("highlights.title")}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <article key={highlight.key} className="card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {t(`highlights.items.${highlight.key}.title`)}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {t(`highlights.items.${highlight.key}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("approach.badge")}
              </p>

              <h2 className="mt-4 text-3xl font-black text-slate-950">
                {t("approach.title")}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {["understand", "build", "deliver"].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-2xl font-black text-blue-600">
                    0{index + 1}
                  </p>

                  <h3 className="mt-4 font-black text-slate-950">
                    {t(`approach.steps.${step}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t(`approach.steps.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}