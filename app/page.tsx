"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Brain,
  Layers,
  Shield,
  Zap,
  Globe,
  Monitor,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  BarChart3,
  Users,
} from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import SiteFooter from "@/components/layout/site-footer";
import SiteNavbar from "@/components/layout/site-navbar";
import Link from "next/link";

// --- داده‌های ماژول‌های حسابداری ---
const accountingModules = [
  "دفتر کل (General Ledger)",
  "حساب‌های دریافتنی/پرداختنی",
  "خزانه‌داری و مغایرت‌گیری",
  "مدیریت انبار و موجودی",
  "حقوق و دستمزد",
  "مدیریت دارایی‌های ثابت",
  "فاکتور رسمی و مالیات",
  "بودجه‌ریزی عملیاتی",
  "گزارش‌ساز پویا",
];

const stats = [
  { value: "۱۰۰+", label: "شرکت فعال" },
  { value: "۹۹.۹٪", label: "آپتایم سیستم" },
  { value: "۲۴/۷", label: "پشتیبانی" },
  { value: "۱۲+", label: "ماژول تخصصی" },
];

function MagicCtaPill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`group relative flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <ShineBorder
        borderWidth={1.5}
        duration={10}
        shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
        className="rounded-full"
      />
      <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_50%_0%,rgba(96,165,250,0.25),transparent_70%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex w-full items-center justify-center gap-2 px-8 py-4 font-bold text-white">
        {children}
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      <SiteNavbar isHome />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
        {/* افکت نور پس‌زمینه */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-40 right-0 w-[600px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse ml-2"></span>
          نسخه جدید وزیر با هوش مصنوعی منتشر شد
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl mb-6 leading-tight"
        >
          اوج قدرت مالی در دستان{" "}
          <span className="bg-gradient-to-l from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            وزیر
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          اولین پلتفرم مالی یکپارچه (Web & Desktop) با تحلیلگر هوش مصنوعی.
          <br />
          زیبایی در طراحی، قدرت در عملکرد، و سادگی در استفاده.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8"
        >
          <Link href="/contact">
            <MagicCtaPill className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                دریافت دمو رایگان
              </span>
            </MagicCtaPill>
          </Link>
          <Link href="/features">
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg flex items-center gap-2">
              مشاهده امکانات
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* تصویر شماتیک نرم‌افزار */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-neutral-900/50 aspect-video overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-purple-950/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Monitor className="w-20 h-20 mx-auto text-blue-500 opacity-50" />
              <p className="text-neutral-600 font-mono text-sm">
                محیط نرم‌افزار وزیر
              </p>
            </div>
          </div>
          <BorderBeam
            size={250}
            duration={12}
            delay={9}
            colorFrom="#3b82f6"
            colorTo="#8b5cf6"
          />
        </motion.div>
      </section>

      {/* --- FEATURES (BENTO GRID) --- */}
      <section id="features" className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 mb-6">
            <Sparkles className="w-4 h-4 ml-2" />
            ویژگی‌های منحصر به فرد
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            همه ابزارها در یک جعبه
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            وزیر تمام نیازهای مالی کسب‌وکار شما را در یک پلتفرم جمع کرده است
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((item, i) => (
            <BentoCard
              key={i}
              name={item.title}
              description={item.description}
              background={item.header}
              Icon={item.Icon}
              href="#pricing"
              cta="مشاهده جزئیات"
              className={i === 3 || i === 4 ? "md:col-span-1" : "md:col-span-1"}
            />
          ))}
        </BentoGrid>
      </section>

      {/* --- MODULES LIST --- */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ماژول‌های تخصصی حسابداری
            </h3>
            <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">
              تمام زیرسیستم‌های مورد نیاز برای مدیریت کامل امور مالی
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {accountingModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-neutral-950 hover:border-blue-500/50 hover:bg-blue-500/5 transition cursor-default"
              >
                {mod}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link href="/features">
              <button className="px-8 py-3 rounded-full border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 transition font-bold flex items-center gap-2 mx-auto">
                مشاهده تمام ماژول‌ها
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- AI SECTION --- */}
      <section id="ai" className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full space-y-6"
          >
            <div className="inline-flex p-3 bg-purple-500/10 w-fit rounded-lg border border-purple-500/20">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              حسابدار هوشمند شما
            </h2>
            <p className="text-neutral-400 text-lg leading-loose">
              وزیر فقط ثبت نمی‌کند، تحلیل می‌کند. هوش مصنوعی ما داده‌های شما را
              بررسی کرده، مغایرت‌ها را پیش از وقوع تشخیص می‌دهد و پیشنهادهایی
              برای کاهش هزینه ارائه می‌کند.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                تشخیص خودکار مغایرت‌های بانکی
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                پیش‌بینی جریان نقدینگی (Cash Flow)
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                دسته‌بندی هوشمند هزینه‌ها
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500 w-5 h-5" />
                </div>
                گزارش‌های تحلیلی پیشرفته
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/features">
                <button className="px-8 py-3 rounded-full bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500/30 transition font-bold flex items-center gap-2">
                  بیشتر درباره AI
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative w-full h-[320px] md:h-[400px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

              {/* Animated elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-32 h-32 border border-purple-500/30 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-48 h-48 border border-blue-500/20 rounded-full"
                />
                <Brain className="w-20 h-20 text-purple-400/50 relative z-10" />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 md:top-12 md:right-12 px-3 py-2 md:px-4 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 text-xs md:text-sm"
              >
                <TrendingUp className="w-4 h-4 inline ml-2 text-green-400" />
                پیش‌بینی درآمد
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-4 md:bottom-12 md:left-12 px-3 py-2 md:px-4 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 text-xs md:text-sm"
              >
                <BarChart3 className="w-4 h-4 inline ml-2 text-blue-400" />
                تحلیل خودکار
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section
        id="pricing"
        className="py-24 container mx-auto px-4 text-center bg-neutral-900/30"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6">
            <Sparkles className="w-4 h-4 ml-2" />
            قیمت‌گذاری شفاف و منصفانه
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            پلن مناسب خود را انتخاب کنید
          </h2>
          <p className="text-neutral-400 mb-16 max-w-2xl mx-auto">
            بدون هزینه پنهان. دسترسی نامحدود برای تمام اعضای تیم شما.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* پلن پایه */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/70 transition"
          >
            <div className="text-right">
              <h3 className="text-2xl font-bold text-neutral-300 mb-2">
                استارتاپ
              </h3>
              <div className="text-5xl font-bold my-6 text-white">
                ۲۹۹{" "}
                <span className="text-lg text-neutral-500 font-normal">
                  هزار تومان/ماه
                </span>
              </div>
              <p className="text-neutral-400 mb-8">
                مناسب برای کسب‌وکارهای کوچک و استارتاپ‌ها
              </p>
              <ul className="space-y-4 mb-10 text-neutral-300">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>۳ کاربر همزمان</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>ماژول‌های پایه حسابداری</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>پشتیبانی ایمیلی</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>فضای ابری ۵ گیگابایت</span>
                </li>
              </ul>
              <Link href="/pricing">
                <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg">
                  انتخاب پلن
                </button>
              </Link>
            </div>
          </motion.div>

          {/* پلن حرفه ای */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-purple-950/30 overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold px-4 py-2 rounded-br-lg shadow-lg">
              پیشنهاد ویژه
            </div>
            <BorderBeam
              size={300}
              duration={10}
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
            />

            <div className="text-right relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                شرکتی (وزیر)
              </h3>
              <div className="text-5xl font-bold my-6 bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ۵۹۹{" "}
                <span className="text-lg text-neutral-400 font-normal">
                  هزار تومان/ماه
                </span>
              </div>
              <p className="text-neutral-300 mb-8">
                قدرت کامل برای شرکت‌های در حال رشد
              </p>
              <ul className="space-y-4 mb-10 text-white">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span className="font-bold text-blue-300">
                    کاربران نامحدود
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>تمام ماژول‌های حسابداری</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-purple-400" />
                  </div>
                  <span>تحلیلگر هوش مصنوعی</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>نسخه ویندوز + وب</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-400" />
                  </div>
                  <span>فضای ابری نامحدود</span>
                </li>
              </ul>
              <Link href="/contact">
                <MagicCtaPill className="w-full">
                  <span className="font-bold text-lg">خرید اشتراک</span>
                </MagicCtaPill>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Link href="/pricing">
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition font-bold flex items-center gap-2 mx-auto">
              مشاهده تمام پلن‌ها
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-3xl p-12 border border-white/10 overflow-hidden"
        >
          <BorderBeam
            size={300}
            duration={15}
            colorFrom="#3b82f6"
            colorTo="#8b5cf6"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            آماده برای شروع هستید؟
          </h2>
          <p className="text-xl text-neutral-300 mb-8 relative z-10">
            ۳۰ روز استفاده رایگان - بدون نیاز به کارت اعتباری
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <MagicCtaPill className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white lg:text-lg">
                  شروع رایگان
                </span>
              </MagicCtaPill>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg">
                تماس با فروش
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <SiteFooter />

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "نرم‌افزار حسابداری وزیر",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Windows, Web",
            offers: {
              "@type": "Offer",
              price: "599000",
              priceCurrency: "IRR",
            },
            description:
              "نرم افزار حسابداری جامع با هوش مصنوعی و کاربران نامحدود",
            featureList: accountingModules.join(", "),
          }),
        }}
      />
    </main>
  );
}

// --- DATA FOR BENTO GRID ---
const features = [
  {
    title: "رابط کاربری مدرن",
    description:
      "طراحی شده برای لذت بردن از حسابداری. بدون منوهای پیچیده قدیمی.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950/50 to-neutral-900 rounded-xl p-8">
        <Layers className="text-blue-400 w-16 h-16" />
      </div>
    ),
    Icon: Layers,
  },
  {
    title: "امنیت بانکی",
    description: "رمزنگاری داده‌ها با استانداردهای بانکی و بکاپ‌گیری لحظه‌ای.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-950/50 to-neutral-900 rounded-xl p-8">
        <Shield className="text-emerald-400 w-16 h-16" />
      </div>
    ),
    Icon: Shield,
  },
  {
    title: "سرعت فوق‌العاده",
    description: "ساخته شده با تکنولوژی‌های مدرن وب برای سرعتی باورنکردنی.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-950/50 to-neutral-900 rounded-xl p-8">
        <Zap className="text-yellow-400 w-16 h-16" />
      </div>
    ),
    Icon: Zap,
  },
  {
    title: "دسترسی هیبریدی",
    description:
      "هم در مرورگر وب استفاده کنید و هم نرم‌افزار ویندوز را نصب کنید. داده‌ها همیشه سینک هستند.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-950/50 to-blue-950/30 rounded-xl p-8 gap-8">
        <Globe className="text-blue-400 w-16 h-16" />
        <Monitor className="text-purple-400 w-16 h-16" />
      </div>
    ),
    Icon: Globe,
  },
  {
    title: "کاربران نامحدود",
    description:
      "بدون محدودیت تعداد کاربران. تمام تیم شما می‌تواند به صورت همزمان کار کند.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-950/50 to-neutral-900 rounded-xl p-8">
        <Users className="text-pink-400 w-16 h-16" />
      </div>
    ),
    Icon: Users,
  },
  {
    title: "تحلیل هوشمند مالی",
    description:
      "هوش مصنوعی وزیر مغایرت‌ها را سریع‌تر پیدا می‌کند و برای تصمیم‌گیری مالی پیشنهاد عملی ارائه می‌دهد.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-950/50 to-blue-950/40 rounded-xl p-8">
        <Brain className="text-cyan-400 w-16 h-16" />
      </div>
    ),
    Icon: Brain,
  },
];
