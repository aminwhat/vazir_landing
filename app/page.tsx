"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Accounting Software Modules Data
const accountingModules = [
  {
    title: "دفتر کل و حسابداری مالی",
    description: "مدیریت کامل دفاتر، ثبت اسناد حسابداری و گزارشات مالی",
    icon: "📊",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "حسابداری دریافت و پرداخت",
    description: "مدیریت حساب‌های دریافتنی و پرداختنی با پیگیری خودکار",
    icon: "💰",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "مدیریت موجودی انبار",
    description: "کنترل موجودی، ورود و خروج کالا با سیستم بارکد",
    icon: "📦",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "حقوق و دستمزد",
    description: "محاسبه خودکار حقوق، مزایا، کسورات و لیست بانکی",
    icon: "👥",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "دارایی‌های ثابت",
    description: "ثبت و استهلاک دارایی‌ها با روش‌های مختلف",
    icon: "🏢",
    gradient: "from-rose-500 to-red-600",
  },
  {
    title: "پروژه و مرکز هزینه",
    description: "تفکیک هزینه‌ها و درآمدها بر اساس پروژه و مرکز",
    icon: "🎯",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "خزانه‌داری و بانک",
    description: "مدیریت حساب‌های بانکی، چک و تنخواه",
    icon: "🏦",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "صندوق",
    description: "ثبت دریافت و پرداخت نقدی با گزارشات روزانه",
    icon: "💵",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "مالیات و عوارض",
    description: "محاسبه خودکار مالیات و تهیه اظهارنامه",
    icon: "📋",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "بودجه‌بندی و پیش‌بینی",
    description: "تهیه و کنترل بودجه با تحلیل انحرافات",
    icon: "📈",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "تولید و بهای تمام شده",
    description: "محاسبه بهای تمام شده محصولات و فرآیندهای تولید",
    icon: "⚙️",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "گزارشات و تحلیل‌ها",
    description: "داشبورد تحلیلی و گزارشات تفصیلی با نمودارهای تعاملی",
    icon: "📊",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const pricingPlans = [
  {
    name: "استارتر",
    price: "۴۹,۰۰۰",
    period: "ماهانه",
    features: [
      "تمام ماژول‌های حسابداری",
      "کاربران نامحدود",
      "فضای ابری ۵ گیگابایت",
      "پشتیبانی ایمیلی",
      "آپدیت‌های رایگان",
      "مستندات کامل",
    ],
    popular: false,
    gradient: "from-slate-600 to-slate-800",
  },
  {
    name: "حرفه‌ای",
    price: "۹۹,۰۰۰",
    period: "ماهانه",
    features: [
      "همه امکانات استارتر",
      "تحلیل‌های هوش مصنوعی",
      "فضای ابری ۵۰ گیگابایت",
      "پشتیبانی اولویت‌دار",
      "گزارش‌سازی پیشرفته",
      "یکپارچه‌سازی با نرم‌افزارها",
    ],
    popular: true,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "سازمانی",
    price: "تماس",
    period: "سفارشی",
    features: [
      "همه امکانات حرفه‌ای",
      "سفارشی‌سازی کامل",
      "فضای ابری نامحدود",
      "پشتیبانی ۲۴/۷",
      "مشاوره اختصاصی",
      "آموزش حضوری و مجازی",
    ],
    popular: false,
    gradient: "from-indigo-600 to-purple-700",
  },
];

const aiFeatures = [
  {
    title: "تحلیل هوشمند مالی",
    description: "شناسایی الگوها و پیش‌بینی روندهای مالی با یادگیری ماشین",
    icon: "🧠",
  },
  {
    title: "هشدارهای خودکار",
    description: "اعلان هوشمند برای معاملات غیرعادی و انحرافات بودجه",
    icon: "🔔",
  },
  {
    title: "پیشنهادات بهینه‌سازی",
    description: "توصیه‌های هوشمند برای کاهش هزینه و افزایش سودآوری",
    icon: "💡",
  },
  {
    title: "خلاصه‌سازی گزارشات",
    description: "تولید خودکار خلاصه‌های مدیریتی از گزارشات پیچیده",
    icon: "📝",
  },
];

export default function VazirLandingPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      className="min-h-screen bg-slate-950 text-white overflow-x-hidden"
      dir="rtl"
    >
      {/* SEO Meta Tags would be in Head/Metadata */}

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-slate-950 to-indigo-600/5"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Persian Geometric Pattern Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="persian-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L75 25 L50 50 L25 25 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M0 50 L25 75 L50 50 L25 25 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M50 50 L75 75 L50 100 L25 75 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M50 0 L100 50 L50 100 L0 50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persian-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-600/20 border border-amber-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-amber-400 font-semibold text-lg">
                🚀 در حال توسعه - به زودی
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-l from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
              وزیر
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-300 mb-4 font-light"
          >
            مشاور هوشمند مالی شما
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            سیستم جامع حسابداری و مالی با هوش مصنوعی
            <br />
            تمام ماژول‌های حسابداری، کاربران نامحدود، قیمت استثنایی
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-l from-amber-500 to-orange-600 rounded-2xl font-bold text-xl text-white shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">شروع رایگان ۳۰ روزه</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-l from-amber-400 to-orange-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-slate-800/50 backdrop-blur-xl rounded-2xl font-bold text-xl border border-slate-700 hover:border-amber-500/50 transition-all"
            >
              درباره محصول
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>بدون محدودیت کاربر</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>تحلیل هوش مصنوعی</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>پشتیبانی دائمی</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-amber-500/50 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-amber-500 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Grid - All Accounting Modules */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-l from-amber-400 to-orange-500 bg-clip-text text-transparent">
                تمام ماژول‌های حسابداری
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              یک سیستم جامع با همه زیرسیستم‌های مورد نیاز کسب‌وکار شما
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accountingModules.map((module, index) => (
              <ModuleCard key={index} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30">
              <span className="text-indigo-400 font-semibold">
                ✨ هوش مصنوعی
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-l from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                تحلیل و پیشنهاد هوشمند
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              دستیار هوشمند که داده‌های مالی شما را تحلیل کرده و بهترین تصمیمات
              را پیشنهاد می‌دهد
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <AIFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Vazir Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              چرا{" "}
              <span className="bg-gradient-to-l from-amber-400 to-orange-500 bg-clip-text text-transparent">
                وزیر
              </span>
              ؟
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyCard
              icon="🎨"
              title="رابط کاربری زیبا"
              description="طراحی مدرن و کاربرپسند که کار با نرم‌افزار را لذت‌بخش می‌کند"
              gradient="from-pink-500 to-rose-600"
            />
            <WhyCard
              icon="⚡"
              title="سادگی استفاده"
              description="بدون نیاز به آموزش پیچیده، همه چیز واضح و قابل فهم است"
              gradient="from-amber-500 to-orange-600"
            />
            <WhyCard
              icon="💎"
              title="قیمت عادلانه"
              description="هزینه اشتراک کم با کاربران نامحدود - بهترین گزینه برای کسب‌وکارها"
              gradient="from-emerald-500 to-teal-600"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-l from-amber-400 to-orange-500 bg-clip-text text-transparent">
                پلن‌های اشتراک
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              با کاربران نامحدود و تمام امکانات - بدون هزینه‌های پنهان
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-l from-amber-500/10 to-orange-600/10 backdrop-blur-xl rounded-3xl p-12 border border-amber-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-600/5"></div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">
              آماده برای شروع هستید؟
            </h2>
            <p className="text-xl text-slate-300 mb-8 relative z-10">
              ۳۰ روز استفاده رایگان - بدون نیاز به کارت اعتباری
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 70px rgba(245, 158, 11, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 px-12 py-6 bg-gradient-to-l from-amber-500 to-orange-600 rounded-2xl font-bold text-2xl text-white shadow-2xl"
            >
              شروع کنید
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-l from-amber-400 to-orange-500 bg-clip-text text-transparent">
                وزیر
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                سیستم جامع حسابداری و مالی با هوش مصنوعی
                <br />
                برای وب و دسکتاپ
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, color: "#f59e0b" }}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <span className="text-xl">📧</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#f59e0b" }}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <span className="text-xl">📱</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#f59e0b" }}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <span className="text-xl">💬</span>
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">محصول</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    امکانات
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    قیمت‌گذاری
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    مستندات
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    راهنما
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">
                پشتیبانی
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    آموزش‌ها
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    وضعیت سرویس
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© ۱۴۰۴ وزیر. تمام حقوق محفوظ است.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                قوانین
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Module Card Component
function ModuleCard({ module, index }: { module: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
      ></div>

      <div className="relative z-10">
        <div className="text-4xl mb-4">{module.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
          {module.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {module.description}
        </p>
      </div>

      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 -z-10 blur-xl`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// AI Feature Card Component
function AIFeatureCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/50 transition-all"
    >
      <div className="text-5xl mb-6">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-300 leading-relaxed">{feature.description}</p>

      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 -z-10 blur-2xl"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Why Card Component
function WhyCard({ icon, title, description, gradient }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 text-center group"
    >
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>

      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 -z-10 blur-2xl`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Pricing Card Component
function PricingCard({ plan, index }: { plan: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border-2 ${
        plan.popular
          ? "border-amber-500 shadow-2xl shadow-amber-500/20"
          : "border-slate-800 hover:border-slate-700"
      } transition-all`}
    >
      {plan.popular && (
        <div className="absolute -top-4 right-1/2 transform translate-x-1/2">
          <div className="bg-gradient-to-l from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            محبوب‌ترین
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-2">
          {plan.price === "تماس" ? (
            <span className="text-5xl font-black text-amber-400">
              {plan.price}
            </span>
          ) : (
            <>
              <span className="text-5xl font-black text-amber-400">
                {plan.price}
              </span>
              <span className="text-slate-400">تومان</span>
            </>
          )}
        </div>
        <p className="text-slate-500 mt-2">{plan.period}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="flex items-start gap-3 text-slate-300"
          >
            <svg
              className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          plan.popular
            ? "bg-gradient-to-l from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-500/30"
            : "bg-slate-800 text-white hover:bg-slate-700"
        }`}
      >
        انتخاب پلن
      </motion.button>

      {plan.popular && (
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-5 -z-10 blur-3xl`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
