import Hero from "@/components/home/sections/Hero";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="parent">
        <Hero />
      </div>
    </NextUIProvider>
  );
}
