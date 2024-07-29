import React from 'react'
import {DropDown_1} from "../common/DropDown"
import SquigglyLine from '../home/sections/SquigglyLine'

function Chose() {


    
  return (
    <div className='w-screen h-auto bg-black text-white flex flex-col px-5 gap-4 relative' >
         <SquigglyLine
                    path={
                        "m 210,297 54.206145,36.250999 c 5.384896,3.601212 10.785629,7.331842 15.005738,12.24677 4.220109,4.914928 7.167106,11.016426 7.808903,17.462659 0.641798,6.446234 -1.060122,13.066679 -4.573685,18.50917 -3.513563,5.442491 -8.708909,9.650774 -14.404977,12.736328 -5.696064,3.085534 -11.889178,5.114134 -17.956686,7.383714 -6.067509,2.26958 -12.161451,4.87955 -16.985682,9.20302 -2.412115,2.16174 -4.473969,4.7502 -5.815754,7.69826 -1.341786,2.94805 -1.940902,6.26872 -1.456329,9.47131 0.484573,3.2026 2.097218,6.26793 4.631269,8.28535 1.267026,1.00871 2.750706,1.74982 4.326545,2.12343 1.57584,0.3736 3.242441,0.37632 4.811283,-0.0257 1.728046,-0.44278 3.314968,-1.36861 4.633412,-2.57023 1.318444,-1.20162 2.375003,-2.67348 3.200281,-4.25497 1.650556,-3.16298 2.374376,-6.71459 3.054834,-10.21684 0.680458,-3.50225 1.351792,-7.05724 2.912549,-10.26548 0.780379,-1.60412 1.783174,-3.11055 3.04965,-4.36682 1.266475,-1.25628 2.803254,-2.2577 4.503607,-2.79714 2.121827,-0.67315 4.451249,-0.60365 6.573235,0.069 2.121985,0.67264 4.037804,1.93146 5.597331,3.5199 3.119055,3.17689 4.756652,7.5469 5.556685,11.92652 0.800033,4.37962 0.844602,8.85722 1.250977,13.29072 0.406376,4.43351 1.210113,8.93095 3.377254,12.81999 1.875126,3.365 4.716085,6.14179 7.971089,8.20196 3.255005,2.06017 6.916812,3.42486 10.667985,4.30125 7.502345,1.75276 15.296651,1.58051 22.991371,1.96625 7.69471,0.38574 15.6048,1.41736 22.27491,5.27314 3.33505,1.92789 6.30106,4.55945 8.36222,7.81383 2.06116,3.25438 3.18211,7.14832 2.87095,10.98792 -0.35033,4.32287 -2.46509,8.34203 -5.17731,11.72638 -2.71221,3.38434 -6.02131,6.23079 -9.19968,9.1817 -3.17836,2.95092 -6.28119,6.07325 -8.44202,9.83367 -2.16083,3.76042 -3.3125,8.26552 -2.33549,12.49108 0.96421,4.17017 3.94474,7.70718 7.61473,9.90972 3.66999,2.20253 7.9781,3.16699 12.25266,3.38634 8.54913,0.4387 17.02574,-1.964 25.58526,-1.84314 13.2714,0.18739 26.30228,6.83686 34.24179,17.47309 C 210.92456,269.83941 213.59413,284.22317 "
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



