'use client'
import React from "react";
import Blobs from "./Blob/Blob.jsx";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/common/AnimatedText.jsx";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-24 flex items-start justify-between section relative flex-col backdrop-blur ">
      <div className="text-4xl text-white font-semibold">
        <AnimatedText>About</AnimatedText>
        <AnimatedText><span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600">
          Sermayakar
        </span></AnimatedText>
      </div>

      <div className="text-2xl text-white font-semibold">
        {"Our Vision & Values:"}
        <br />
        <div className="font-normal text-sm">
          At Sermayakar, our vision is to redefine the concept of living in
          comfort and, and our values center around excellence. We are committed
          to creating living spaces that transcend the ordinary, setting a new
          standard for luxury and comfort.
        </div>
      </div>

      <div className="text-2xl text-white font-semibold">
        {"Excellence in real estate:"}
        <br />
        <div className="font-normal text-xs">
          Sermayakar is not just a real estate it is home to effective
          investments. Here we take into account the market trends, understand
          effective investment plans and build on strong relationships with our
          clients. We believe in reliable investments and providing successful
          pay back according to the value of the property. We have made our mark
          in real estate by completing many glorious projects including ABS Mall
          and residency and Pearl One Tower. And currently our services are
          centred in our current project, ‘Pearl One Courtyard’.
        </div>
      </div>
      <Button
        className="bg-blue-200 rounded-2xl text-black font-semibold "
        onClick={() => router.push("/contact")}
      >
        contact now
      </Button>
      <Blobs />
    </div>
  );
};

export default AboutUs;
