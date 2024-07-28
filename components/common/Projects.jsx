"use client";
import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import { motion, useAnimation, useInView } from "framer-motion";
import SquigglyLine from "../home/sections/SquigglyLine";
import { useRouter } from "next/navigation";

import Chose from "@/components/common/Chose"

const Projects = () => {
  const images = [
    { src: "/images/assets/two.jpeg", title: "Pearl One Tower" , router:"/projects/pearlone"},
    { src: "/images/assets/one.jpeg", title: "Pearl One Couryard" , router:"/projects/courtyard"},
    { src: "/images/abs/ABS-Mall-Residency-2.jpg", title: "ABS Mall" , router:"/projects/absmall"},
  ];
  
  return (
    <div className="w-screen h-auto bg-black overflow-hidden relative section z-10  pt-10 ">
      <div className="w-full h-full text-white px-8 lg:px-10 py-16 flex items-center justify-start  relative flex-col gap-10 z-50">
        <SquigglyLine
           path = {
    "m 220,20 c 30,10 60,20 90,30 c -40,20 -80,40 -120,60 c 40,40 80,80 120,120 c -50,20 -100,40 -150,60 c 30,50 60,100 90,150 c -40,30 -80,60 -120,90 c 30,50 60,100 90,150 c -10,20 -20,40 -30,60 c -20,-10 -40,-20 -60,-30 c 10,-30 20,-60 30,-90 c -30,-10 -60,-20 -90,-30 c -10,-30 -20,-60 -30,-90 c 10,-20 20,-40 30,-60"
}
          viewBox={"80 0 112.27184 297.69135"}
        />
        <AnimatedText>
          <div className="w-full flex items-start justify-start font-semibold text-4xl py-2">Our Projects</div>
        </AnimatedText>
        <ImageGallery images={images}/>
      </div>
        <Chose/>
    </div>
  );
};






const ImageGallery = ({ images }) => {
  return (
    <div className="flex flex-col gap-10">
      {images.map((img, index) => (
        <ImageItem key={index} src={img.src} title={img.title} router={img.router} />
      ))}
    </div>
  );
};

const ImageItem = ({ src, title,router }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const Router=useRouter();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        scale: 0.8,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center z-10 ">
      <motion.img
        ref={ref}
        src={src}
        alt="Gallery image"
        className="w-full object-cover rounded-3xl"
        animate={controls}
        initial={{ scale: 0.8, opacity: 0.5 }}
        onClick={()=>Router.push(router)}
      />
      <AnimatedText>
        <div className="text-2xl font-semibold">{title}</div>
      </AnimatedText>
    </div>
  );
};

export default Projects;
