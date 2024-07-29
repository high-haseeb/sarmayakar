"use client";
import { Button } from '@nextui-org/button';
import { NextUIProvider } from '@nextui-org/system';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import AnimatedText from "@/components/common/AnimatedText";
import SquigglyLine from '../home/sections/SquigglyLine';
import { useRouter } from 'next/navigation';

function Courtyard() {
    const [clicked, setClicked] = useState(false);
    const [services, setServices] = useState(false);
    const router = useRouter();

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
        { src: "/images/assets/one.jpeg", title: "Pearl One Courtyard", dis: "" },
        { src: "/images/pearlTower/pearlOne.png", title: "Apartment Size", dis: "At Pearl One Courtyard we have different options developed with great craftsmanship, in both commercial and residential categories we are offering different options. Our apartments include 1 bed apartments|500 Sq. Ft, 2 Bed apartments| 1000 Sq. Ft and 3 Bed apartments| 1900 Sq. Ft. It includes a beautiful building elevation including Living room, purposefully built Kitchen, well-structured Bed rooms and Bathrooms." },
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
                <div className="font-bold text-5xl py-8 z-50 flex">Pearl One Courtyard<Button className="flex-grow  rounded-full" onClick={() => router.push("/projects/")}><img src="/icons/down.svg" className='w-8 h-8 rotate-90' /></Button></div>
                <div className="flex flex-col gap-5 relative mt-2">
                    <AnimatedText>
                        <p>At Sermayakar, we envision Pearl One Courtyard as more than a real estate project, it is a mark of our commitment to crafting exceptional living spaces.</p>
                    </AnimatedText>
                    {clicked && (
                        <>
                            <div className="overflow-y-scroll text-sm h-[15rem] p-3 w-full">
                                <p className='w-[80%] p-1'>
                                    <span className='text-xl font-semibold'>Our vision</span>  is to redefine luxury and comfort in Bahria Town, Lahore, through Pearl One Courtyard, which is a harmonious blend of modern aesthetics with
                                    300+ ft Height, sustainable design, and community centered living including 40+ Amenities. It includes 15 lifts, double basement parking, Sauna], SPA and an in house GYM. Now available at prelaunch rates we want to create an enclave where residents experience the epitome of sophistication, surrounded by a vibrant and inclusive environment. Pearl One Courtyard stands as a symbol of our dedication to transforming dreams, offering both residential and commercial spaces. Moreover, it is elevating your financial investments with its secure 30 months payment plan and possession within 24 months setting a new standard for excellence in the real estate industry.
                                </p>
                            </div>
                            <img src='/icons/down.svg' alt='scroll down' className='w-10 h-10 bottom-[25%] right-5 absolute animate-bounce object-cover' />
                        </>
                    )}
                    <div className='w-[90vw] justify-end flex'>
                    <Button
                        className="bg-brBlue rounded-xl font-bold mt-2 flex justify-center items-center w-36 p-2"
                        onClick={() => setClicked(!clicked)}
                    >
                        {clicked ? "LESS" : "READ MORE"}
                    </Button>
                    </div>
                </div>

                <div className="font-bold mt-3 text-lg relative">
                    <AnimatedText>
                        <div className='text-2xl'> Payment Plan
                        </div>
                    </AnimatedText>
                </div>
                <div className='flex flex-col'>
                    <PaymentPlan name={"1 Bedroom"} opt1={"Appartment  500 Sq. Ft"} opt2={"Down payment 1200,000"} opt3={"Every month: 75,000 x 25"} opt4={"On possession: 925,000"} />
                    <PaymentPlan name={"2 Bedroom"} opt1={"Appartment  1000 Sq. Ft"} opt2={"Down payment 4,000,000"} opt3={"Every month: 400,000 x 25"} opt4={"On possession: 2,000,000"} />
                    <PaymentPlan name={"3 Bedroom"} opt1={"Appartment  1900 Sq. Ft"} opt2={"Down payment 1200,000"} opt3={"Every month: 2,000,000"} opt4={"On possession: 4,500,000"} />
                </div>

                {/* in addition */}
                <div className='flex flex-col'>
                    <AnimatedText>
                        <div className='text-2xl font-bold mb-5'> In Addition
                        </div>
                    </AnimatedText>
                    <PaymentPlan name={"First Floor Outlet | 300Sq ft"} opt1={"Appartment  300 Sq. Ft"} opt2={"Down payment 2,000,000"} opt3={"Every month: 75,000 x 25"} opt4={"On possession: 1,000,000"} />
                    <PaymentPlan name={"First Floor Outlet | 600Sq ft"} opt1={"Appartment  600 Sq. Ft"} opt2={"Down payment 3,000,000"} opt3={"Every month: 300,000 x 25"} opt4={"On possession: 2,000,000"} />

                </div>

                <ImageGallery images={images} />
                <div className="min-h-[10vh] w-screen">

                </div>
            </div>
        </NextUIProvider>
    );
}

export default Courtyard;

const PaymentPlan = ({ name, opt1, opt2, opt3, opt4 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-[98%] z-50'>
            <div
                className='h-14 rounded-xl glassmorphism flex items-center p-2 cursor-pointer'
                onClick={handleToggle}
            >
                <div className='font-light text-xl'>{name}</div>
                <div className='flex flex-grow justify-end'>
                    <img
                        src="/icons/add-svgrepo-com.svg"
                        alt="add"
                        className={`w-8 h-8 object-cover transform transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    />
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} mt-1 mb-1 p-3 bg-white bg-opacity-80 rounded-xl text-black`}
            >
                <div className='text-lg font-medium'>{opt1}</div>
                <div className='text-lg font-medium'>{opt2}</div>
                <div className='text-lg font-medium'>{opt3}</div>
                <div className='text-lg font-medium'>{opt4}</div>
            </div>
        </div>
    );
};

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
                    <a target='_blank' href='https://www.google.com/maps/place/Pearl+One+-+Courtyard/@31.3439385,74.1703628,17z/data=!3m1!4b1!4m6!3m5!1s0x3919055a136df471:0xff4362704d0f0697!8m2!3d31.3439385!4d74.1729377!16s%2Fg%2F11vf59p0pp?entry=ttu' className='absolute text-3xl w-[90%] flex items-center justify-center text-white p-2 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
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
