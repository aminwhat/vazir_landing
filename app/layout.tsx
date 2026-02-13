import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وزیر - سیستم جامع حسابداری و مالی با هوش مصنوعی",
  description:
    "وزیر یک پلتفرم مالی و حسابداری جامع برای وب و دسکتاپ است که شامل تمام ماژول‌های نرم‌افزار حسابداری، تحلیل هوش مصنوعی، رابط کاربری زیبا و هزینه اشتراک کم با کاربران نامحدود می‌باشد.",
  keywords: [
    "نرم افزار حسابداری",
    "سیستم مالی",
    "حسابداری آنلاین",
    "هوش مصنوعی مالی",
    "دفتر کل",
    "حسابداری دریافت و پرداخت",
    "موجودی انبار",
    "حقوق و دستمزد",
    "نرم افزار مالی",
    "حسابداری ابری",
    "وزیر",
    "Vazir",
    "accounting software",
    "financial platform",
    "AI accounting",
  ],
  authors: [{ name: "Vazir" }],
  creator: "Vazir",
  publisher: "Vazir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://vazir.io",
    title: "وزیر - مشاور هوشمند مالی شما",
    description:
      "سیستم جامع حسابداری با هوش مصنوعی - تمام ماژول‌ها، کاربران نامحدود، قیمت استثنایی",
    siteName: "Vazir",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "وزیر - سیستم حسابداری با هوش مصنوعی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وزیر - مشاور هوشمند مالی شما",
    description: "سیستم جامع حسابداری با هوش مصنوعی",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vazir.io",
    languages: {
      "fa-IR": "https://vazir.io",
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  category: "Finance & Accounting Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "وزیر",
              alternateName: "Vazir",
              description: "سیستم جامع حسابداری و مالی با هوش مصنوعی",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Windows, macOS, Linux",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "IRR",
                lowPrice: "49000",
                highPrice: "99000",
                offerCount: "3",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                ratingCount: "100",
              },
              featureList: [
                "دفتر کل و حسابداری مالی",
                "حسابداری دریافت و پرداخت",
                "مدیریت موجودی انبار",
                "حقوق و دستمزد",
                "تحلیل هوش مصنوعی",
                "کاربران نامحدود",
              ],
              inLanguage: "fa",
              provider: {
                "@type": "Organization",
                name: "Vazir",
              },
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Vazirmatn', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
