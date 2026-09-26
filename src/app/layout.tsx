import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فخر الخليج للمقاولات العامة | الدمام - المملكة العربية السعودية",
  description: "فخر الخليج للمقاولات العامة في الدمام - متخصصون في الهياكل الحديدية والمستودعات، المظلات، السواتر، والترميم والصيانة الشاملة. تواصل معنا: 0552219925",
  keywords: "مقاولات الدمام، هياكل حديدية، مستودعات، مظلات الدمام، سواتر، ترميم وصيانة، فخر الخليج",
  authors: [{ name: "فخر الخليج للمقاولات العامة" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    title: "فخر الخليج للمقاولات العامة | الدمام",
    description: "متخصصون في الهياكل الحديدية والمستودعات، المظلات، السواتر، والترميم والصيانة الشاملة في الدمام",
    siteName: "فخر الخليج للمقاولات العامة",
  },
  twitter: {
    card: "summary_large_image",
    title: "فخر الخليج للمقاولات العامة",
    description: "حلول متكاملة لأعمال المقاولات والهياكل الحديدية والمظلات والسواتر في الدمام",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "فخر الخليج للمقاولات العامة",
              "url": "https://fakhr-alkhaleej.com",
              "telephone": "+966552219925",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الدمام",
                "addressCountry": "SA"
              },
              "areaServed": "الدمام",
              "description": "متخصصون في الهياكل الحديدية والمستودعات، المظلات، السواتر، والترميم والصيانة الشاملة",
              "serviceType": [
                "الهياكل الحديدية والمستودعات",
                "المظلات",
                "السواتر",
                "الترميم والصيانة الشاملة"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
