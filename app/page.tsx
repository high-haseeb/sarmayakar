import Hero from "@/components/home/sections/Hero";
import Services from "@/components/home/sections/Services";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="parent dark">
        <Hero />
      <Services/>
      </main>
    </NextUIProvider>
  );
}
