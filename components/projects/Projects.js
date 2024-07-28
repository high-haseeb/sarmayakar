
"use client"
import Projects from "@/components/common/Projects";
import { useState,useEffect } from "react";
import Contact from "../common/Contact";

function ProjectsPage() {
  const [translate, setTranslate] = useState("translate-y-12 opacity-0");
  const [translate_2, setTranslate_2] = useState("translate-y-12 opacity-0");
  const delay = 200;

  useEffect(() => {
    setTimeout(() => {
      setTranslate("translate-y-0 opacity-100");
      setTimeout(() => {
        setTranslate_2("translate-y-0 opacity-100");
      }, delay);
    }, delay);
  }, []);

  return (
    <div className="flex flex-col w-screen h-auto overflow-hidden">
      <div className="w-full min-h-screen relative text-white">
        <img src="/images/bahria/town.jpg" alt="loading" className="w-full h-screen object-cover z-0" />
        <div className="w-full absolute bottom-0 flex flex-col text-7xl font-semibold gap-2 px-8 py-16 z-20">
        
          <div className="overflow-hidden">
            <p className={`transition transform duration-500 ${translate}`}>Our</p>
          </div>
          <div className="overflow-hidden">
            <p
              className={`${translate_2} h-24 bg-[red] transition transform duration-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400`}
            >
              Projects
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10"></div>
      </div>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default ProjectsPage;
