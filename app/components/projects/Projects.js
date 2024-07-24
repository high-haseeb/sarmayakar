"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform ,useAnimation} from "framer-motion"
import Image from 'next/image';

function Projects() {
    const [translate, setTranslate] = useState('translate-y-12 opacity-0');
    const [translate_2, setTranslate_2] = useState('translate-y-12 opacity-0');
    const delay = 200;

    useEffect(() => {
        setTimeout(() => {
            setTranslate('translate-y-0 opacity-100');
            setTimeout(() => {
                setTranslate_2('translate-y-0 opacity-100');
            }, delay);
        }, delay);
    }, []);

    return (
        <div className="flex flex-col w-full h-screen">
            {/* theme page */}
            <div className="w-full min-h-full relative text-white">
                <img src="/images/bahria/town.jpg" alt="loading" className="w-full h-full object-cover z-0" />
                <div className="w-full absolute bottom-0 flex flex-col text-7xl font-semibold gap-2 px-8 py-16 z-20">
                    <div className="overflow-hidden">
                        <p className={`transition transform duration-500 ${translate}`}>Our</p>
                    </div>
                    <div className='overflow-hidden'>
                        <p className={`${translate_2} transition transform duration-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400`}>Projects</p>
                    </div>
                </div>
                {/* <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10"></div> */}
            </div>

            {/* our projects */}
            <div className="w-screen h-auto"><HorizontalScroll /></div>
        </div>
    );
}

export default Projects;



const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);


    useEffect(()=>{
        console.log(scrollYProgress.current)
    },[scrollYProgress.current])



    const img1Ref = useRef(null);
    const img2Ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === img1Ref.current) {
                            img1Ref.current.classList.add('move');
                        }
                        if (entry.target === img2Ref.current) {
                            img2Ref.current.classList.add('move2');
                        }
                    } else {
                        if (entry.target === img1Ref.current) {
                            img1Ref.current.classList.remove('move');
                        }
                        if (entry.target === img2Ref.current) {
                            img2Ref.current.classList.remove('move2');
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (img1Ref.current) {
            observer.observe(img1Ref.current);
        }
        if (img2Ref.current) {
            observer.observe(img2Ref.current);
        }

        return () => {
            if (img1Ref.current) {
                observer.unobserve(img1Ref.current);
            }
            if (img2Ref.current) {
                observer.unobserve(img2Ref.current);
            }
        };
    }, []);

    return (
        <div className="min-h-[450vh] w-screen relative bg-white " ref={targetRef}>
             <div className='w-screen h-screen absolute z-0 bg-black'></div>
            <div className="h-screen sticky w-full top-0 flex items-center justify-start overflow-hidden ">
                <motion.div className="w-screen h-screen " style={{x}} >
                    <div className='w-full h-full  relative'>
                    <img
                        src="/images/pearlTower/side.jpeg"
                        alt="img-1"
                        className="w-[60vw] h-[70vh] object-cover transition-transform duration-1000 translate-x-[-55%]"
                        ref={img1Ref}
                    />
                    <img
                        src="/images/bahria/town.jpg"
                        alt="img-2"
                        className="w-[60vw] h-[70vh] object-cover translate-x-[65%] translate-y-[-40%]"
                        ref={img2Ref}
                    />
                    {/* Center line */}
                    <div className='w-[0.09px] min-h-screen absolute top-0 left-[32%] bg-brBlue z-20'></div>
                    {/* Text */}
                    <div className='text-10xl font-bold absolute top-[15%] left-5 text-black z-30 mix-blend-difference'>
                        Sermaykar
                    </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};










//         <div className="h-[450vh] w-full relative" ref={targetRef}>
//             <div className='w-screen h-screen absolute z-0 bg-black'></div>
//             <div className="h-screen w-full sticky top-0 flex items-center justify-start overflow-hidden">
//                 {/* now images */}
//                 <motion.div className="flex w-full relative" style={{ x }}>


//                 {/* 1st */}
//                     <div className="min-w-[80vw] bg-[red] h-screen w-screen">
//                         <img src="/images/pearlTower/side.jpeg" alt="news" className="w-[75%] h-[55vh] absolute left-[-68%] top-[9%] rounded-xl object-cover" />
//                     </div>
//                     <div className='w-[0.09px] h-[105vh] bg-brBlue absolute top-[-350%] left-[40%]'></div>
//                     <div className='flex flex-col text-4xl font-light absolute top-[-20%] left-[20%] z-50 text-white'><span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-[gold] text-5xl font-bold'>Pearl One</span><p className='flex justify-end'>Tower</p></div>
//                     <div className='text-xl font-light absolute z-20 left-[-10%] top-[2%] rotate-90 bg-clip-text text-transparent bg-gradient-to-r from-blue-600  via-yellow-400 to-blue-400'>Know More</div>
//                     <div className='text-xl font-light absolute z-20 right-[2%] bottom-[2%] rotate-[-90deg] bg-clip-text text-transparent bg-gradient-to-r from-blue-600  via-yellow-400 to-blue-400 '>scroll</div>
                    

                   
//                   {/* line 2 */}
//                    {/* <div className='w-[20rem] h-screen bg-brBlue absolute top-0 left-[-100%] z-50'></div> */}
//                    <div className='w-[0.09px] h-[105vh] bg-brBlue absolute top-[-350%] left-[130%]'></div>


// {/* 2nd img */}
//                     <div className="min-w-[80vw]">
//                         <img src="/images/bahria/town.jpg" alt="news" className="w-[75%] h-[60vh] rounded-xl object-cover absolute bottom-[5%] left-[45%]" />
//                     </div>
                  
//                     {/* 3rd */}
                    
//                     <div className="min-w-[80vw] relative">
//                         <Image src="/images/assets/WhatsApp Image 2024-07-10 at 2.14.32 PM.jpeg"  width={720} height={1080} alt="news" className="w-[100%] h-[60vh] rounded-xl object-cover mt-10 absolute bottom-[-200%] left-[-5%]" />
//                         <div className='bg-black/35 absolute'></div>
//                     </div>
//                     <div className='px-4 gap-2 flex-col absolute top-[-100%] left-[150%] w-[100vw] text-3xl font-bold flex items-center justify-center'><span className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600  via-yellow-400 to-blue-400'>Pearl One </span>Court Yard</div>


//                     <div className="min-w-[80vw]">
//                         {/* <img src="/images/pearlTower/side.jpeg" alt="news" className="w-[75%] h-[55vh] absolute left-[-68%] bottom-[-12.5%] rounded-xl object-cover" /> */}
//                     <Image src="/images/pearlTower/side.jpeg" width={720} height={1080} className="w-1/2 h-1/2 object-cover"/>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>