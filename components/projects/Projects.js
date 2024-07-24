"use client"
import "./style.css"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import pic1 from "../../public/images/assets/one.jpeg"
import pic2 from "../../public/images/pearlTower/front.jpg"
import pic3 from "../../public/images/pearlTower/side.jpeg"
import pic4 from "../../public/images/pearlTower/side.jpeg"
import pic5 from "../../public/images/pearlTower/front.jpg"
import pic6 from "../../public/images/bahria/town.jpg"
import pic7 from "../../public/images/assets/two.jpeg"

import { useScroll, useTransform,motion } from "framer-motion";
import ContactCard from '../ZoomParallax/Perallex'


const Perallex = () => {
    const Contaner=useRef(null);
    const {scrollYProgress}=useScroll({
        target:Contaner,
        offset:['start start', 'end end']
    })

    const scale4=useTransform(scrollYProgress,[0,1],[1,10])



    const Picture=[
        {
            src:pic1,
            scale:scale4
        },
        {
            src:pic2,
            scale:scale4
        },{
            src:pic3,
            scale:scale4
        },{
            src:pic4,
            scale:scale4
        },{
            src:pic5,
            scale:scale4
        },{
            src:pic6,
            scale:scale4
        },{
            src:pic7,
            scale:scale4
        },
    ]
    return (
        <div className='contaner section'>
            <div className='stickyContaner'>
            {
                Picture.map(({src,scale},index)=>{
                    return <motion.div style={{scale:scale}} key={index} className="el">
                    <div  className="imgContainer">
                        <Image src={src} placeholder="blur" fill className="object-cover"/> 
                    </div>
                </motion.div>
                })
            }
                
            </div>
        </div>
    )
}

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
        <div className="flex flex-col w-screen h-auto">
            <div className="w-full min-h-screen relative text-white">
                <img src="/images/bahria/town.jpg" alt="loading" className="w-full h-screen object-cover z-0" />
                <div className="w-full absolute bottom-0 flex flex-col text-7xl font-semibold gap-2 px-8 py-16 z-20">
                    <div className="overflow-hidden">
                        <p className={`transition transform duration-500 ${translate}`}>Our</p>
                    </div>
                    <div className='overflow-hidden'>
                        <p className={`${translate_2} transition transform duration-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400`}>Projects</p>
                    </div>
                </div>
                <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10"></div>
            </div>
            <Perallex />
            <div className="w-screen h-screen bg-black"><div className="w-screen h-auto flex justify-center mt-5"><ContactCard/></div></div>
        </div>
    );
}

export default Projects;
