import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vazir.io"),
  title: "وزیر - نرم‌افزار حسابداری و مدیریت مالی هوشمند با هوش مصنوعی",
  description:
    "وزیر: جامع‌ترین پلتفرم مالی و حسابداری تحت وب و دسکتاپ با تحلیل هوشمند داده‌ها توسط هوش مصنوعی، رابط کاربری زیبا و کاربران نامحدود.",
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
    "هوش مصنوعی",
    "هوش مصنوعی برای حسابداری",
    "هوش مصنوعی برای مالی",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
  themeColor: "#000000",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
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
  },
  category: "Finance & Accounting Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = "G-X910ST8C4E";

  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="db50f878-d34d-4981-a934-dd491e1e9ec6"
        ></script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
        </Script>

        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "وزیر",
              alternateName: "Vazir",
              description:
                "وزیر — سیستم جامع حسابداری و مالی با تحلیل هوشمند داده‌ها توسط هوش مصنوعی و کاربران نامحدود.",
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
              url: "https://vazir.io",
              image: "https://vazir.io/og-image.png",
            }),
          }}
        />
      </head>
      <body
        className={`${vazir.className} bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
