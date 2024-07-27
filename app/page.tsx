import Hero from "@/components/home/sections/Hero";
import AboutUs from "@/components/home/sections/AboutUs";
import Excellence from "@/components/home/sections/Excellence";
import VirtualTour from "@/components/home/sections/VirtualTour";
import Contact from "@/components/common/Contact";
import Services from "@/components/home/sections/Services";
import { NextUIProvider } from "@nextui-org/react";
import AnimatedLayout from "@/components/home/AnimatedLayout";
import Projects from "@/components/common/Projects";

export default function Home() {
  return (
    <AnimatedLayout>
      <NextUIProvider>
        <main className="parent dark">
          <Hero />
          <Projects/>
          <VirtualTour/>
          <Services />
          <AboutUs />
          <Excellence />
          <Contact/>
        </main>
      </NextUIProvider>
    </AnimatedLayout>
  );
}
