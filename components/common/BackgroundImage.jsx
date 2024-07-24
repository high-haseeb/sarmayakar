import Image from "next/image";
import React from "react";

const BackgroundImage = ({ src }) => {
  return (
      <><Image
        alt="BackgroundImage"
        src={src}
        width={1080}
        height={720}
        className="w-full h-2/3 absolute -bottom-20 -left-20 object-cover z-10 "
      />
      {/* <Image */}
      {/*   alt="BackgroundImage" */}
      {/*   src={"/images/two-removebg-preview.png"} */}
      {/*   width={1080} */}
      {/*   height={720} */}
      {/*   className="w-1/2 h-auto absolute bottom-0 left-0 object-cover -z-10" */}
      {/* /> */}
    </>
  );
};

export default BackgroundImage;
