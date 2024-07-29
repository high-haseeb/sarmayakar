import Hero from "@/components/home/sections/Hero";
import AboutUs from "@/components/home/sections/AboutUs";
import Excellence from "@/components/home/sections/Excellence";
import VirtualTour from "@/components/home/sections/VirtualTour";
import Contact from "@/components/common/Contact";
import Services from "@/components/home/sections/Services";
import { NextUIProvider } from "@nextui-org/react";
import AnimatedLayout from "@/components/home/AnimatedLayout";
import Navbar from "@/components/common/Navbar"
import Projects from "@/components/common/Projects";
import Footer from "@/components/common/Footer"
import Chose from "@/components/common/Chose";
import Testimonial from "@/components/common/Testimonial";

export default function Home() {
  return (
    <AnimatedLayout>
      <Navbar/>
      <NextUIProvider>
        <main className="parent dark">
          <Hero />
          <Projects/>
          <VirtualTour/>
          <Services />
          <AboutUs />
          <Chose/>
          <Excellence />
          <Testimonial/>
          <Contact/>
          <Footer/>
        </main>
      </NextUIProvider>
    </AnimatedLayout>
  );
}
