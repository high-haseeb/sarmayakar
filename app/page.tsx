import Hero from "@/components/home/sections/Hero";
import AboutUs from "@/components/home/sections/AboutUs";
import Excellence from "@/components/home/sections/Excellence";
import Services from "@/components/home/sections/Services";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="parent dark">
        <Hero />
        <Services />
        <AboutUs />
        <Excellence />
      </main>
    </NextUIProvider>
  );
}
