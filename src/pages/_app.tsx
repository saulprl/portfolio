import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`font-sans text-black ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
