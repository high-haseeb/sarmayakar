import React from "react";
import Counter from "./Counter";
import { Image } from "@nextui-org/react";

const Excellence = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center gap-10 justify-start section relative flex-col backdrop-blur ">
      <div className="h-screen w-screen z-50 bg-grid-white/[0.2] absolute top-0 left-0 " />
      <div className="text-4xl text-white font-bold text-center flex flex-col items-center justify-center">
        Excellence in
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600">
          real estate
        </span>
      </div>
      {/* Radial gradient for the container to give a faded look */}

      <div className="flex flex-col items-center justify-center gap-4">
        <Stats title={"Property Sold"} target={500} plus icon={"up"} />
        <Stats title={"Happy Clients"} target={1000} plus icon={"group"} />
        <Stats title={"Easy Acess"} target={100} icon={"globe-search"} />
        <Stats
          title={"Documentation Provided"}
          target={100}
          icon={"document"}
        />
      </div>
    </div>
  );
};
const Stats = ({ title, target, icon, plus = false }) => {
  return (
    <div className="flex flex-col font-bold gap-1 text-white/80 text-xl items-center justify-center w-full h-full text-center">
      <div className="flex gap-4">
        <Image
          alt="icon"
          height={40}
          radius="sm"
          src={`/icons/${icon}.svg`}
          width={40}
        />
        <Counter
          target={target}
          duration={2000}
          plus={plus}
          className="text-white text-4xl"
        />
      </div>
      <div className="w-2/3">{title}</div>
    </div>
  );
};

export default Excellence;
