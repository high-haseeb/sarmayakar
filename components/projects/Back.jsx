import React from "react";
import Image from "next/image";
import { useRouter} from "next/navigation"

const Back = () => {
  const router = useRouter();
  return (
    <button className="fixed top-10 left-0 w-full h-10 z-50 px-8" onClick={() => router.back()}>
      <div className="w-full h-full flex items-center justify-between ">
        <Image src={"/icons/back.svg"} width={50} height={50} className="object-cover" />
      </div>
    </button>
  );
};

export default Back;
