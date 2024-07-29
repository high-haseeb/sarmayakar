import React from "react";
import AnimatedLayout from "@/components/home/AnimatedLayout";
import Footer from "@/components/common/Footer";
import Chose from "@/components/common/Chose";
import Projects from "@/components/common/Projects";
import Navbar from "@/components/common/Navbar"

function page() {
  return (
    <AnimatedLayout>
      <Navbar/>
      <div className="w-screen h-auto overflow-hidden">
        {/* <ProjectsPage/> */}
        <Projects/>
        <Chose/>
        <Footer/>
      </div>
    </AnimatedLayout>
  );
}

export default page;
