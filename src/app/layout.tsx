import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clear Choice Services | Supply Chain Optimization for Manufacturers",
  description:
    "Empowering North Carolina's Manufacturing Renaissance. Industry 4.0 adoption, operational transformation, supply chain readiness, and workforce development for manufacturers.",
  keywords: [
    "NC manufacturing consultant",
    "Toyota supplier certification",
    "Industry 4.0 implementation",
    "supply chain readiness",
    "IATF 16949 certification",
    "lean manufacturing consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
