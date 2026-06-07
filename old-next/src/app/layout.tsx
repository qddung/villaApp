import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VillaVungTau - Villa Cao Cấp Tại Vũng Tàu",
    template: "%s | VillaVungTau",
  },
  description:
    "Khám phá và đặt thuê villa cao cấp tại Vũng Tàu. Hồ bơi riêng, view biển, dịch vụ concierge 24/7. Trải nghiệm kỳ nghỉ đẳng cấp cho gia đình và nhóm bạn.",
  keywords: [
    "villa vũng tàu",
    "cho thuê villa",
    "biệt thự vũng tàu",
    "nghỉ dưỡng vũng tàu",
    "villa cao cấp",
    "hồ tràm villa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-body text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
