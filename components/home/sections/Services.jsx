"use client";
import { useState } from "react";
import { Card, CardHeader, CardBody, Image, Divider } from "@nextui-org/react";

const Services = () => {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center justify-center section relative flex-col gap-4">
      <div className="text-4xl text-white font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600">
          Services
        </span>{" "}
        We Offer
      </div>
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
  );
};
const ServiceCard = ({ imageSrc, title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <Card
      isPressable
      className="p-4 bg-white/10 rounded-3xl"
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
        <div className={`transition-all ${show ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} text-sm`}>
          {content}
        </div>
      </CardHeader>
    </Card>
  );
};

export default Services;
