"use client";
import React from "react";
import Counter from "./Counter";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import SquigglyLine from "./SquigglyLine";

const Excellence = () => {
  const router = useRouter();
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center gap-10 justify-center section relative flex-col backdrop-blur ">
      <SquigglyLine
        path={
          "m 0,0 c 11.868623,-13.602398 29.915778,-21.589749 47.964566,-21.228269 18.048789,0.361481 35.761659,9.065032 47.076126,23.1317397 C 106.35516,15.970178 111.05962,35.136963 107.5439,52.843718 104.02819,70.550473 92.358043,86.466042 76.527749,95.143094 c -9.183524,5.033756 -19.684896,7.773616 -27.91966,14.243896 -4.117382,3.23514 -7.605478,7.44696 -9.248176,12.41894 -0.821349,2.48598 -1.16867,5.13891 -0.908289,7.74409 0.260381,2.60518 1.137311,5.15938 2.620469,7.31692 2.176024,3.16545 5.6063,5.37513 9.317688,6.36546 3.711387,0.99033 7.682192,0.80865 11.389676,-0.1962 7.414967,-2.00969 13.574294,-7.10774 19.097891,-12.44726 5.523597,-5.33953 10.759311,-11.12989 17.337613,-15.09808 3.289149,-1.9841 6.903839,-3.48762 10.698189,-4.08598 3.79436,-0.59836 7.77738,-0.26103 11.29669,1.27833 3.01766,1.31993 5.62963,3.4938 7.63565,6.10615 2.00602,2.61235 3.41876,5.65381 4.31551,8.82309 1.79351,6.33855 1.53661,13.07175 0.81996,19.62006 -0.71666,6.54831 -1.87949,13.07392 -1.85174,19.66127 0.0277,6.58735 1.34922,13.37919 5.15204,18.75809 2.35164,3.32627 5.5384,5.96294 8.77994,8.43007 3.24154,2.46713 6.59714,4.82399 9.43545,7.74602 2.83831,2.92204 5.16681,6.5029 5.84517,10.51963 0.33917,2.00836 0.25277,4.10023 -0.35849,6.04315 -0.61125,1.94292 -1.7584,3.73015 -3.34172,5.01142 -2.3301,1.88559 -5.53108,2.57325 -8.47658,2.01752 -2.9455,-0.55574 -5.61309,-2.29517 -7.4855,-4.63587 -1.87242,-2.3407 -2.97143,-5.25226 -3.33711,-8.22734 -0.36569,-2.97508 -0.0189,-6.01239 0.78896,-8.89895 1.29898,-4.64139 3.8211,-8.96208 7.36416,-12.22959 3.54306,-3.26751 8.114,-5.44887 12.90759,-5.9502 4.7936,-0.50132 9.78193,0.71807 13.69235,3.53559 3.91043,2.81753 6.67214,7.24016 7.29722,12.01919 0.48254,3.68922 -0.28721,7.48811 -1.89654,10.8427 -1.60933,3.35459 -4.03162,6.28008 -6.82984,8.73226 -5.59644,4.90436 -12.56522,7.89465 -19.32231,11.01148 -6.75708,3.11682 -13.59548,6.56391 -18.56974,12.0983 -2.48713,2.7672 -4.46006,6.04048 -5.44785,9.6276 -0.9878,3.58713 -0.95313,7.49593 0.38602,10.96722 1.67973,4.35412 5.319,7.77837 9.5156,9.82007 4.19659,2.0417 8.92067,2.79955 13.58674,2.8869 9.33216,0.17469 18.64292,-2.22565 27.93217,-1.3149 6.54272,0.64147 12.91493,2.95258 18.34768,6.65446 5.43275,3.70189 9.91482,8.78689 12.90537,14.6414"
        }
        viewBox={"90 0 112.27184 297.69135"}
      />
      <div className="text-4xl text-white font-bold text-center flex flex-col items-center justify-center z-10">
        Excellence in
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600 z-10">real estate</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Stats title={"Property Sold"} target={500} plus icon={"up"} />
        <Stats title={"Happy Clients"} target={1000} plus icon={"group"} />
        <Stats title={"Easy Acess"} target={100} icon={"globe-search"} />
        <Stats title={"Documentation Provided"} target={100} icon={"document"} />
      </div>

      <Button
        className="bg-blue-200 rounded-2xl text-black font-semibold "
        onClick={() => {
          const section = document.getElementById("contact");
          section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        contact now
      </Button>
    </div>
  );
};
const Stats = ({ title, target, icon, plus = false }) => {
  return (
    <div className="flex flex-col font-bold gap-1 text-white/80 text-xl items-center justify-center w-full h-full text-center">
      <div className="flex gap-4">
        <Image alt="icon" height={40} radius="sm" src={`/icons/${icon}.svg`} width={40} />
        <Counter target={target} duration={2000} plus={plus} className="text-white text-4xl" />
      </div>
      <div className="w-2/3 z-10">{title}</div>
    </div>
  );
};

export default Excellence;
