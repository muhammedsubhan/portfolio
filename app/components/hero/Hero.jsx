import Image from "next/image";
import React from "react";
import heroImg from "@/images/hero-image.png";
const Hero = () => {
  return (
    <>
      <div className=" flex px-56  pt-[67px]  items-center justify-between ">
        <div className="flex flex-col gap-8  mt-1">
          <h1 className="text-white font-medium text-[45px] leading-tight tracking-widest	">
            Subhan is a <span className="text-[#C778DD]">mern stack dev </span>
            and <br />
            <span className="text-[#C778DD]">chat-bot developer</span>
          </h1>
          <p className="text-[#ABB2BF] text-xl font-normal tracking-widest	">
            He crafts responsive websites where technologies <br />
            meet creativity
          </p>
          <div className="border border-[#C778DD] text-center py-2 w-[200px] cursor-pointer hover:bg-[#C778DD] transition-all">
            <button className="text-white font-medium text-lg tracking-widest	text-center">
              Contact me!!
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={heroImg}
            height={600}
            width={620}
            alt="hero-image"
            className="pointer-events-none"
          />
          <div className="border border-[#ABB2BF] py-2 px-3 flex gap-5 items-center">
            <span className="bg-[#C778DD] px-3 h-6"></span>
            <p className="text-[#ABB2BF] text-2xl tracking-widest	">
              Currently working on{" "}
              <span className="text-white">Machine Learning</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
