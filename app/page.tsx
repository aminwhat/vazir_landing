import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ShineBorder } from "@/components/ui/shine-border";
import { Marquee } from "@/components/ui/marquee";

export const metadata: Metadata = {
  title: "وزیر | پلتفرم مالی و حسابداری هوشمند برای دسکتاپ و وب",
  description:
    "وزیر یک پلتفرم مالی و حسابداری یکپارچه برای وب و دسکتاپ است. شامل تمام ماژول‌های حسابداری، گزارش‌گیری پیشرفته، اتوماسیون مالی و تحلیل هوشمند مبتنی بر هوش مصنوعی.",
  keywords: [
    "نرم افزار حسابداری",
    "سیستم مالی",
    "حسابداری آنلاین",
    "حسابداری تحت وب",
    "هوش مصنوعی در حسابداری",
    "پلتفرم مالی",
    "Vazir",
    "وزیر",
  ],
  openGraph: {
    title: "وزیر | پلتفرم مالی هوشمند",
    description:
      "سیستم مالی و حسابداری همه‌کاره با تحلیل هوشمند مبتنی بر AI و رابط کاربری مدرن.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <GridPattern
        width={40}
        height={40}
        className="absolute inset-0 opacity-20"
      />

      {/* Hero Section */}
      <section className="container relative z-10 mx-auto px-6 py-32 text-center">
        <BlurFade delay={0.2}>
          <AnimatedGradientText className="text-sm mb-4">
            🚀 در حال توسعه — بزودی منتشر می‌شود
          </AnimatedGradientText>
        </BlurFade>

        <BlurFade delay={0.3}>
          <SparklesText className="text-5xl md:text-7xl font-bold">
            وزیر
          </SparklesText>
        </BlurFade>

        <BlurFade delay={0.5}>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            پلتفرم مالی و حسابداری هوشمند برای دسکتاپ و وب — همه ماژول‌های
            حسابداری در یک سیستم یکپارچه، همراه با تحلیل و بازبینی هوشمند مبتنی
            بر هوش مصنوعی.
          </p>
        </BlurFade>

        <BlurFade delay={0.7}>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="text-lg">
              دریافت اطلاع‌رسانی
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              مشاهده امکانات
            </Button>
          </div>
        </BlurFade>
      </section>

      {/* Features Section */}
      <section className="container relative z-10 mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          تمام زیرسیستم‌های حسابداری، یکجا
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "حسابداری مالی (دفتر کل، معین، تفضیل)",
            "حسابداری خزانه و مدیریت نقدینگی",
            "مدیریت فاکتور فروش و خرید",
            "انبارداری و مدیریت موجودی",
            "حقوق و دستمزد",
            "مدیریت دارایی‌های ثابت",
            "گزارش‌های مالی و ترازنامه",
            "مدیریت مالیات و ارزش افزوده",
            "داشبورد مدیریتی هوشمند",
          ].map((feature, i) => (
            <Card key={i} className="relative p-6 rounded-2xl">
              <ShineBorder />
              <p className="text-lg font-medium">{feature}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section className="container relative z-10 mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          تحلیل مالی با قدرت هوش مصنوعی
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-loose">
          وزیر با استفاده از تحلیل داده‌ها، گزارش‌های مالی شما را بررسی کرده،
          خطاهای احتمالی را شناسایی می‌کند و پیشنهادهای بهینه‌سازی ارائه می‌دهد.
          تصمیم‌گیری مالی دقیق‌تر، سریع‌تر و هوشمندانه‌تر.
        </p>
      </section>

      {/* UX Section */}
      <section className="container relative z-10 mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          طراحی زیبا، تجربه کاربری قدرتمند
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-loose">
          رابط کاربری مدرن، سریع و مینیمال. یادگیری آسان برای تیم شما، بدون
          پیچیدگی‌های رایج نرم‌افزارهای مالی.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="container relative z-10 mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          اشتراک مقرون‌به‌صرفه با کاربران نامحدود
        </h2>

        <div className="flex justify-center">
          <Card className="relative p-10 rounded-2xl max-w-md w-full">
            <BorderBeam />
            <h3 className="text-2xl font-bold mb-4">پلن اشتراکی وزیر</h3>
            <p className="text-muted-foreground mb-6">
              پرداخت ماهانه با هزینه پایین — بدون محدودیت تعداد کاربر.
            </p>
            <Button size="lg" className="w-full text-lg">
              بزودی فعال می‌شود
            </Button>
          </Card>
        </div>
      </section>

      {/* Marquee Logos / Keywords */}
      <section className="relative z-10 w-full py-16 overflow-hidden">
        <Marquee>
          <span className="mx-8 text-muted-foreground">
            حسابداری • هوش مصنوعی • گزارش مالی • ERP • خزانه‌داری • مالیات •
            انبار • حقوق و دستمزد
          </span>
        </Marquee>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-muted-foreground">
        © {new Date().getFullYear()} وزیر - تمامی حقوق محفوظ است.
      </footer>
    </main>
  );
}
