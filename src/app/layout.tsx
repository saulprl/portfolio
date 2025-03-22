import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Home | saulprl's portfolio",
  description: "Saúl Ramos Laborín's portfolio",
  keywords:
    "portfolio, saulprl, web development, mobile development, software development, react, nextjs, typescript, javascript, flutter, react native, dart, java",
  openGraph: {
    title: "Home | saulprl's portfolio",
    description: "Saúl Ramos Laborín's portfolio",
    images: "/images/csipro-access-conf.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <main className="mx-auto flex max-w-5xl flex-col items-center gap-4 p-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
