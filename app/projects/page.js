import React from "react";
import Projects from "@/components/projects/Projects";
import AnimatedLayout from "@/components/home/AnimatedLayout";
import Navbar from "@/components/common/Navbar";

function page() {
  return (
    <AnimatedLayout>
      <div className="w-screen h-auto overflow-hidden">
        <Projects />
      </div>
    </AnimatedLayout>
  );
}

export default page;
