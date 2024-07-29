"use client";
import Image from "next/image";
import { useState } from "react";
import SquigglyLine from "../home/sections/SquigglyLine";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

const Navbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setSideMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-10 left-0 w-full h-10 z-50 px-8">
        <div className="w-full h-full flex items-center justify-between ">
          <button onClick={() => setSideMenuOpen((state) => !state)}>
            {sideMenuOpen ? (
              <Image src="/icons/close.svg" width={50} height={50} alt="close" className="object-cover " />
            ) : (
              <Image src="/icons/menu.svg" width={50} height={50} alt="menu" className="object-cover" />
            )}
          </button>
          <button onClick={() => router.push("/")}>
            <Image src="/logos/logo.png" width={50} height={50} alt="sermayakar logo" className="object-cover" />
          </button>
        </div>
      </div>
      <div
        className={`fixed w-screen h-screen bg-white transition-transform top-0 left-0 ${sideMenuOpen ? "translate-x-0" : "translate-x-full"} z-20`}
      >
        <SquigglyLine
          path={
            "m 210,0 c -4.00661,10.7811 -9.93935,20.843202 -17.43361,29.567941 -14.10242,16.417885 -33.30131,27.751479 -47.85855,43.767473 -7.09553,7.80656 -13.07433,16.782397 -16.42788,26.784526 -3.35355,10.00213 -3.95755,21.09196 -0.59218,31.09012 3.36537,9.99816 10.93118,18.73997 20.78956,22.49512 4.9292,1.87758 10.35192,2.49606 15.55506,1.63029 5.20314,-0.86577 10.16847,-3.23156 14.01997,-6.83547 1.97655,-1.84949 3.66374,-4.02379 4.85128,-6.4563 1.18754,-2.43251 1.86743,-5.1267 1.85034,-7.83355 -0.0171,-2.70686 -0.74419,-5.42238 -2.18853,-7.71176 -1.44434,-2.28938 -3.616,-4.13444 -6.15372,-5.07642 -3.41073,-1.26603 -7.31184,-0.83939 -10.60611,0.70451 -3.29428,1.5439 -6.02046,4.12705 -8.17733,7.05686 -4.31375,5.85963 -6.44462,13.02401 -10.09785,19.31666 -6.71162,11.5607 -18.12005,19.52998 -26.69964,29.78115 -4.28979,5.12558 -7.92506,10.95327 -9.54655,17.43746 -1.62148,6.48419 -1.05406,13.69687 2.52427,19.34217 3.10817,4.90356 8.26206,8.293 13.80378,10.02356 5.54173,1.73056 11.46529,1.91361 17.24817,1.39995 11.56576,-1.02734 22.94136,-4.77376 34.52849,-4.02498 8.3267,0.53809 16.48612,3.45823 23.26342,8.32564 6.77729,4.86741 12.15083,11.66656 15.32056,19.38512 3.16972,7.71857 4.12551,16.33193 2.72506,24.55763 C 219.29755,282.9534 215.54533,290.7652 210,297"
          }
          viewBox={"80 0 112.27184 297.69135"}
        />

        <div className="w-full h-full px-8 py-16 pt-40 flex flex-col items-start justify-start relative">
          <div className="text-5xl mb-4 font-semibold text-black">sermayakar</div>
          <button onClick={() => handleNavigation("/")}>
            <div className="text-4xl font-semibold text-black">Home</div>
          </button>
          <button onClick={() => {

              handleNavigation("/");
              const section = document.getElementById("about");
              section.scrollIntoView({ behavior: "smooth" });
          }}>
            <div className="text-4xl font-semibold text-black">About Us</div>
          </button>
          <button onClick={() => handleNavigation("/projects")}>
            <div className="text-4xl font-semibold text-black">Projects</div>
          </button>
          <button
            onClick={() => {
              handleNavigation("/");
              const section = document.getElementById("contact");
              section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="text-4xl font-semibold text-black">Contact</div>
          </button>

          <div className="w-full flex flex-col items-end gap-4">
            <Button className="h-20 w-2/3 rounded-[3rem] bg-white p-0 m-0" onClick={() => router.push("/projects/pearlone")}>
              <Image src={"/images/assets/one.jpeg"} width={1080} height={720} className="w-full h-auto object-cover " />
            </Button>

            <Button className="h-20 w-2/3 rounded-[3rem] bg-white p-0 m-0 animate-slideLeft" onClick={() => router.push("/projects/pearlone")}>
              <Image src={"/images/assets/two.jpeg"} width={1080} height={720} className="object-cover h-full w-full " />
            </Button>

            <Button className="h-20 w-2/3 rounded-[3rem] bg-white p-0 m-0" onClick={() => router.push("/projects/pearlone")}>
              <Image src={"/images/pearlTower/front.jpg"} width={1080} height={720} className="bg-white object-cover " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
