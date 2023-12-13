import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-2">
        <Hero />
      </main>
    </>
  );
}
