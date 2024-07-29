"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

function Chose() {
  const [open, setOpen] = useState("Offer property");
  return (
    <div className="w-screen h-auto bg-black text-white flex flex-col gap-4 relative px-8 lg:px-10 py-16">
      <div>
        <AnimatedText>
          <div className="text-3xl font-semibold">{"Why choose"}</div>
        </AnimatedText>
        <AnimatedText>
          <div className="text-4xl font-semibold">{"sermayakar ?"}</div>
        </AnimatedText>
      </div>
      <div className="text-sm">
        When it comes to finding the perfect place to live and indulge in a luxurious shopping experience, ABS Mall & Residency stands head and
        shoulders above the rest. With an array of compelling reasons, here’s why you should choose ABS Mall & Residency
      </div>
      <div className="flex flex-col gap-2">
        <DetailCard
          imageSrc={"/icons/moon.svg"}
          title={"Sharia Compliance"}
          content={
            "At ABS Mall & Residency, ABS Developers are proud to uphold 100% Sharia compliance and a Riba-free policy. This commitment aligns with the values of their clients who seek ethical and responsible investments, ensuring peace of mind in every aspect of your home and shopping experience."
          }
          close={[open, setOpen]}
        />
        <DetailCard
          imageSrc={"/icons/luxury.svg"}
          close={[open, setOpen]}
          title={"Unparalleled Luxury"}
          content={
            "Indulge in the epitome of luxury at ABS Mall & Residency. Every aspect of development exudes elegance, from the meticulously crafted interiors to the premium finishes and upscale amenities. Experience a lifestyle that is synonymous with opulence and refinement, and elevate your living or shopping experience to new heights."
          }
        />
        <DetailCard
          imageSrc={"/icons/location.svg"}
          close={[open, setOpen]}
          title={"Prime Location"}
          content={
            "ABS Mall & Residency enjoys a prime location that offers the best of both worlds. Situated in a sought-after area, you’ll have easy access to major transportation routes, educational institutions, healthcare facilities, and commercial centers. Embrace the convenience of living in a thriving neighborhood that caters to all your lifestyle needs."
          }
        />
        <DetailCard
          imageSrc={"/icons/quality.svg"}
          close={[open, setOpen]}
          title={"Trust in Quality"}
          content={
            " ABS Mall & Residency is brought to you by ABS Developers, a reputable title known for its commitment to excellence. With a track record of delivering 16+ successful projects and 1000+ satisfied clients, they prioritize quality and customer satisfaction. Trust in our expertise and dedication to providing you with a living experience that exceeds expectations."
          }
        />
        <DetailCard
          imageSrc={"/icons/timer.svg"}
          close={[open, setOpen]}
          title={"Timely Delivery"}
          content={
            "At ABS Mall & Residency, ABS Developers understand the importance of timely delivery. With a track record of 100% on-time delivery, you can have complete confidence in our ability to fulfill their promises. They value your time and strive to ensure that you can move into your dream home or start your business within the stipulated timeframe."
          }
        />
      </div>
    </div>
  );
}
const DetailCard = ({ imageSrc, title, content, close }) => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = close;
  useEffect(() => {
    open !== title && setShow(false);
  }, [open]);
  return (
    <Card
      isPressable
      className="px-4 py-2 bg-blue-200/5 backdrop-blur-sm rounded-3xl"
      onClick={() => {
        setShow((state) => !state);
        setOpen(title);
      }}
    >
      <CardHeader className="items-start flex-col">
        <div className="flex gap-4 items-center justify-center w-full">
          <Image alt="nextui logo" height={30} radius="sm" src={imageSrc} width={30} />
          <p className="text-base font-semibold">{title}</p>
          <div className="flex-grow flex justify-end items-end">
            <Image
              alt="nextui logo"
              height={30}
              radius="sm"
              src={"/icons/dropdown.svg"}
              width={30}
              className={`${show ? "rotate-180" : "rotate-0"} transition-transform`}
            />
          </div>
        </div>
        <div className={`transition-all ${show ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"} text-sm flex flex-col gap-5 text-left`}>
          {content}
          {/* <Button className="bg-blue-200 rounded-2xl font-semibold text-black">learn more</Button> */}
        </div>
      </CardHeader>
    </Card>
  );
};

export default Chose;
