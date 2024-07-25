"use client";
import { useEffect, useState } from "react";
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import DotGround from "./DotGround";
import AnimatedText from "@/components/common/AnimatedText";

const Services = () => {
  const [open, setOpen] = useState("Offer property");
  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative section z-10  pt-10">
      <div className="w-full h-full text-white px-8 lg:px-10 py-16 flex items-center justify-start  relative flex-col gap-10 z-50">
        <div className="text-4xl text-white font-semibold">
          <span>
            <AnimatedText>
              <span className="">Services</span>
            </AnimatedText>
            <AnimatedText>we offer</AnimatedText>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <ServiceCard
            imageSrc={"/icons/love.svg"}
            title={"Offer property"}
            content={
              "Discover prime properties with Sermayakar. Explore residential havens and lucrative investments tailored to your goals. Find your perfect property today."
            }
            close={[open, setOpen]}
          />

          <ServiceCard
            imageSrc={"/icons/sell.svg"}
            title={"Sell property"}
            content={
              "Selling your property is seamless with Sermayakar. Our experts ensure a smooth, profitable sale, maximizing returns with personalized service. Trust us with your real estate investment."
            }
            close={[open, setOpen]}
          />

          <ServiceCard
            imageSrc={"/icons/home.svg"}
            title={"Rent property"}
            content={
              "Explore rental possibilities with Sermayakar. Find cozy residences or commercial spaces with quality amenities and convenience. Let us guide you to the perfect rental property, tailored to your needs."
            }
            close={[open, setOpen]}
          />
        </div>
      </div>
      <DotGround />

    </div>
  );
};
const ServiceCard = ({ imageSrc, title, content, close }) => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = close;
  useEffect(() => {
    open !== title && setShow(false);
  }, [open]);
  return (
    <Card
      isPressable
      className="p-4 bg-blue-200/10 backdrop-blur-sm rounded-3xl"
      onClick={() => {
        setShow((state) => !state);
        setOpen(title);
      }}
    >
      <CardHeader className="items-center flex-col">
        <div className="flex gap-4 items-center justify-center ">
          <Image alt="nextui logo" height={40} radius="sm" src={imageSrc} width={40} />
          <p className="text-lg uppercase font-semibold">{title}</p>
        </div>
        <div className={`transition-all ${show ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"} text-sm flex flex-col gap-5`}>
          {content}
          <Button className="bg-blue-200 rounded-2xl font-semibold text-black">learn more</Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Services;
