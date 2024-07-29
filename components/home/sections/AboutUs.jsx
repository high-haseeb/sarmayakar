"use client";
import React from "react";
import Blobs from "./Blob/Blob.jsx";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/common/AnimatedText.jsx";

const AboutUs = () => {
  const router = useRouter();
  return (
      <div className="w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-24 flex items-start justify-between section relative flex-col backdrop-blur z-20" id="about">
        <div className="text-4xl text-white font-semibold z-30">
          <AnimatedText>About Us</AnimatedText>
        </div>
        <YouTubeEmbed videoId={"HUhTGCbWruE"} />
        <div className="text-xl text-white font-semibold z-30">
          {"Our Vision & Values:"}
          <br />
          <div className="font-normal text-xs">
            At Sermayakar, our vision is to redefine the concept of living in comfort and, and our values center around excellence. We are committed
            to creating living spaces that transcend the ordinary, setting a new standard for luxury and comfort.
          </div>
        </div>

        <div className="text-xl text-white font-semibold z-30">
          {"Excellence in real estate:"}
          <br />
          <div className="font-normal text-xs">
            Sermayakar is more than real estate—it's about smart investments. We analyze market trends, create solid investment plans, and build
            strong client relationships. Our success includes projects like ABS Mall and Pearl One Tower, with our current focus on Pearl One
            Courtyard.
          </div>
        </div>
      <Blobs />
      <div className="w-screen bg-gradient-to-t from-black to-transparent h-1/3 absolute bottom-0 left-0 z-20"></div>
      <div className="w-screen bg-gradient-to-b from-black to-transparent h-1/3 absolute top-0 left-0 z-20"></div>
      </div>
  );
};

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="youtube-embed w-full rounded-3xl z-30">
      <video controls className="w-full h-auto rounded-3xl" src="/videos/yt.mp4" type="video/mp4"></video>
    </div>
  );
};

export default AboutUs;
