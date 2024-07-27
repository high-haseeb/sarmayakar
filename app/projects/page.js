import React from "react";
import ProjectsPage from "@/components/projects/Projects";
import AnimatedLayout from "@/components/home/AnimatedLayout";
import Navbar from "@/components/common/Navbar";

function page() {
  return (
    <AnimatedLayout>
      <div className="w-screen h-auto overflow-hidden">
        <ProjectsPage/>
      </div>
    </AnimatedLayout>
  );
}

export default page;
