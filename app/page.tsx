"use client";

import { motion } from "framer-motion";
import {
  Check,
  Brain,
  Layers,
  Shield,
  Zap,
  Globe,
  Monitor,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";

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

export default function Home() {
  // اسکرول نرم به بخش‌ها
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30">
      {/* --- HEADER / NAV --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-blue-500">
            وزیر
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-white transition"
            >
              امکانات
            </button>
            <button
              onClick={() => scrollToSection("ai")}
              className="hover:text-white transition"
            >
              هوش مصنوعی
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-white transition"
            >
              قیمت‌گذاری
            </button>
          </div>
          <button
            onClick={() => scrollToSection("pricing")}
            className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition"
          >
            شروع رایگان
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
        {/* افکت نور پس‌زمینه */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />

        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse ml-2"></span>
          نسخه جدید وزیر با هوش مصنوعی منتشر شد
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl mb-6 leading-tight"
        >
          اوج قدرت مالی در دستان وزیر
        </motion.h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          اولین پلتفرم مالی یکپارچه (Web & Desktop) با تحلیلگر هوش مصنوعی.
          زیبایی در طراحی، قدرت در عملکرد، و سادگی در استفاده.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <div className="relative group">
            <ShimmerButton className="shadow-2xl font-bold text-lg px-8 py-4">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                دریافت دمو نرم‌افزار
              </span>
            </ShimmerButton>
          </div>
        </div>

        {/* تصویر شماتیک نرم‌افزار */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-neutral-900/50 aspect-video overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
            [محل قرارگیری اسکرین‌شات محیط نرم‌افزار وزیر با تم دارک]
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </motion.div>
      </section>

      {/* --- FEATURES (BENTO GRID) --- */}
      <section id="features" className="py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          همه ابزارها در یک جعبه
        </h2>

        <BentoGrid className="max-w-4xl mx-auto">
          {features.map((item, i) => (
            <BentoCard
              key={i}
              name={item.title}
              description={item.description}
              background={item.header}
              Icon={item.Icon}
              href="#pricing"
              cta="مشاهده جزئیات"
              className={i === 3 ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </BentoGrid>
      </section>

      {/* --- MODULES LIST --- */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-10 text-blue-400">
            ماژول‌های تخصصی حسابداری
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {accountingModules.map((mod, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-white/10 bg-neutral-950 hover:border-blue-500/50 transition cursor-default"
              >
                {mod}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AI SECTION --- */}
      <section
        id="ai"
        className="py-24 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 space-y-6">
          <div className="p-3 bg-purple-500/10 w-fit rounded-lg border border-purple-500/20">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl font-bold">حسابدار هوشمند شما</h2>
          <p className="text-neutral-400 text-lg leading-loose">
            وزیر فقط ثبت نمی‌کند، تحلیل می‌کند. هوش مصنوعی ما داده‌های شما را
            بررسی کرده، مغایرت‌ها را پیش از وقوع تشخیص می‌دهد و پیشنهادهایی برای
            کاهش هزینه ارائه می‌کند.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Check className="text-green-500" /> تشخیص خودکار مغایرت‌های بانکی
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-green-500" /> پیش‌بینی جریان نقدینگی (Cash
              Flow)
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-green-500" /> دسته‌بندی هوشمند هزینه‌ها
            </li>
          </ul>
        </div>
        <div className="flex-1 h-80 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
          {/* انیمیشن انتزاعی هوش مصنوعی */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="text-purple-300 font-mono text-xl animate-pulse">
            Processing Financial Data...
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section
        id="pricing"
        className="py-24 container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">قیمت‌گذاری شفاف</h2>
        <p className="text-neutral-400 mb-16">
          بدون هزینه پنهان. دسترسی نامحدود برای تمام اعضای تیم شما.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* پلن پایه */}
          <div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition">
            <h3 className="text-xl font-bold text-neutral-300">استارتاپ</h3>
            <div className="text-4xl font-bold my-4">
              ۲۹۹{" "}
              <span className="text-lg text-neutral-500 font-normal">
                هزار تومان/ماه
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              مناسب برای کسب‌وکارهای کوچک
            </p>
            <ul className="text-right space-y-3 mb-8 text-neutral-300">
              <li className="flex gap-2">
                <Check size={18} /> ۳ کاربر همزمان
              </li>
              <li className="flex gap-2">
                <Check size={18} /> ماژول‌های پایه حسابداری
              </li>
              <li className="flex gap-2">
                <Check size={18} /> پشتیبانی ایمیلی
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
              انتخاب پلن
            </button>
          </div>

          {/* پلن حرفه ای */}
          <div className="relative p-8 rounded-2xl border border-blue-500/50 bg-neutral-900/60 overflow-hidden">
            <div className="absolute top-0 left-0 bg-blue-600 text-xs px-3 py-1 rounded-br-lg">
              پیشنهاد ویژه
            </div>
            <BorderBeam
              size={300}
              duration={10}
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
            />

            <h3 className="text-xl font-bold text-white">شرکتی (وزیر)</h3>
            <div className="text-4xl font-bold my-4 text-blue-400">
              ۵۹۹{" "}
              <span className="text-lg text-neutral-500 font-normal">
                هزار تومان/ماه
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              قدرت کامل برای شرکت‌های در حال رشد
            </p>
            <ul className="text-right space-y-3 mb-8 text-white">
              <li className="flex gap-2 text-blue-300">
                <Check size={18} /> <strong>کاربران نامحدود</strong>
              </li>
              <li className="flex gap-2">
                <Check size={18} /> تمام ماژول‌های حسابداری
              </li>
              <li className="flex gap-2">
                <Check size={18} /> تحلیلگر هوش مصنوعی
              </li>
              <li className="flex gap-2">
                <Check size={18} /> نسخه ویندوز + وب
              </li>
            </ul>
            <ShimmerButton className="w-full text-center py-3">
              خرید اشتراک
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 text-center text-neutral-500 text-sm bg-neutral-950">
        <div className="mb-4 text-2xl font-bold text-blue-900">Vazir</div>
        <p>تمامی حقوق برای نرم‌افزار حسابداری وزیر محفوظ است © ۱۴۰۳</p>
        <p className="mt-2 text-xs opacity-50">
          طراحی شده با عشق برای مدیران مالی ایران
        </p>
      </footer>

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
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl">
        <Layers className="text-blue-500 w-10 h-10" />
      </div>
    ),
    Icon: Layers,
  },
  {
    title: "امنیت بانکی",
    description: "رمزنگاری داده‌ها با استانداردهای بانکی و بکاپ‌گیری لحظه‌ای.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl">
        <Shield className="text-green-500 w-10 h-10" />
      </div>
    ),
    Icon: Shield,
  },
  {
    title: "سرعت فوق‌العاده",
    description: "ساخته شده با تکنولوژی‌های مدرن وب برای سرعتی باورنکردنی.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl">
        <Zap className="text-yellow-500 w-10 h-10" />
      </div>
    ),
    Icon: Zap,
  },
  {
    title: "دسترسی هیبریدی (Web & Desktop)",
    description:
      "هم در مرورگر وب استفاده کنید و هم نرم‌افزار ویندوز را نصب کنید. داده‌ها همیشه سینک هستند.",
    header: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900/20 to-neutral-900 rounded-xl gap-4">
        <Globe className="text-blue-400" />
        <Monitor className="text-purple-400" />
      </div>
    ),
    Icon: Globe,
  },
];
