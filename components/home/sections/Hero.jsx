"use client";
import AnimatedText from "@/components/common/AnimatedText";
import BackgroundImage from "@/components/common/BackgroundImage";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="bg-black/50 w-screen h-screen overflow-hidden text-white px-8 lg:px-10 py-16 flex items-center justify-center section relative">
      <BackgroundImage src={"/images/bahria/town.jpg"} />
      <div className="flex flex-col gap-4 text-center items-center justify-center">
        <AnimatedText>
          <div className="text-5xl lg:text-8xl font-bold tracking-tight ">
            Your trusted
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-600">
              real estate
              <br />
            </span>
            partners
          </div>
        </AnimatedText>
        <p className="text-xs w-3/4">
          Welcome to Sermayakar Real Estate and Investment Management, where
          opportunities abound, and dreams find a home. Where we offer
          comprehensive solutions for your property needs.
        </p>
        <Button
          className="bg-blue-500 rounded-2xl"
          onClick={() => router.push("/contact")}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};
export default Hero;
