"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-blue-500"
          >
            وزیر
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-300 transition hover:text-white"
          >
            بازگشت به خانه
          </Link>
        </div>
      </nav>

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-28 text-center">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-0 top-40 -z-10 h-[280px] w-[560px] rounded-full bg-red-500/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-300"
        >
          <AlertTriangle className="ml-2 h-4 w-4" />
          خطایی رخ داده است
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          در پردازش درخواست مشکلی پیش آمد
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-3 max-w-2xl text-lg leading-relaxed text-neutral-400"
        >
          لطفا دوباره تلاش کنید. اگر مشکل ادامه داشت، به صفحه اصلی برگردید.
        </motion.p>

        {error.digest ? (
          <p className="mb-10 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-400">
            Error ID: {error.digest}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex w-full flex-col justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => reset()}
            className="group relative mx-auto flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <ShineBorder
              borderWidth={1.5}
              duration={10}
              shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
              className="rounded-full"
            />
            <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
            <span className="relative z-10 flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white lg:text-lg">
              <RefreshCw className="h-5 w-5" />
              تلاش مجدد
            </span>
          </button>

          <Link href="/">
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold transition hover:bg-white/5">
              بازگشت به خانه
              <Home className="h-5 w-5" />
            </button>
          </Link>

          <Link href="/features">
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold transition hover:bg-white/5">
              مشاهده امکانات
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
