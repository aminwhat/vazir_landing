"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import SiteFooter from "@/components/layout/site-footer";
import SiteNavbar from "@/components/layout/site-navbar";

export default function NotFound() {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      <SiteNavbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-28 text-center">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 -z-10 h-[280px] w-[560px] rounded-full bg-purple-500/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
        >
          <SearchX className="ml-2 h-4 w-4" />
          صفحه مورد نظر پیدا نشد
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-2 text-7xl font-black tracking-tight md:text-9xl"
        >
          <span className="bg-gradient-to-l from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            ۴۰۴
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          مسیر اشتباهه؛ ولی هنوز می‌تونیم ادامه بدیم
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400"
        >
          صفحه‌ای که دنبالش بودید وجود ندارد یا آدرس آن تغییر کرده است. از
          گزینه‌های زیر برای ادامه استفاده کنید.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex w-full flex-col justify-center gap-4 sm:flex-row"
        >
          <Link href="/">
            <span className="group relative flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5">
              <ShineBorder
                borderWidth={1.5}
                duration={10}
                shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
                className="rounded-full"
              />
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
              <span className="relative z-10 flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white lg:text-lg">
                <Home className="h-5 w-5" />
                بازگشت به صفحه اصلی
              </span>
            </span>
          </Link>

          <Link href="/features">
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold transition hover:bg-white/5">
              مشاهده امکانات
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </section>
      <SiteFooter />
    </main>
  );
}
