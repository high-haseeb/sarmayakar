import React from 'react'
import {DropDown_1} from "../common/DropDown"
import SquigglyLine from '../home/sections/SquigglyLine'

function Chose() {


    let path = "m 400,0 ";  // Start from the top right
    let x = 400;
    const step = 40;
    const height = 300;
    for (let i = 0; i < 10; i++) {
      let y1 = Math.random() * height;
      let y2 = Math.random() * height;
      x -= step;
      path += `C ${x},${y1} ${x - step / 2},${y2} ${x - step},300 `;
      x -= step;
    }
    path += `L 0,300`; 
    

  return (
    <div className='w-screen h-auto bg-black text-white flex flex-col px-5 gap-4 relative' >
         <SquigglyLine
                    path={
                        path
                    }
                    viewBox={"0 10 200.63515 210.75214"}
                />
        <div className='text-2xl font-bold mt-24 w-[80%]'>
        WHY CHOOSE ABS MALL & RESIDENCY
        </div>
        <div>
        When it comes to finding the perfect place to live and indulge in a luxurious shopping experience, ABS Mall & Residency stands head and shoulders above the rest. With an array of compelling reasons, here’s why you should choose ABS Mall & Residency
        </div>
        <div className='flex flex-col'>
            <DropDown_1 name={"Sharia Compliance"} opt1={"At ABS Mall & Residency, ABS Developers are proud to uphold 100% Sharia compliance and a Riba-free policy. This commitment aligns with the values of their clients who seek ethical and responsible investments, ensuring peace of mind in every aspect of your home and shopping experience."}/>
            <DropDown_1 name={"Unparalleled Luxury"} opt1={"Indulge in the epitome of luxury at ABS Mall & Residency. Every aspect of development exudes elegance, from the meticulously crafted interiors to the premium finishes and upscale amenities. Experience a lifestyle that is synonymous with opulence and refinement, and elevate your living or shopping experience to new heights."}/>
            <DropDown_1 name={"Prime Location"} opt1={"ABS Mall & Residency enjoys a prime location that offers the best of both worlds. Situated in a sought-after area, you’ll have easy access to major transportation routes, educational institutions, healthcare facilities, and commercial centers. Embrace the convenience of living in a thriving neighborhood that caters to all your lifestyle needs."}/>
            <DropDown_1 name={"Trust in Quality"} opt1={" ABS Mall & Residency is brought to you by ABS Developers, a reputable name known for its commitment to excellence. With a track record of delivering 16+ successful projects and 1000+ satisfied clients, they prioritize quality and customer satisfaction. Trust in our expertise and dedication to providing you with a living experience that exceeds expectations."}/>
            <DropDown_1 name={"Commitment to Timely Delivery"} opt1={"At ABS Mall & Residency, ABS Developers understand the importance of timely delivery. With a track record of 100% on-time delivery, you can have complete confidence in our ability to fulfill their promises. They value your time and strive to ensure that you can move into your dream home or start your business within the stipulated timeframe."}/>
        </div>
    </div>
  )
}

export default Chose



