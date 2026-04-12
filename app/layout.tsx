import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Khedne Ma3ak — خدني معك",
  description: "تطبيق مشاركة السيارات اللبناني",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-cairo)]">
        {children}
      </body>
    </html>
  );
}
