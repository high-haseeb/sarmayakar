'use client'
import React, { useState } from 'react';
import { NextUIProvider, Button } from '@nextui-org/react';

function PeralOne() {
    const [expend,setExpend]=useState(false);
    return (
        <NextUIProvider>
            <div className='w-screen h-auto flex px-6 flex-col text-white overflow-hidden bg-black'>
                <div className='font-bold text-5xl py-16'>PEARL 1 TOWER</div>
                <div className='flex flex-col gap-10'>
                    <div>Welcome to Pearl One Tower, where grandeur meets luxury in the heart of Bahria Town Lahore.</div>
                    <div className={`overflow-hidden ${expend ? "h-32":"h-12"} transition-all ease-linear duration-500 overflow-y-scroll`} >Discover a truly exceptional living experience in one of the most sought-after residential complexes in the area. Indulge in the elegance of modern apartments, meticulously designed with top-quality fittings and fixtures. Each residence offers breathtaking views of the iconic Grand Mosque and the magnificent Eiffel Tower, providing a picturesque backdrop to your everyday life. Situated in a prime location, Pearl One Tower offers easy access to the city’s major arteries, ensuring seamless connectivity to key destinations. This presents an ideal investment opportunity that promises long-term benefits, making it a smart choice for discerning investors.</div>
                    <Button color="primary" className='bg-[blue] w-1/2 rounded-xl' onClick={()=>setExpend(!expend)}>
                        READ MORE
                    </Button>
                </div>
            </div>
        </NextUIProvider>
    )
}

export default PeralOne;
