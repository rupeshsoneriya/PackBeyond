import type { Metadata } from "next";
import { Montserrat, Kanit } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PackBeyond — Custom Printing & Packaging",
  description:
    "Elevate your brand with superior printing. Packaging design, custom apparel, boxes, cards and more.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${kanit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-kanit">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}