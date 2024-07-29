"use client";
import React from "react";
import AnimatedText from "./AnimatedText";
import Draggable from "react-draggable";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const Testimonial = () => {
  const cards = [
    {
      id: 1,
      name: "Malik Riaz Hussain",
      review:
        "I came across Sermayakar when I was looking for a side hustle and that too in a safe and reliable way. Investing with them was one of the best decisions, as it has helped me to grow my capital and understand lucrative investment options. Their attention to each detail and dynamic insight is what makes them different from others. I trust them and totally recommend them to others looking for similar options.",
      imageUrl: "/dp/malik.jpg",
    },
    {
      id: 2,
      name: "Nawaz Shareef",
      review:
        "Outstanding client relations and services, in addition to their promising plans. When I moved to Pakistan, I had so many things in my mind regarding the ongoing situation of the economy over here. But the people in Sermayakar’s team guided me to take each step for investing in real estate in Lahore. These safe investments have been my beacon of hope in becoming economically stable. ",
      imageUrl: "/dp/mian.jpg",
    },
    {
      id: 3,
      name: "Mukesh Ambani",
      review:
        "I came across Sermayakar when I was looking for a side hustle and that too in a safe and reliable way. Investing with them was one of the best decisions, as it has helped me to grow my capital and understand lucrative investment options. Their attention to each detail and dynamic insight is what makes them different from others. I trust them and totally recommend them to others looking for similar options.",
      imageUrl: "/dp/ambani.jpg",
    },

    {
      id: 1,
      name: "Malik Riaz Hussain",
      review:
        "I came across Sermayakar when I was looking for a side hustle and that too in a safe and reliable way. Investing with them was one of the best decisions, as it has helped me to grow my capital and understand lucrative investment options. Their attention to each detail and dynamic insight is what makes them different from others. I trust them and totally recommend them to others looking for similar options.",
      imageUrl: "/dp/malik.jpg",
    },
    {
      id: 2,
      name: "Nawaz Shareef",
      review:
        "Outstanding client relations and services, in addition to their promising plans. When I moved to Pakistan, I had so many things in my mind regarding the ongoing situation of the economy over here. But the people in Sermayakar’s team guided me to take each step for investing in real estate in Lahore. These safe investments have been my beacon of hope in becoming economically stable. ",
      imageUrl: "/dp/mian.jpg",
    },
    {
      id: 3,
      name: "Mukesh Ambani",
      review:
        "I came across Sermayakar when I was looking for a side hustle and that too in a safe and reliable way. Investing with them was one of the best decisions, as it has helped me to grow my capital and understand lucrative investment options. Their attention to each detail and dynamic insight is what makes them different from others. I trust them and totally recommend them to others looking for similar options.",
      imageUrl: "/dp/ambani.jpg",
    },
  ];

  return (
    <div className="w-screen h-auto overflow-hidden bg-black text-white px-8 lg:px-10 py-24 flex items-start justify-start section relative flex-col backdrop-blur z-20 gap-8">
      <div className="font-semibold text-3xl">
        <AnimatedText>What people</AnimatedText>
        <AnimatedText>Say</AnimatedText>
      </div>

      <Draggable axis="x">
        <div className="flex space-x-4">
          {cards.map((card) => (
            <div>
              <User name={card.name} review={card.review} imageUrl={card.imageUrl} />
            </div>
          ))}
        </div>
      </Draggable>
    </div>
  );
};

function User({ name, review, imageUrl }) {
  return (
    <Card className="py-4 w-[300px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex gap-2 items-center justify-center">
          <Image alt="Card background" className="object-cover rounded-full" src={imageUrl} width={40} height={40} />
          <h4 className="font-bold text-large">{name}</h4>
          <Image alt="Card background" className="object-cover rounded-full" src={"/icons/verify.svg"} width={20} height={20} />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-white px-4">
        <small className="">{review}</small>
      </CardBody>
    </Card>
  );
}

export default Testimonial;
