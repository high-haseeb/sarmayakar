'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedText from "./AnimatedText";

const Footer = () => {
  return (
    <div className="px-8 py-24 bg-white w-screen h-screen section" id="contact">
      <div className="w-full  h-full flex flex-col items-center justify-around">
        <AnimatedText>
          <div className="flex items-start justify-start w-full">
            <div className="text-black font-semibold text-5xl">contact us</div>
          </div>
        </AnimatedText>
        <div className="flex flex-col gap-4">
          <Booking />
          <Divider text={"or"}/>
          <Button
            className="w-full rounded-2xl"
            onClick={() => {
              window.location.href = `tel:${"03038023397"}`;
            }}
          >
            <Call />
          </Button>

          <Divider text={"or"}/>
          <Button
            className="w-full rounded-2xl"
            onClick={() => {
              window.location.href = "https://wa.me/03038023397?text=Hi";
            }}
          >
            <Chat />
          </Button>
        </div>
        {/* <Socials /> */}
      </div>
    </div>
  );
};
const Call = () => {
  return (
    <div className="text-2xl flex gap-4 items-center justify-start w-full font-semibold">
      <Image src={"/icons/call.svg"} width={30} height={30} className="object-cover stroke-black" />
      call us now
    </div>
  );
};

const Chat = () => {
  return (
    <div className="text-2xl flex gap-4 items-center justify-start w-full font-semibold">
      <Image src={"/icons/chat.svg"} width={30} height={30} className="object-cover stroke-black" />
      chat with our agent
    </div>
  );
};

const Booking = () => {
  return (
    <div className="w-full flex flex-col font-semibold gap-2">
      <div className="text-2xl flex gap-4 items-center justify-start">
        <Image src={"/icons/group-dark.svg"} width={30} height={30} className="object-cover stroke-black" />
        book a meeting
      </div>
      <Input type="text" placeholder="name" className="rounded-2xl border-black/50 border-2" />
      <Input type="tel" placeholder="phone number" className="rounded-2xl border-black/50 border-2" />
      <Input type="email" placeholder="example@gmail.com" className="rounded-2xl border-black/50 border-2" />
      <Input type="text" placeholder="write here" className="rounded-2xl border-black/50 border-2 " size="lg" />
      <Button className="bg-blue-200 rounded-2xl text-black font-semibold ">send message</Button>
    </div>
  );
};
const Socials = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href={"https://web.facebook.com/Sermayakar/?_rdc=1&_rdr"}>
        <Image src={"/icons/social/fb.svg"} width={50} height={50} className="object-cover" />
      </Link>
      <Link href={"https://web.facebook.com/Sermayakar/?_rdc=1&_rdr"}>
        <Image src={"/icons/social/ig.svg"} width={50} height={50} className="object-cover" />
      </Link>
      <Link href={"https://web.facebook.com/Sermayakar/?_rdc=1&_rdr"}>
        <Image src={"/icons/social/wa.svg"} width={50} height={50} className="object-cover" />
      </Link>
      <Link href={"https://web.facebook.com/Sermayakar/?_rdc=1&_rdr"}>
        <Image src={"/icons/social/tw.svg"} width={50} height={50} className="object-cover" />
      </Link>

      <Link href={"https://web.facebook.com/Sermayakar/?_rdc=1&_rdr"}>
        <Image src={"/icons/social/yt.svg"} width={50} height={50} className="object-cover" />
      </Link>
    </div>
  );
};

const Divider = ({ text }) => {
  return (
    <div className="flex items-center ">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && (
        <span className="mx-4 text-gray-500">{text}</span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Footer;
