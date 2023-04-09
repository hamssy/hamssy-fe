import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";
import("../mocks");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
