import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  GraduationCap,
} from "lucide-react";
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
    namespace: "PageMetadata.experiences",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

type ExperienceKey =
  | "anchanto"
  | "realEstate"
  | "stockManagement"
  | "captcha"
  | "tutoring";

type Experience = {
  key: ExperienceKey;
  icon: typeof BriefcaseBusiness;
  skills: string[];
};

const experiences: Experience[] = [
  {
    key: "anchanto",
    icon: BriefcaseBusiness,
    skills: [
      "SaaS",
      "OMS",
      "WMS",
      "OXM",
      "Zendesk",
      "Jira",
      "Aha!",
      "Crowdin",
    ],
  },
  {
    key: "realEstate",
    icon: Building2,
    skills: [
      "Développement web",
      "Analyse des besoins",
      "Déploiement",
      "Relation client",
    ],
  },
  {
    key: "stockManagement",
    icon: Code2,
    skills: [
      "Python",
      "Django",
      "JavaScript",
      "HTML",
      "CSS",
      "Gestion de stock",
    ],
  },
  {
    key: "captcha",
    icon: GraduationCap,
    skills: [
      "PHP",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Authentification",
    ],
  },
  {
    key: "tutoring",
    icon: GraduationCap,
    skills: [
      "Pédagogie",
      "Communication",
      "Adaptation",
      "Accompagnement",
    ],
  },
];

export default function ExperiencesPage() {
  const t = useTranslations("Experiences");

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <h1 className="section-title">
              {t("title")}
            </h1>

            <p className="section-description">
              {t("description")}
            </p>
          </div>

          <aside className="card p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t("summary.label")}
            </p>

            <p className="mt-3 text-3xl font-black text-slate-950">
              {t("summary.value")}
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              {t("summary.description")}
            </p>
          </aside>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.key}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-600 text-white shadow-lg md:flex">
                    <Icon size={23} />
                  </div>

                  <div className="card overflow-hidden">
                    <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[220px_1fr]">
                      <div>
                        <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                          {t(`items.${experience.key}.period`)}
                        </p>

                        <p className="mt-4 font-bold text-slate-500">
                          {t(`items.${experience.key}.organization`)}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                          {index === 0
                            ? t("status.completed")
                            : t("status.previous")}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
                          {t(`items.${experience.key}.title`)}
                        </h2>

                        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                          {t(`items.${experience.key}.description`)}
                        </p>

                        {experience.key === "anchanto" && (
                          <div className="mt-7 grid gap-3 md:grid-cols-2">
                            {[
                              "deployment",
                              "testing",
                              "support",
                              "product",
                              "localization",
                              "accountManagement",
                            ].map((mission) => (
                              <div
                                key={mission}
                                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                              >
                                <CheckCircle2
                                  size={19}
                                  className="mt-0.5 shrink-0 text-blue-600"
                                />

                                <p className="text-sm font-semibold leading-6 text-slate-700">
                                  {t(
                                    `items.anchanto.missions.${mission}`
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-7 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <section className="mt-20">
          <div className="card p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t("strengths.badge")}
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950">
              {t("strengths.title")}
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "functionalAnalysis",
                "problemSolving",
                "clientRelations",
                "internationalWork",
              ].map((strength) => (
                <div
                  key={strength}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="font-black text-slate-950">
                    {t(`strengths.items.${strength}.title`)}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t(`strengths.items.${strength}.description`)}
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