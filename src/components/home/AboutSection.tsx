import { useMessages, useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");
  const messages = useMessages();
  const roles = (messages as Record<string, { card: { roles: string[] } }>).about.card.roles;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2017;
  
  return (
    <section id="whoami" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-block font-mono text-xs tracking-widest text-primary">
          {t("badge")}
        </span>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {t("title")}
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-surface p-8">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-xs text-gray-400">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-white">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-green-400">{`"${t("card.name")}"`}</span>,
                </p>
                <p className="pl-4">
                  roles: [
                </p>
                {roles.map((role, i) => (
                  <p key={i} className="pl-8">
                    <span className="text-green-400">{`"${role}"`}</span>
                    {i < roles.length - 1 ? "," : ""}
                  </p>
                ))}
                <p className="pl-4">],</p>
                <p className="pl-4">
                  location: <span className="text-green-400">{`"${t("card.location")}"`}</span>,
                </p>
                <p className="pl-4">
                  experience: <span className="text-yellow-400">{experienceYears}+</span>,
                </p>
                <p className="pl-4">
                  available: <span className="text-green-500">true</span>,
                </p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
