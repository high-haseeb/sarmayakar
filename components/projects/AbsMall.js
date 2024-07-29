"use client";
import { NextUIProvider } from "@nextui-org/system";
import React, { useEffect,  useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import Back from "./Back";
import Image from "next/image";

function AbsMall() {
  const facilities = [
    { title: "project size", target: "160k sq.ft", icon: "full" },
    { title: "height", target: "120 ft.", icon: "height" },
    { title: "residential units", target: "140+", icon: "houses" },
    { title: "commercial units", target: "160+", icon: "shop" },
    { title: "aparments", target: "100+", icon: "apartment" },
    { title: "people capacity mosque", target: "300+", icon: "mosque" },
  ];
  const amanities = [
    "Modern & Natural Environment",
    "Tech System",
    "Hyper Mall",
    "Food Courts",
    "Fully Automated Complex",
    "Infinity Pool",
    "Gym",
    "High Speed Elevators",
    "24/7 Grocery Service",
    "24/7 Room Service",
    "Healthcare Services",
    "Food Court",
    "Roof Top Garden",
    "Maintenance & Management Services",
    "Elegant Lobby and Reception Area Parking",
    "Modern Security",
    "2 Min for Ring Road & Raiwind Road",
  ];

  const landmarks = [
    "Main entrance of Bahria Town Lahore",
    "4 min from Ring",
    "30 mins from Airport",
    "1 min from Talwar Chowk",
    "3 mins from Grand Jamia Mosque",
    "1 min from Beaconhouse National University",
  ];
  return (
    <NextUIProvider>
      <Back />

      <div className="flex flex-col w-full h-full bg-black text-white py-16 pt-28 px-8 gap-8 font-normal">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-5xl">
            <AnimatedText>ABS MALL & </AnimatedText>
            <AnimatedText>RESIDENCY</AnimatedText>
          </div>
          <ImageItem src={"/images/abs/ABS-Mall-Residency-2.jpg"} />
          <div className="leading-snug">
            ABS Mall & Residency presents an awe-inspiring architectural masterpiece that flawlessly combines a world-class shopping destination with
            an exquisite residential sanctuary.
          </div>

          <ImageItem src={"/images/abs/abs-mall-overview.webp"} />
        </div>
        <div></div>

        <div className="flex flex-col gap-4">
          <AnimatedText>
            <div className="font-semibold  text-3xl">AMENITIES & FACILITIES</div>
          </AnimatedText>
          <div className="text-sm">
            Prepare to be captivated by its allure and immerse yourself in an unparalleled lifestyle experience. This masterpiece G+9 Residential and
            Commercial Complex, spanning over an impressive area of approximately 160,000 Sq. Ft. Embrace the convenience of having a multitude of
            amenities and services right at your doorstep. From state-of-the-art fitness centers and recreational facilities to gourmet dining and
            shopping, everything you desire is within reach. Experience a seamless blend of comfort, convenience, and sophistication in every aspect
            of your daily life at a prime location.
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {facilities.map((facility) => (
              <Stats {...facility} />
            ))}
            <div className="font-semibold text-xl">and many more</div>
          </div>
        </div>

        <ImageItem src={"/images/abs/Atrium-scaled-1.jpg"} />

        <AnimatedText>
          <div className="font-semibold  text-3xl">Luxuries</div>
        </AnimatedText>
        <div className="flex flex-col gap-1 font-normal text-base text-white">
          {amanities.map((amanity) => (
            <div className="flex items-center justify-start gap-4">
              <div className="bg-white w-2 h-2 rounded-full" />
              {amanity}
            </div>
          ))}
        </div>

        <AnimatedText>
          <div className="font-semibold  text-3xl">Site location</div>
        </AnimatedText>
        <ImageItem src={"/images/pearlTower/Location.jpeg"} yes />

        <div className="flex flex-col gap-1 font-normal text-base text-white">
          {landmarks.map((landmark) => (
            <div className="flex items-center justify-start gap-4">
              <div className="bg-white w-2 h-2 rounded-full" />
              {landmark}
            </div>
          ))}
        </div>

        <AnimatedText>
          <div className="font-semibold  text-3xl">Developers</div>
        </AnimatedText>
        <Image alt="icon" height={100} radius="sm" src={`/logos/abs.webp`} width={100}></Image>
        <div className="text-xs">
          The developer of ABS Mall & Residency is ABS Developers, a best real estate development company. With a rich portfolio of planned projects
          spanning over 1 million+ Sq. Ft, they have established their selves as leaders in delivering exceptional developments. With a proven track
          record of successfully completing 16+ projects. Their focus on client satisfaction has resulted in 1000+ delighted clients who have
          entrusted them with their dreams of owning a perfect home or commercial space. They are driven by principles that align with their clients’
          values, as they proudly maintain a 100% Riba-free policy and ensure 100% Sharia compliance. With ABS Developers, you can trust that their
          projects are delivered on time, reflecting dedication to punctuality and professionalism. Join the ranks of satisfied clients who have
          experienced the ABS Developers difference and let them transform your vision into reality, providing you with a space that exceeds your
          expectations and fulfills your aspirations.
        </div>
      </div>
    </NextUIProvider>
  );
}

const ImageItem = ({ src, yes }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        scale: 0.8,
        opacity: 0.5,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center z-10">
      <motion.div className="relative">
        {yes && (
          <a
            target="_blank"
            href="https://www.google.com/maps/place/ABS+Mall+%26+Residency/@31.3700588,74.1842877,15z/data=!3m1!4b1!4m6!3m5!1s0x3918ff841c55299f:0x3652e6fd2b6a3c98!8m2!3d31.3700601!4d74.2027418!16s%2Fg%2F11t7j5fk1x?entry=ttu"
            className="absolute text-3xl w-[90%] flex items-center justify-center text-white p-2 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            View On Map
            <img src="/icons/location-svgrepo-com.svg" className="w-8 h-8 ml-2" />
          </a>
        )}
        <motion.img
          ref={ref}
          src={src}
          alt="Gallery image"
          className="w-full object-cover rounded-3xl"
          animate={controls}
          initial={{ scale: 0.8, opacity: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

const Stats = ({ title, target, icon }) => {
  return (
    <div className="flex flex-col font-semibold gap-0 text-white/80 text-xl items-center justify-center w-full h-full text-center">
      <div className="flex gap-2">
        <Image alt="icon" height={30} radius="sm" src={`/icons/${icon}.svg`} width={30}></Image>
        <span className="text-4xl font-semibold text-white">{target}</span>
      </div>
      <div className="">{title}</div>
    </div>
  );
};

export default AbsMall;
