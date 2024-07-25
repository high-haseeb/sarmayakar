"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { Button } from "@nextui-org/button";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import React, { useRef } from "react";

const VirtualTour = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-24 flex items-start justify-between section relative flex-col backdrop-blur ">
      <div className="w-full">
        <AnimatedText>
          <div className="flex w-full font-semibold text-5xl items-center justify-start">Virtual tour</div>
        </AnimatedText>
        <div className="text-3xl font-semibold flex items-end justify-end w-full ">
          <div className="overflow-y-hidden w-full flex items-end justify-end">
            <div className="w-1/2 text-left leading-[2rem] flex flex-col items-center justify-center">
              <AnimatedText>
                Envision <br />
              </AnimatedText>
              <AnimatedText>
                your future <br />
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 z-10 w-full">
        <AnimatedText><div className="w-full flex items-start justify-start font-semibold text-3xl mb-4">Pearl One Courtyard</div></AnimatedText>
        <AnimatedText><Card title={"one bed"} href={"https://momento360.com/e/uc/1c78efb954844138806333430e407dbc?utm_campaign=embed&utm_source=other&size=medium&display-plan=true&upload-key=7fae4a3dcc2e49a7abb5b79a63202565"}/></AnimatedText>
        <AnimatedText><Card title={"two bed"} href={"https://momento360.com/e/uc/154f77a66dd4408eb2ff445bbc50a14b?utm_campaign=embed&utm_source=other&size=medium&display-plan=true&upload-key=e6abf0d6ea484fb09f4bdf6aff978f5a"}/></AnimatedText>
        <AnimatedText><Card title={"three bed"} href={"https://momento360.com/e/uc/80bb8b8df26f45d691edfddb9fbd6d3b?utm_campaign=embed&utm_source=other&size=medium&display-plan=true"}/></AnimatedText>
      </div>
      <div className="absolute top-0 left-0 z-0 w-screen h-screen pointer-events-none opacity-50">
        <Canvas className="w-full h-full">
          <Sphere />
        </Canvas>
      </div>
      <div className="w-full flex">

        <Image src={"/icons/down.svg"} width={90} height={80} className="h-10 w-auto rounded-[3rem] object-cover animate-bounce" />
      </div>
    </div>
  );
};
const Card = ({title, href}) => {
  return(
    <Button onClick={() => window.location.href = href} className="rounded-2xl bg-blue-200/10 backdrop-blur-sm w-full flex items-center justify-center">
      <div className="font-semibold text-xl capitalize flex-grow">{title}</div>
      <Image src={"/icons/open.svg"} width={20} height={20} className="object-cover" />  
    </Button>
  )
}
const Sphere = () => {
  const sphereRef = useRef();
  useFrame(() => {
    sphereRef.current.rotation.y += 0.005;
    sphereRef.current.rotation.x += 0.005;
    // sphereRef.current.rotation.z += 0.005;
  });
  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5]} />
      <meshBasicMaterial wireframe />
    </mesh>
  );
};

export default VirtualTour;
