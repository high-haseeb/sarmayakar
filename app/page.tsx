import Hero from "@/components/home/sections/Hero";
import AboutUs from "@/components/home/sections/AboutUs";
import Excellence from "@/components/home/sections/Excellence";
import Services from "@/components/home/sections/Services";
import Navbar from "@/components/common/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import AnimatedLayout from "@/components/home/AnimatedLayout";

export default function Home() {
  return (
    <AnimatedLayout>
      <NextUIProvider>
        <main className="parent dark">
          <Hero />
          <Services />
          <AboutUs />
          <Excellence />
        </main>
      </NextUIProvider>
    </AnimatedLayout>
  );
}
