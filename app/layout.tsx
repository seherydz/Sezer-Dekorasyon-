
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sezerdekorasyon.com.tr"),

  title: "Antalya Asma Tavan ve Dekorasyon | Sezer Dekorasyon",

  description:
    "Antalya asma tavan, alçıpan, clip-in tavan, metal tavan ve bölme duvar uygulamaları. Sezer Dekorasyon ile profesyonel proje çözümleri ve teklif alın.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sezer Dekorasyon | Antalya Asma Tavan ve Dekorasyon",
    description:
      "Antalya'da asma tavan, alçıpan, metal tavan ve iç mekân dekorasyon uygulamaları.",
    url: "https://sezerdekorasyon.com.tr",
    siteName: "Sezer Dekorasyon",
    locale: "tr_TR",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Sezer Dekorasyon | Antalya",
    description:
      "Antalya'da profesyonel tavan sistemleri ve dekorasyon uygulamaları.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
