import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez mon parcours, ma formation et mes objectifs professionnels dans les métiers de la Data.",
};

const informations = [
  {
    label: "Formation",
    value: "Epitech — spécialisation Data & Intelligence Artificielle",
    icon: GraduationCap,
  },
  {
    label: "Localisation",
    value: "France",
    icon: MapPin,
  },
  {
    label: "Objectif",
    value: "CDI en Data Analytics, BI ou Data Engineering",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          À propos de moi
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="section-title">
              Un profil technique orienté données et résolution de problèmes.
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Après une formation en informatique, j’ai choisi de me
                spécialiser en Data et Intelligence Artificielle durant ma
                cinquième année à Epitech.
              </p>

              <p>
                Je développe des projets couvrant l’ensemble du cycle de vie des
                données : ingestion, nettoyage, validation, stockage,
                modélisation, analyse, visualisation et déploiement.
              </p>

              <p>
                J’accorde une attention particulière à la qualité du code, à la
                fiabilité des données et à la création de solutions réellement
                utiles aux équipes métier.
              </p>

              <p>
                Mon objectif est d’intégrer une entreprise dans laquelle je
                pourrai contribuer à des projets Data concrets, tout en
                continuant à développer mes compétences techniques.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary">
                Découvrir mes projets
                <ArrowRight size={19} />
              </Link>

              <a
                href="/cv/CV-Lathan-Tarmat.pdf"
                target="_blank"
                className="button-secondary"
              >
                Consulter mon CV
              </a>
            </div>
          </div>

          <aside className="card h-fit p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Informations
            </p>

            <div className="mt-7 space-y-7">
              {informations.map((information) => {
                const Icon = information.icon;

                return (
                  <div
                    key={information.label}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {information.label}
                      </p>

                      <p className="mt-1 font-bold leading-6 text-slate-900">
                        {information.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <article className="card p-7">
            <p className="text-3xl font-black text-blue-600">01</p>

            <h2 className="mt-5 text-xl font-black">
              Comprendre les données
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Identifier les problèmes de qualité, les variables importantes et
              les besoins métier.
            </p>
          </article>

          <article className="card p-7">
            <p className="text-3xl font-black text-blue-600">02</p>

            <h2 className="mt-5 text-xl font-black">
              Construire une solution
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Développer des pipelines, des modèles de données et des analyses
              fiables.
            </p>
          </article>

          <article className="card p-7">
            <p className="text-3xl font-black text-blue-600">03</p>

            <h2 className="mt-5 text-xl font-black">
              Restituer les résultats
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Présenter les indicateurs de manière claire grâce aux dashboards
              et aux visualisations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}