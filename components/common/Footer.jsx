"use client";
import { Button } from '@nextui-org/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center w-screen h-auto py-16 px-8">
      <div className="mb-6 ">
        <div className=" font-bold flex items-end justify-start text-3xl">Sermaykar</div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold">Join Our Social Community</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" target="_blank" ><img src="/icons/social/fb.svg" alt="facebook"  className='object-cover w-9 h-9 fill-white'/></Link>
          <Link href="#" target="_blank" ><img src="/icons/social/yt.svg" alt="facebook"  className='object-cover w-[42px] h-10 fill-white'/></Link>
          <Link href="#" target="_blank" ><img src="/icons/social/ms.svg" alt="facebook"  className='object-cover w-9 h-9 fill-white'/></Link>
          <Link href="#" target="_blank" ><img src="/icons/social/wa.svg" alt="facebook"  className='object-cover w-9 h-9 fill-white'/></Link>
          <Link href="#" target="_blank" ><img src="/icons/social/ig.svg" alt="facebook"  className='object-cover w-10 h-10 fill-white'/></Link>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-lg font-bold">Let's Discuss What's Next</h2>
        <p>Have a project or a question?<br />
          We'd love to hear from you.
        </p>
        <Button className='bg-[#b2d3fa] rounded-xl font-semibold text-black'>
        {/* <Link href="/" className="text-black flex items-center justify-center"> */}
          CONTACT US
        {/* </Link> */}
        </Button>
      </div>
      <div className="text-gray-500 text-[18px] p-1">
        © Sermaykar. All rights reserved. <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-700">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
