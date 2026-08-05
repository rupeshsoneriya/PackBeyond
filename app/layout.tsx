import type { Metadata } from "next";
import { Montserrat, Kanit } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import logo from "../public/logo.jpeg";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PackBeyond",
  description:
    "Elevate your brand with superior printing. Packaging design, custom apparel, boxes, cards and more.",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-kanit">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}