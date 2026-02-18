import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import SiteNavbar from "@/components/layout/site-navbar";
import SiteFooter from "@/components/layout/site-footer";

type LegalPageLayoutProps = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  children: ReactNode;
  lastUpdated?: string;
};

export default function LegalPageLayout({
  icon: Icon,
  badge,
  title,
  description,
  children,
  lastUpdated = "۱۴۰۴/۱۱/۲۴",
}: LegalPageLayoutProps) {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      <SiteNavbar />

      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:pt-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
            <Icon className="ml-2 h-4 w-4" />
            {badge}
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mb-10 text-base leading-8 text-neutral-400 md:text-lg">
            {description}
          </p>

          <article className="space-y-8 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:p-8">
            {children}
          </article>

          <p className="mt-6 text-sm text-neutral-500">
            آخرین به‌روزرسانی: {lastUpdated}
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
