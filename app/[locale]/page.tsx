import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Download,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const technologies = [
  "Python",
  "SQL",
  "Power BI",
  "PostgreSQL",
  "Docker",
  "Machine Learning",
];

export default function HomePage() {
  const t = useTranslations("Home");

  const domains = [
    {
      title: t("domains.dataEngineering.title"),
      description: t("domains.dataEngineering.description"),
      icon: Database,
    },
    {
      title: t("domains.businessIntelligence.title"),
      description: t("domains.businessIntelligence.description"),
      icon: BarChart3,
    },
    {
      title: t("domains.machineLearning.title"),
      description: t("domains.machineLearning.description"),
      icon: BrainCircuit,
    },
    {
      title: t("domains.softwareEngineering.title"),
      description: t("domains.softwareEngineering.description"),
      icon: Code2,
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              {t("availability")}
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {t("titleStart")}{" "}
              <span className="text-blue-600">
                {t("titleHighlight")}
              </span>
              .
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary">
                {t("projectsButton")}
                <ArrowRight size={19} />
              </Link>

              <a
                href="/cv/CV-Lathan-Tarmat.pdf"
                download
                className="button-secondary"
              >
                {t("cvButton")}
                <Download size={19} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <aside className="card p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t("profile")}
            </p>

            <h2 className="mt-4 text-3xl font-black">
              {t("jobTitle")}
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-500">
                  {t("educationLabel")}
                </p>
                <p className="mt-1 font-bold">
                  {t("education")}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {t("locationLabel")}
                </p>
                <p className="mt-1 font-bold">
                  {t("location")}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {t("objectiveLabel")}
                </p>
                <p className="mt-1 font-bold">
                  {t("objective")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section border-y border-slate-200 bg-white">
        <div className="container">
          <h2 className="section-title">
            {t("domainsTitle")}
          </h2>

          <p className="section-description">
            {t("domainsDescription")}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {domains.map((domain) => {
              const Icon = domain.icon;

              return (
                <article key={domain.title} className="card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {domain.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {domain.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}