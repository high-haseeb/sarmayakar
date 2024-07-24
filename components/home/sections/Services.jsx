"use client";
import { useState } from "react";
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import DotGround from "./DotGround";

const Services = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative section z-30">
      <div className="w-full h-full text-white px-8 lg:px-10 py-16 flex items-center justify-start  relative flex-col gap-10 z-50">
        <div className="text-4xl text-white font-bold">
          <span>
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600">
              Services
            </span>{" "}
            We Offer
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <ServiceCard
            imageSrc={"/icons/love.svg"}
            title={"Offer property"}
            content={
              "Discover prime properties with Sermayakar. Explore residential havens and lucrative investments tailored to your goals. Find your perfect property today."
            }
          />

          <ServiceCard
            imageSrc={"/icons/sell.svg"}
            title={"Sell property"}
            content={
              "Selling your property is seamless with Sermayakar. Our experts ensure a smooth, profitable sale, maximizing returns with personalized service. Trust us with your real estate investment."
            }
          />

          <ServiceCard
            imageSrc={"/icons/home.svg"}
            title={"Rent property"}
            content={
              "Explore rental possibilities with Sermayakar. Find cozy residences or commercial spaces with quality amenities and convenience. Let us guide you to the perfect rental property, tailored to your needs."
            }
          />
        </div>
      </div>
      <DotGround />
    </div>
  );
};
const ServiceCard = ({ imageSrc, title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <Card
      isPressable
      className="p-4 bg-white/20 backdrop-blur rounded-3xl"
      onClick={() => setShow((state) => !state)}
    >
      <CardHeader className="items-center flex-col">
        <div className="flex gap-4 items-center justify-center ">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={imageSrc}
            width={40}
          />
          <p className="text-lg uppercase font-semibold">{title}</p>
        </div>
        <div
          className={`transition-all ${show ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"} text-sm flex flex-col gap-5`}
        >
          {content}
          <Button className="bg-blue-500 rounded-2xl">learn more</Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Services;
