import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Home | saulprl's portfolio",
  description: "Saúl Ramos' portfolio",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
