"use client";
import AnimatedText from "@/components/common/AnimatedText";
import BackgroundImage from "@/components/common/BackgroundImage";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import FloatingSphere from "@/components/home/sections/FloatingSphere";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  return (

    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center justify-around section relative flex-col">
      {/* <BackgroundImage src={'/images/one-removebg-preview.png'}/> */}
      {/* <BackgroundImage src={'/images/two-removebg-preview.png'}/> */}
      <div className="text-3xl font-semibold flex items-end justify-end w-full ">
        <div className="w-1/2 text-left leading-[2rem]">Your trusted real estate partners</div>
      </div>
      <div className="text-5xl font-semibold z-10 flex items-start justify-start w-full flex-col">
        <div>sermayakar</div>
        {/* <div className="font-normal text-sm leading-tight w-1/2"> */}
        {/*   Welcome to Sermayakar Real Estate and Investment Management, where */}
        {/*   opportunities abound, and dreams find a home. Where we offer */}
        {/*   comprehensive solutions for your property needs. */}
        {/* </div> */}
      </div>
      <div className="w-full flex flex-col items-end gap-4">
        <Image src={'/images/assets/one.jpeg'} width={1080} height={720} className="h-20 w-2/3 rounded-[3rem] bg-white object-cover" />
        <Image src={'/images/assets/two.jpeg'} width={1080} height={720} className="h-20 w-2/3 rounded-[3rem] bg-white object-cover mr-10" />
        <Image src={'/images/pearlTower/front.jpg'} width={1080} height={720} className="h-20 w-2/3 rounded-[3rem] bg-white object-cover " />
      </div>
    </div>
  );
};

export default Hero;
