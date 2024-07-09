import Image from "next/image";
import Navbar, { SideMenu } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="text-4xl font-bold flex items-center justify-center text-white w-screen h-screen overflow-hidden">
      <Navbar/>
      <SideMenu/>
      <Image src={'/images/bahria/town.jpg'} className="w-screen h-screen absolute top-0 left-0 object-cover -z-10" alt="bg" width={1920} height={1080}/>
      <div className="flex flex-col gap-2 items-center justify-center top-1/4 absolute z-0">
        {/* <Image src={'/logos/logo.png'} width={720} height={480} alt="logo" className="object-cover w-40"/> */}
        <span >SERMAYAKAR</span>
        <span className="text-lg font-nexaLight">trust that lasts forever</span>
      </div>
    </div>
  );
}
