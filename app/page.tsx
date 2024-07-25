import Hero from "@/components/home/sections/Hero";
import AboutUs from "@/components/home/sections/AboutUs";
import Excellence from "@/components/home/sections/Excellence";
import VirtualTour from "@/components/home/sections/VirtualTour";
import Footer from "@/components/common/Footer";
import Services from "@/components/home/sections/Services";
import { NextUIProvider } from "@nextui-org/react";
import AnimatedLayout from "@/components/home/AnimatedLayout";

export default function Home() {
  return (
    <AnimatedLayout>
      <NextUIProvider>
        <main className="parent dark">
          <Hero />
          <VirtualTour/>
          <Services />
          <AboutUs />
          <Excellence />
          <Footer/>
        </main>
      </NextUIProvider>
    </AnimatedLayout>
  );
}
