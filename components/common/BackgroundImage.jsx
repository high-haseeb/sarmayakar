import Image from "next/image";
import React from "react";

const BackgroundImage = ({ src }) => {
  return (
      <Image
        alt="BackgroundImage"
        src={src}
        width={1080}
        height={720}
        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
      />
  );
};

export default BackgroundImage;
