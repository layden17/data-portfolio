import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import type { Metadata } from "next";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
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
    namespace: "PageMetadata.contact",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <section className="section">
      <div className="container">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
          {t("badge")}
        </span>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <h1 className="section-title">
              {t("title")}
            </h1>

            <p className="section-description">
              {t("description")}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:lathantarmat@gmail.com"
                className="card flex items-start gap-4 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {t("email.label")}
                  </p>

                  <p className="mt-1 break-all font-black text-slate-950">
                    lathantarmat@gmail.com
                  </p>
                </div>
              </a>

              <div className="card flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {t("location.label")}
                  </p>

                  <p className="mt-1 font-black text-slate-950">
                    {t("location.value")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/lathan-tarmat-2238601b3/"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                <FaLinkedinIn size={19} />
                {t("linkedinButton")}
              </a>

              <a
                href="https://github.com/layden17"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <FaGithub size={19} />
                {t("githubButton")}
              </a>
            </div>
          </div>

          <aside className="card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Send size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950">
              {t("cta.title")}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {t("cta.description")}
            </p>

            <a
              href="mailto:lathantarmat@gmail.com?subject=Opportunité professionnelle Data"
              className="button-primary mt-8 w-full"
            >
              <Mail size={19} />
              {t("cta.button")}
            </a>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm font-bold text-slate-950">
                {t("availability.title")}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>

                <p className="text-sm font-semibold text-slate-600">
                  {t("availability.value")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}