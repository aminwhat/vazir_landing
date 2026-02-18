"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Shield,
  Zap,
  Globe,
  Monitor,
  Users,
  Sparkles,
  BarChart3,
  TrendingUp,
  BookOpen,
  Wallet,
  Package,
  DollarSign,
  Building2,
  FileText,
  PieChart,
  Calculator,
  RefreshCw,
  Lock,
  Cloud,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

// ─── انیمیشن‌های مشترک ───────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── داده‌ها ──────────────────────────────────────────────────────────

const coreModules = [
  {
    icon: BookOpen,
    color: "blue",
    title: "دفتر کل (General Ledger)",
    desc: "ثبت کامل رویدادهای مالی با حسابداری دوطرفه، مشاهده تراز آزمایشی و ترازنامه به‌صورت لحظه‌ای.",
    tags: ["سند حسابداری", "تراز آزمایشی", "حساب‌های تی"],
  },
  {
    icon: Wallet,
    color: "purple",
    title: "حساب‌های دریافتنی / پرداختنی",
    desc: "پیگیری کامل چرخه خرید و فروش، مدیریت سررسید فاکتورها و کنترل جریان بدهی‌ها.",
    tags: ["فاکتور", "سررسید", "یادآوری خودکار"],
  },
  {
    icon: DollarSign,
    color: "emerald",
    title: "خزانه‌داری و مغایرت‌گیری",
    desc: "مدیریت صندوق، حساب‌های بانکی، تهاتر و تطبیق خودکار صورت‌حساب بانکی.",
    tags: ["تطبیق بانکی", "صندوق", "حواله"],
  },
  {
    icon: Package,
    color: "yellow",
    title: "مدیریت انبار و موجودی",
    desc: "کنترل موجودی کالا با روش‌های FIFO/LIFO/میانگین، انبار چندگانه و اعلان کمبود.",
    tags: ["FIFO / LIFO", "چند انبار", "کنترل موجودی"],
  },
  {
    icon: Users,
    color: "pink",
    title: "حقوق و دستمزد",
    desc: "محاسبه خودکار حقوق، اضافه‌کاری، کسورات قانونی و ارسال فیش‌های دیجیتال.",
    tags: ["بیمه", "مالیات حقوق", "فیش دیجیتال"],
  },
  {
    icon: Building2,
    color: "cyan",
    title: "دارایی‌های ثابت",
    desc: "ثبت، طبقه‌بندی و محاسبه استهلاک دارایی‌ها با چند روش استهلاک قابل تنظیم.",
    tags: ["استهلاک", "بارگذاری دارایی", "تعمیرات"],
  },
  {
    icon: FileText,
    color: "orange",
    title: "فاکتور رسمی و مالیات",
    desc: "صدور فاکتور رسمی مطابق قوانین سازمان امور مالیاتی، محاسبه خودکار مالیات بر ارزش‌افزوده.",
    tags: ["ارزش‌افزوده", "فاکتور رسمی", "ارسال الکترونیک"],
  },
  {
    icon: PieChart,
    color: "indigo",
    title: "بودجه‌ریزی عملیاتی",
    desc: "تعریف بودجه سالانه/فصلی، انحراف بودجه و تحلیل فاصله بین برنامه و عملکرد.",
    tags: ["انحراف بودجه", "سناریو", "مقایسه"],
  },
  {
    icon: BarChart3,
    color: "blue",
    title: "گزارش‌ساز پویا",
    desc: "ساخت گزارش‌های سفارشی با drag & drop بدون نیاز به برنامه‌نویسی، خروجی Excel/PDF.",
    tags: ["سفارشی‌سازی", "Excel", "PDF"],
  },
];

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "پیش‌بینی جریان نقدینگی",
    desc: "بر اساس داده‌های تاریخی، روندهای آتی نقدینگی را پیش‌بینی کرده و کمبود نقدینگی را پیش از وقوع هشدار می‌دهد.",
  },
  {
    icon: RefreshCw,
    title: "تشخیص خودکار مغایرت",
    desc: "الگوریتم هوشمند وزیر کلیه تراکنش‌ها را پایش می‌کند و ناهماهنگی‌های احتمالی را فوری گزارش می‌دهد.",
  },
  {
    icon: Layers,
    title: "دسته‌بندی خودکار هزینه",
    desc: "هوش مصنوعی هزینه‌ها را بر اساس الگوی گذشته دسته‌بندی می‌کند و از ثبت دستی تکراری جلوگیری می‌کند.",
  },
  {
    icon: BarChart3,
    title: "گزارش‌های تحلیلی پیشرفته",
    desc: "داشبورد تعاملی با نمودارهای مقایسه‌ای، تحلیل سودآوری و نقشه گرمایی هزینه‌ها.",
  },
  {
    icon: Brain,
    title: "مشاور مالی هوشمند",
    desc: "پیشنهادهای عملی بر مبنای وضعیت مالی جاری کسب‌وکار شما برای کاهش هزینه و بهبود سودآوری.",
  },
  {
    icon: Calculator,
    title: "بستن خودکار دوره مالی",
    desc: "فرایند بستن حساب‌ها را با تشخیص اقلام معلق و رویدادهای ناقص خودکار می‌کند.",
  },
];

const platformFeatures = [
  {
    icon: Globe,
    color: "blue",
    title: "نسخه وب (SaaS)",
    desc: "از هر مرورگر و هر دستگاه بدون نصب به حساب خود دسترسی داشته باشید.",
    items: [
      "پشتیبانی از همه مرورگرها",
      "بدون نیاز به نصب",
      "به‌روزرسانی خودکار",
    ],
  },
  {
    icon: Monitor,
    color: "purple",
    title: "نسخه دسکتاپ (Windows)",
    desc: "نرم‌افزار ویندوز با عملکرد آفلاین کامل و همگام‌سازی ابری بلادرنگ.",
    items: ["عملکرد آفلاین", "همگام‌سازی بلادرنگ", "سرعت بومی"],
  },
  {
    icon: Cloud,
    color: "cyan",
    title: "ابر و پشتیبان‌گیری",
    desc: "داده‌های شما در زیرساخت ابری امن ذخیره می‌شود و هر روز نسخه پشتیبان گرفته می‌شود.",
    items: ["بکاپ روزانه", "ذخیره‌سازی رمزنگاری‌شده", "بازیابی سریع"],
  },
  {
    icon: Users,
    color: "emerald",
    title: "کاربران نامحدود",
    desc: "تمام اعضای تیم می‌توانند همزمان و بدون محدودیت وارد سیستم شوند.",
    items: ["دسترسی همزمان", "نقش‌های سفارشی", "ثبت گزارش فعالیت"],
  },
];

const securityItems = [
  "رمزنگاری AES-256 برای داده در حالت سکون",
  "ارتباط TLS برای داده در حین انتقال",
  "احراز هویت دومرحله‌ای (۲FA)",
  "کنترل دسترسی مبتنی بر نقش (RBAC)",
  "ثبت و ممیزی کلیه رویدادها",
  "پشتیبان‌گیری روزانه خودکار",
  "بازیابی آنی از بلایا (Disaster Recovery)",
  "آپتایم ۹۹.۹٪ با SLA تضمین‌شده",
];

const comparisonRows = [
  { feature: "تمام ماژول‌های حسابداری", basic: true, pro: true },
  { feature: "تعداد کاربر", basic: "۳ کاربر", pro: "نامحدود" },
  { feature: "تحلیلگر هوش مصنوعی", basic: false, pro: true },
  { feature: "نسخه دسکتاپ ویندوز", basic: false, pro: true },
  { feature: "فضای ذخیره‌سازی", basic: "۵ گیگابایت", pro: "نامحدود" },
  { feature: "پشتیبانی اولویت‌دار ۲۴/۷", basic: false, pro: true },
  { feature: "گزارش‌ساز پویا سفارشی", basic: false, pro: true },
  { feature: "API دسترسی", basic: false, pro: true },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
};

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-300",
  purple: "bg-purple-500/10 text-purple-300",
  emerald: "bg-emerald-500/10 text-emerald-300",
  yellow: "bg-yellow-500/10 text-yellow-300",
  pink: "bg-pink-500/10 text-pink-300",
  cyan: "bg-cyan-500/10 text-cyan-300",
  orange: "bg-orange-500/10 text-orange-300",
  indigo: "bg-indigo-500/10 text-indigo-300",
};

// ─── صفحه اصلی ────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30"
      dir="rtl"
    >
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-blue-500"
          >
            وزیر
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <Link href="/" className="hover:text-white transition">
              خانه
            </Link>
            <Link
              href="/features"
              className="text-white transition border-b border-blue-500 pb-0.5"
            >
              ماژول‌ها
            </Link>
            <Link href="/pricing" className="hover:text-white transition">
              قیمت‌گذاری
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              تماس
            </Link>
          </div>
          <Link href="/contact">
            <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition">
              دریافت دمو
            </button>
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-48 right-0 w-[500px] h-[260px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6"
        >
          <Sparkles className="w-4 h-4 ml-2" />
          بیش از ۱۲ ماژول تخصصی
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl mb-6 leading-tight"
        >
          همه ابزارهای مالی که{" "}
          <span className="bg-gradient-to-l from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            نیاز دارید
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          از ثبت ساده رویداد مالی تا تحلیل پیشرفته با هوش مصنوعی — وزیر
          کامل‌ترین سیستم مالی‌ای است که برای وب و دسکتاپ ساخته شده.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <span className="group relative flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5">
              <ShineBorder
                borderWidth={1.5}
                duration={10}
                shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
                className="rounded-full"
              />
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
              <span className="relative z-10 flex items-center gap-2 px-8 py-4 font-bold text-white text-lg">
                <Sparkles className="w-5 h-5" />
                دریافت دمو رایگان
              </span>
            </span>
          </Link>
          <Link href="/pricing">
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg flex items-center gap-2">
              مشاهده قیمت‌ها
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

        {/* اسکرول راهنما */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-neutral-600"
        >
          <span className="text-xs">کاوش بیشتر</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CORE MODULES ── */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 mb-6">
            <Database className="w-4 h-4 ml-2" />
            ماژول‌های تخصصی حسابداری
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            زیرسیستم‌های کامل برای مدیریت مالی
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            هر آنچه یک تیم مالی نیاز دارد — در یک پلتفرم یکپارچه
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {coreModules.map((mod, i) => {
            const Icon = mod.icon;
            const iconStyle = colorMap[mod.color] ?? colorMap.blue;
            const tagStyle = tagColorMap[mod.color] ?? tagColorMap.blue;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-white/15 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`inline-flex p-3 rounded-xl border mb-4 ${iconStyle}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-7 mb-4">
                  {mod.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mod.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── AI FEATURES ── */}
      <section
        id="ai"
        className="py-24 bg-neutral-900/30 border-y border-white/5"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 mb-6">
              <Brain className="w-4 h-4 ml-2" />
              تحلیلگر هوش مصنوعی
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              وزیر فقط ثبت نمی‌کند — تحلیل می‌کند
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              موتور هوشمند وزیر داده‌های مالی شما را زیر ذره‌بین می‌گیرد تا
              تصمیم‌های بهتری بگیرید
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* AI Card Visual */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-[360px] md:h-[440px] rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/30 to-blue-950/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

              <div className="absolute inset-0 flex items-center justify-center">
                {[160, 240, 320].map((size, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 20 + i * 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ width: size, height: size }}
                    className="absolute rounded-full border border-purple-500/20"
                  />
                ))}
                <div className="relative z-10 w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                  <Brain className="w-10 h-10 text-purple-300" />
                </div>
              </div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-6 px-4 py-2.5 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30 text-sm"
              >
                <TrendingUp className="w-4 h-4 inline ml-2 text-green-400" />
                جریان نقدی:{" "}
                <span className="text-green-400 font-bold">مثبت</span>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute bottom-6 left-6 px-4 py-2.5 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-500/30 text-sm"
              >
                <BarChart3 className="w-4 h-4 inline ml-2 text-purple-400" />
                مغایرت:{" "}
                <span className="text-yellow-400 font-bold">۳ مورد</span>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 10, -6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute top-1/2 left-6 -translate-y-1/2 px-4 py-2.5 bg-emerald-500/20 backdrop-blur-sm rounded-xl border border-emerald-500/30 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 inline ml-2 text-emerald-400" />
                دوره مالی بسته شد
              </motion.div>
            </motion.div>

            {/* AI Features List */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {aiFeatures.map((feat, i) => {
                const FIcon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex gap-4 p-5 rounded-xl border border-white/8 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/25 transition">
                      <FIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-6">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM ── */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6">
            <Monitor className="w-4 h-4 ml-2" />
            پلتفرم یکپارچه
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            هر جا باشید — وزیر آنجاست
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            تنها پلتفرم مالی که همزمان Web و Desktop را با یک حساب کاربری پوشش
            می‌دهد
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {platformFeatures.map((pf, i) => {
            const PIcon = pf.icon;
            const iconStyle = colorMap[pf.color] ?? colorMap.blue;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl border border-white/8 bg-neutral-900/50 overflow-hidden"
              >
                <div
                  className={`inline-flex p-3 rounded-xl border mb-4 ${iconStyle}`}
                >
                  <PIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pf.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-6 mb-5">
                  {pf.desc}
                </p>
                <ul className="space-y-2">
                  {pf.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section className="py-24 bg-neutral-900/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 mb-6">
                <Lock className="w-4 h-4 ml-2" />
                امنیت بانکی
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                داده‌هایتان در{" "}
                <span className="bg-gradient-to-l from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  امن‌ترین
                </span>{" "}
                محیط
              </h2>
              <p className="text-neutral-400 text-lg leading-8 mb-8">
                وزیر با رویکرد امنیت چندلایه ساخته شده. از رمزنگاری داده تا
                احراز هویت دومرحله‌ای — هر لایه برای محافظت از اطلاعات مالی حساس
                شما طراحی شده است.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {securityItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-2.5 text-sm text-neutral-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-emerald-400" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-neutral-900/80 overflow-hidden">
                <BorderBeam
                  size={300}
                  duration={12}
                  colorFrom="#10b981"
                  colorTo="#06b6d4"
                />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-white/8">
                    <span className="text-neutral-400 text-sm">
                      آپتایم سیستم
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold text-emerald-400">۹۹.۹٪</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-white/8">
                    <span className="text-neutral-400 text-sm">رمزنگاری</span>
                    <span className="font-mono text-sm text-cyan-400 font-bold">
                      AES-256
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-white/8">
                    <span className="text-neutral-400 text-sm">
                      آخرین پشتیبان‌گیری
                    </span>
                    <span className="text-sm text-blue-400 font-bold">
                      ۲ ساعت پیش
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-white/8">
                    <span className="text-neutral-400 text-sm">
                      احراز هویت دومرحله‌ای
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                      فعال
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-white/8">
                    <span className="text-neutral-400 text-sm">
                      کنترل دسترسی (RBAC)
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold">
                      فعال
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6">
            <Zap className="w-4 h-4 ml-2" />
            مقایسه پلن‌ها
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            پلن مناسب کسب‌وکار شما
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            هر دو پلن به کل تیم شما دسترسی می‌دهد — فقط در امکانات تفاوت دارند
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-neutral-900/80">
            <div className="p-5 text-neutral-400 text-sm font-medium">
              امکانات
            </div>
            <div className="p-5 text-center border-r border-white/8">
              <span className="text-lg font-bold text-neutral-300">
                استارتاپ
              </span>
              <div className="text-sm text-neutral-500 mt-1">۲۹۹ هزار/ماه</div>
            </div>
            <div className="p-5 text-center border-r border-white/8 bg-blue-950/20">
              <span className="text-lg font-bold text-blue-300">
                شرکتی (وزیر)
              </span>
              <div className="text-sm text-blue-500 mt-1">۵۹۹ هزار/ماه</div>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-white/8 ${
                i % 2 === 0 ? "bg-neutral-950/40" : "bg-neutral-900/30"
              }`}
            >
              <div className="p-4 text-sm text-neutral-300 flex items-center">
                {row.feature}
              </div>
              <div className="p-4 flex items-center justify-center border-r border-white/8">
                {typeof row.basic === "boolean" ? (
                  row.basic ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <span className="text-neutral-600 text-lg">—</span>
                  )
                ) : (
                  <span className="text-sm text-neutral-300">{row.basic}</span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center border-r border-white/8 bg-blue-950/10">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  ) : (
                    <span className="text-neutral-600 text-lg">—</span>
                  )
                ) : (
                  <span className="text-sm text-blue-300 font-bold">
                    {row.pro}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link href="/pricing">
            <button className="px-8 py-3 rounded-full border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 transition font-bold flex items-center gap-2 mx-auto">
              مشاهده کامل تعرفه‌ها
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            ۳۰ روز استفاده رایگان — بدون نیاز به کارت اعتباری
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <span className="group relative flex w-fit overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-blue-700/20 via-blue-600/15 to-purple-700/20 transition-transform duration-300 hover:-translate-y-0.5">
                <ShineBorder
                  borderWidth={1.5}
                  duration={10}
                  shineColor={["#60a5fa", "#22d3ee", "#a78bfa"]}
                  className="rounded-full"
                />
                <span className="pointer-events-none absolute inset-[1px] rounded-full bg-neutral-950/90" />
                <span className="relative z-10 flex items-center gap-2 px-10 py-4 font-bold text-white text-lg">
                  شروع رایگان
                </span>
              </span>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-bold text-lg flex items-center gap-2">
                تماس با فروش
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 border-t border-white/10 bg-neutral-950">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm gap-4">
          <p>© ۱۴۰۴ وزیر. تمام حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              حریم خصوصی
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              شرایط استفاده
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
