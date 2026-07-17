import type { Metadata } from "next";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Settings,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Mes compétences techniques en Data Engineering, Business Intelligence, Machine Learning et développement.",
};

const categories = [
  {
    title: "Langages",
    description: "Langages utilisés pour analyser et transformer les données.",
    icon: Code2,
    skills: ["Python", "SQL", "TypeScript", "DAX", "Power Query M"],
  },
  {
    title: "Data Engineering",
    description:
      "Construction de pipelines et de modèles de données analytiques.",
    icon: Database,
    skills: [
      "Pandas",
      "ETL",
      "PostgreSQL",
      "Parquet",
      "Schéma en étoile",
      "Modélisation dimensionnelle",
    ],
  },
  {
    title: "Business Intelligence",
    description:
      "Création de rapports et d’indicateurs destinés à la prise de décision.",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Power Query",
      "DAX",
      "KPI",
      "Data visualisation",
      "Analyse métier",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Préparation des données, entraînement et évaluation de modèles.",
    icon: BrainCircuit,
    skills: [
      "Scikit-learn",
      "Classification",
      "Régression",
      "Feature engineering",
      "Évaluation de modèles",
      "Prétraitement",
    ],
  },
  {
    title: "DevOps et qualité",
    description:
      "Automatisation, conteneurisation et contrôle de la qualité du code.",
    icon: Settings,
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Pytest",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Outils",
    description:
      "Environnements et outils utilisés pour développer les projets.",
    icon: Wrench,
    skills: [
      "VS Code",
      "Jupyter",
      "Power BI Desktop",
      "DBeaver",
      "Postman",
      "GitHub",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          Compétences techniques
        </span>

        <h1 className="section-title mt-8">Ma boîte à outils Data</h1>

        <p className="section-description">
          Des compétences développées à travers des projets concrets couvrant la
          collecte, la transformation, le stockage, l’analyse et la
          visualisation des données.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article key={category.title} className="card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950">
                  {category.title}
                </h2>

                <p className="mt-3 min-h-14 leading-7 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}