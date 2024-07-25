import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { NeonGradientCard } from './NeonCard.js';
import GradualSpacing from "./TextAnimation.js";

function Cards({ src, name, dis = "", isActive, onClick }) {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-[75%] h-[35vh] bg-red-500 rounded-xl transition-transform duration-500 mt-10 ${
        inView ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
      }`}
    > 
      <NeonGradientCard className='w-full h-full relative flex items-center'>
        <img src={src} alt="img" className='object-cover w-full h-full rounded-xl' />
        <div className='flex justify-start mt-1'>
          {inView && (<GradualSpacing text={dis} className={'text-[8px] font-bold'} />)}
        </div>
        <div className='text-xl font-light flex items-center gap-3'> 
          <img src="/icons/arrow-sm-right-svgrepo-com.svg" alt="icon" className='w6 h-6 object-cover' />
          <div 
            className={`transition-transform ease-in-out duration-500 ${isActive ? 'translate-x-10' : 'translate-x-0'}`}
            onClick={onClick}
          >
            {name}
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
}

export default Cards;
