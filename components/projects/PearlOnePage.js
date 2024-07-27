"use client";
import { Button } from '@nextui-org/button';
import { NextUIProvider } from '@nextui-org/system';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import AnimatedText from "@/components/common/AnimatedText";
import SquigglyLine from '../home/sections/SquigglyLine';
import { useRouter } from 'next/navigation';

function PearlOnePage() {
  const [clicked, setClicked] = useState(false);
  const [services, setServices] = useState(false);
  const router=useRouter()
  useEffect(() => {
    if (clicked) {
      setServices(false);
    }
  }, [clicked]);

  useEffect(() => {
    if (services) {
      setClicked(false);
    }
  }, [services]);

  const images = [
    { src: "/images/pearlTower/front.jpg", title: "Pearl One", dis: "" },
    { src: "/images/pearlTower/pearlOne.png", title: "Luxurious Residency Luxurious", dis: "Experience the epitome of contemporary living at Pearl 1 Tower. Artistically designed 1, 2, 3, and 4-bedroom apartments offer the perfect blend of luxury and modernity. With top-notch amenities and facilities, this high-end development caters to your every need. Nestled in a prime location with convenient accessibility, Pearl 1 Tower combines tranquility with connectivity. Elevate your lifestyle with our commitment to quality, craftsmanship, and smart home technologies." },
    { src: "/images/pearlTower/Location.jpeg", title: "Site Location", dis: "Plot# 10-18, Iqbal block, Bahria Town Lahore", yes: true },
    { src: "/images/pearlTower/developers.jpeg", title: "Developers", dis: "ABS Developers, the driving force behind Pearl One Tower, stands out in the industry with a remarkable track record. With over 1 million Sq. Ft. of planned projects and 16+ successful completions, they are known for redefining excellence. Their portfolio has delighted over 1,000 clients, reflecting their commitment to 100% Riba-free and Sharia-compliant developments. Renowned for their punctuality and professionalism, ABS Developers ensures timely delivery of every project. Experience the difference with ABS Developers and join their esteemed clientele." },
  ];

  return (
    <NextUIProvider>
      <div className="flex flex-col w-full h-full bg-black text-white p-6 gap-5">
        <SquigglyLine
          path={
            "m 0,0 54.206145,36.250999 c 5.384896,3.601212 10.785629,7.331842 15.005738,12.24677 4.220109,4.914928 7.167106,11.016426 7.808903,17.462659 0.641798,6.446234 -1.060122,13.066679 -4.573685,18.50917 -3.513563,5.442491 -8.708909,9.650774 -14.404977,12.736328 -5.696064,3.085534 -11.889178,5.114134 -17.956686,7.383714 -6.067509,2.26958 -12.161451,4.87955 -16.985682,9.20302 -2.412115,2.16174 -4.473969,4.7502 -5.815754,7.69826 -1.341786,2.94805 -1.940902,6.26872 -1.456329,9.47131 0.484573,3.2026 2.097218,6.26793 4.631269,8.28535 1.267026,1.00871 2.750706,1.74982 4.326545,2.12343 1.57584,0.3736 3.242441,0.37632 4.811283,-0.0257 1.728046,-0.44278 3.314968,-1.36861 4.633412,-2.57023 1.318444,-1.20162 2.375003,-2.67348 3.200281,-4.25497 1.650556,-3.16298 2.374376,-6.71459 3.054834,-10.21684 0.680458,-3.50225 1.351792,-7.05724 2.912549,-10.26548 0.780379,-1.60412 1.783174,-3.11055 3.04965,-4.36682 1.266475,-1.25628 2.803254,-2.2577 4.503607,-2.79714 2.121827,-0.67315 4.451249,-0.60365 6.573235,0.069 2.121985,0.67264 4.037804,1.93146 5.597331,3.5199 3.119055,3.17689 4.756652,7.5469 5.556685,11.92652 0.800033,4.37962 0.844602,8.85722 1.250977,13.29072 0.406376,4.43351 1.210113,8.93095 3.377254,12.81999 1.875126,3.365 4.716085,6.14179 7.971089,8.20196 3.255005,2.06017 6.916812,3.42486 10.667985,4.30125 7.502345,1.75276 15.296651,1.58051 22.991371,1.96625 7.69471,0.38574 15.6048,1.41736 22.27491,5.27314 3.33505,1.92789 6.30106,4.55945 8.36222,7.81383 2.06116,3.25438 3.18211,7.14832 2.87095,10.98792 -0.35033,4.32287 -2.46509,8.34203 -5.17731,11.72638 -2.71221,3.38434 -6.02131,6.23079 -9.19968,9.1817 -3.17836,2.95092 -6.28119,6.07325 -8.44202,9.83367 -2.16083,3.76042 -3.3125,8.26552 -2.33549,12.49108 0.96421,4.17017 3.94474,7.70718 7.61473,9.90972 3.66999,2.20253 7.9781,3.16699 12.25266,3.38634 8.54913,0.4387 17.02574,-1.964 25.58526,-1.84314 13.2714,0.18739 26.30228,6.83686 34.24179,17.47309 C 210.92456,269.83941 213.59413,284.22317 210,297"
          }
          viewBox={"0 10 200.63515 210.75214"}
        />
        <div className="font-bold text-5xl py-8 z-50 flex">PEARL 1 TOWER <Button className="flex-grow  rounded-full" onClick={()=>router.push("/projects/")}><img src="/icons/down.svg" className='w-8 h-8 rotate-90'/></Button></div>
        <div className="flex flex-col gap-5 relative mt-2">
          <AnimatedText>
            <p>Welcome to Pearl One Tower, where grandeur meets luxury in the heart of Bahria Town Lahore.</p>
          </AnimatedText>
          {clicked && (
            <>
              <div className="overflow-y-scroll text-sm h-[15rem] p-3 w-full">
                <p className='w-[80%] p-1'>
                  <span className='text-lg font-semibold'>This prestigious</span> residential project is a testament to opulence and exclusivity, spanning over an impressive 100,000 Sq. Ft on the main boulevard, Jinnah Avenue. Discover a truly exceptional living experience in one of the most sought-after residential complexes in the area. Indulge in the elegance of modern apartments, meticulously designed with top-quality fittings and fixtures. Each residence offers breathtaking views of the iconic Grand Mosque and the magnificent Eiffel Tower, providing a picturesque backdrop to your everyday life. Situated in a prime location, Pearl One Tower offers easy access to the city’s major arteries, ensuring seamless connectivity to key destinations. This presents an ideal investment opportunity that promises long-term benefits, making it a smart choice for discerning investors.
                </p>
              </div>
              <img src='/icons/down.svg' alt='scroll down' className='w-10 h-10 bottom-[25%] right-5 absolute animate-bounce object-cover' />
            </>
          )}
          <Button
            className="bg-brBlue rounded-xl font-bold mt-2 flex justify-center items-center w-36 p-2"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? "LESS" : "READ MORE"}
          </Button>
        </div>
        
        <div className="font-bold mt-7 text-lg relative">
          <AnimatedText>
            AMENITIES & FACILITIES
          </AnimatedText>
        </div>
        <div className={`flex flex-col text-white text-sm gap-1 font-light mt-2 ${services ? "h-[30rem]" : "h-auto"} overflow-y-scroll relative`}>
          <AnimatedText>
            <p>Card access to the building</p>
            <p>Private residential lobby</p>
            <p>Complete automation of building</p>
          </AnimatedText>
          {services && (
            <>
              <p>Smart elevators</p>
              <p>Largest top roof garden in BTL</p>
              <p>Mosque</p>
              <p>24/7 Room service</p>
              <p>Grocery delivery</p>
              <p>Laundry service</p>
              <p>Public address system</p>
              <p>CCTV & security backup</p>
              <p>Firefighting System</p>
              <p>Secure Private Parking</p>
              <p>Rent-a-car facilities</p>
              <img src='/icons/down.svg' alt='scroll down' className='w-10 h-10 bottom-[12%] right-10 absolute animate-bounce object-cover' />
            </>
          )}
        </div>
        <Button
          className="bg-brBlue rounded-xl font-bold mt-2 flex justify-center items-center text-white w-36 p-2"
          onClick={() => setServices(!services)}
        >
          {services ? "LESS" : "READ MORE"}
        </Button>

        <ImageGallery images={images} />
        <div className="min-h-[10vh] w-screen">

        </div>
      </div>
    </NextUIProvider>
  );
}

export default PearlOnePage;

const ImageGallery = ({ images }) => {
  return (
    <div className="flex flex-col gap-10 mt-20">
      {images.map((img, index) => (
        <ImageItem key={index} src={img.src} title={img.title} dis={img.dis} yes={img.yes} />
      ))}
    </div>
  );
};

const ImageItem = ({ src, title, dis, yes }) => {
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
      <motion.div className='relative'>
        {yes && (
          <a target='_blank' href='https://www.google.com/maps/place/95GP%2BP28,+Sector+C+Commercial+Area+Sector+C+Bahria+Town,+Lahore,+Punjab/@31.379499,74.185851,14z/data=!4m5!3m4!1s0x3918ff8efbab3c69:0x75ec969d8e728499!8m2!3d31.3767875!4d74.1850781?hl=en-PK&entry=ttu' className='absolute text-3xl w-[90%] flex items-center justify-center text-white p-2 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            View On Map
            <img src='/icons/location-svgrepo-com.svg' className="w-8 h-8 ml-2" />
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
      <AnimatedText>
        <div className="text-2xl font-semibold">{title}</div>
      </AnimatedText>
      <AnimatedText>
        <div className='text-sm font-light pr-2'>
          {dis}
        </div>
      </AnimatedText>
    </div>
  );
};
