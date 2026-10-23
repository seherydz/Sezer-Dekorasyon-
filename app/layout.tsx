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
  title: "Sezer Dekorasyon | Asma Tavan ve İç Mekân Tasarımı",
  description:
    "Sezer Dekorasyon; Antalya başta olmak üzere Türkiye genelinde asma tavan, alçıpan, bölme duvar, metal tavan ve dekorasyon uygulamaları gerçekleştirir.",
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
