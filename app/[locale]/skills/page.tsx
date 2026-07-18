import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Settings,
  Users,
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
    namespace: "PageMetadata.skills",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const categories = [
  {
    key: "data",
    icon: Database,
    skills: [
      "Python",
      "Pandas",
      "SQL",
      "PostgreSQL",
      "Parquet",
      "ETL",
      "Data Cleaning",
      "Data Modeling",
    ],
  },
  {
    key: "businessIntelligence",
    icon: BarChart3,
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "KPI",
      "Data Visualization",
      "Dashboarding",
    ],
  },
  {
    key: "artificialIntelligence",
    icon: BrainCircuit,
    skills: [
      "Scikit-learn",
      "Machine Learning",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    key: "development",
    icon: Code2,
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Django",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    key: "tools",
    icon: Settings,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Pytest",
      "Jira",
      "Zendesk",
      "Aha!",
      "Crowdin",
    ],
  },
  {
    key: "functional",
    icon: BriefcaseBusiness,
    skills: [
      "Analyse fonctionnelle",
      "Déploiement SaaS",
      "Tests fonctionnels",
      "Support client",
      "Gestion d’incidents",
      "Amélioration produit",
    ],
  },
];

const professionalSkills = [
  "analysis",
  "communication",
  "organization",
  "autonomy",
  "clientRelations",
  "international",
];

export default function SkillsPage() {
  const t = useTranslations("Skills");

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            <h1 className="section-title">{t("title")}</h1>

            <p className="section-description">
              {t("description")}
            </p>
          </div>

          <aside className="card p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t("objective.label")}
            </p>

            <p className="mt-3 text-2xl font-black text-slate-950">
              {t("objective.title")}
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              {t("objective.description")}
            </p>
          </aside>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article key={category.key} className="card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950">
                  {t(`categories.${category.key}.title`)}
                </h2>

                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {t(`categories.${category.key}.description`)}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-20">
          <div className="card p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Users size={26} />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
                  {t("professional.badge")}
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-950">
                  {t("professional.title")}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {t("professional.description")}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {professionalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="font-black text-slate-950">
                        {t(`professional.items.${skill}.title`)}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {t(`professional.items.${skill}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {["learn", "apply", "improve"].map((step, index) => (
              <article key={step} className="card p-7">
                <p className="text-3xl font-black text-blue-600">
                  0{index + 1}
                </p>

                <h2 className="mt-5 text-xl font-black text-slate-950">
                  {t(`method.${step}.title`)}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {t(`method.${step}.description`)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}