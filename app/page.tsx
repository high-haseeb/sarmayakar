import Navbar, { SideMenu } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="text-5xl font-bold flex items-center justify-center text-white w-screen h-screen overflow-hidden">
      <Navbar />
      <SideMenu />
      <video
        src={"/videos/bg.mp4"}
        muted
        autoPlay
        loop
        className="w-screen h-screen absolute top-0 left-0 object-cover -z-10"
      />
      <div className="flex flex-col gap-2 items-center justify-center bottom-2 left-2 absolute z-0 font-nexaLight">
        <span>SERMAYAKAR</span>
        {/* <span className="text-lg font-nexaLight">trust that lasts forever</span> */}
      </div>
    </div>
  );
}
