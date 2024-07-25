"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import SquigglyLine from "@/components/home/sections/SquigglyLine";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center justify-around section relative flex-col">
      <SquigglyLine
        path={
          "m 0,0 54.206145,36.250999 c 5.384896,3.601212 10.785629,7.331842 15.005738,12.24677 4.220109,4.914928 7.167106,11.016426 7.808903,17.462659 0.641798,6.446234 -1.060122,13.066679 -4.573685,18.50917 -3.513563,5.442491 -8.708909,9.650774 -14.404977,12.736328 -5.696064,3.085534 -11.889178,5.114134 -17.956686,7.383714 -6.067509,2.26958 -12.161451,4.87955 -16.985682,9.20302 -2.412115,2.16174 -4.473969,4.7502 -5.815754,7.69826 -1.341786,2.94805 -1.940902,6.26872 -1.456329,9.47131 0.484573,3.2026 2.097218,6.26793 4.631269,8.28535 1.267026,1.00871 2.750706,1.74982 4.326545,2.12343 1.57584,0.3736 3.242441,0.37632 4.811283,-0.0257 1.728046,-0.44278 3.314968,-1.36861 4.633412,-2.57023 1.318444,-1.20162 2.375003,-2.67348 3.200281,-4.25497 1.650556,-3.16298 2.374376,-6.71459 3.054834,-10.21684 0.680458,-3.50225 1.351792,-7.05724 2.912549,-10.26548 0.780379,-1.60412 1.783174,-3.11055 3.04965,-4.36682 1.266475,-1.25628 2.803254,-2.2577 4.503607,-2.79714 2.121827,-0.67315 4.451249,-0.60365 6.573235,0.069 2.121985,0.67264 4.037804,1.93146 5.597331,3.5199 3.119055,3.17689 4.756652,7.5469 5.556685,11.92652 0.800033,4.37962 0.844602,8.85722 1.250977,13.29072 0.406376,4.43351 1.210113,8.93095 3.377254,12.81999 1.875126,3.365 4.716085,6.14179 7.971089,8.20196 3.255005,2.06017 6.916812,3.42486 10.667985,4.30125 7.502345,1.75276 15.296651,1.58051 22.991371,1.96625 7.69471,0.38574 15.6048,1.41736 22.27491,5.27314 3.33505,1.92789 6.30106,4.55945 8.36222,7.81383 2.06116,3.25438 3.18211,7.14832 2.87095,10.98792 -0.35033,4.32287 -2.46509,8.34203 -5.17731,11.72638 -2.71221,3.38434 -6.02131,6.23079 -9.19968,9.1817 -3.17836,2.95092 -6.28119,6.07325 -8.44202,9.83367 -2.16083,3.76042 -3.3125,8.26552 -2.33549,12.49108 0.96421,4.17017 3.94474,7.70718 7.61473,9.90972 3.66999,2.20253 7.9781,3.16699 12.25266,3.38634 8.54913,0.4387 17.02574,-1.964 25.58526,-1.84314 13.2714,0.18739 26.30228,6.83686 34.24179,17.47309 C 210.92456,269.83941 213.59413,284.22317 210,297"
        }
        viewBox={"0 10 200.63515 210.75214"}
      />
      <div className="text-3xl font-semibold flex items-end justify-end w-full ">
        <div className="overflow-y-hidden w-full flex items-end justify-end">
          <div className="w-1/2 text-left leading-[2rem] flex flex-col items-center justify-center">
            <AnimatedText>
              Your <br />
            </AnimatedText>
            <AnimatedText>
              trusted <br />
            </AnimatedText>
            <AnimatedText>
              real estate <br />
            </AnimatedText>
            <AnimatedText>partners</AnimatedText>
          </div>
        </div>
      </div>
      <div className="text-5xl font-semibold z-10 flex items-start justify-start w-full flex-col">
        <AnimatedText>
          <div>sermayakar</div>
        </AnimatedText>
        <button className="w-full flex items-center justify-end" onClick={() => router.push("https://wa.me/03038023397?text=Hi")}>
          <div className="py-2 px-4 bg-blue-200 text-black text-sm rounded-3xl flex gap-2">
            <Image src={"/icons/call.svg"} width={20} height={20} alt="contact now" className="object-cover h-full w-auto" />
          </div>
        </button>
      </div>
      <div className="w-full flex flex-col items-end gap-4">
        <Image src={"/images/assets/one.jpeg"} width={1080} height={720} className="h-20 w-2/3 rounded-[3rem] bg-white object-cover " />
        <div className="animate-slideLeft h-20 w-2/3 ">
          <Image src={"/images/assets/two.jpeg"} width={1080} height={720} className="object-cover h-full w-full rounded-[3rem]" />
        </div>
        <Image src={"/images/pearlTower/front.jpg"} width={1080} height={720} className="h-20 w-2/3 rounded-[3rem] bg-white object-cover " />
      </div>

      <div className="w-full flex">
        <Image src={"/icons/down.svg"} width={90} height={80} className="h-10 w-auto rounded-[3rem] object-cover animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
