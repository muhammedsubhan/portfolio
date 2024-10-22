import Image from "next/image";
import React from "react";
import about_image from "@/images/about.png";
import arrow_r from "@/images/arrow_r.png";

const AboutMe = () => {
  return (
    <>
      <div className=" mt-8 py-5 px-56 xl:px-20 lg:px-6">
        <div className="flex items-center mt-28 ">
          <h1 className="text-white text-3xl font-medium flex gap-1  tracking-widest">
            <span className="text-[#C778DD]">#</span>about-me
          </h1>
          <div className="px-5  lg:w-full">
            <p className="border border-[#C778DD] h-[1px] w-[500px] rounded-full lg:w-full"></p>
          </div>
        </div>
        <div className="flex justify-between 2xl:flex-col">
          <div className=" w-[780px] min-h-[500px] mt-20 flex flex-col gap-10 lg:w-full">
            <p className="text-xl text-[#ABB2BF]  tracking-widest leading-loose">
              Hello, I'm Subhan!
              <br />
              <br />
              I'm a self-taught full-stack developer based in Lahore, Pakistan.
              I can develop responsive websites from scratch and transform them
              into modern, user-friendly web experiences.
              <br />
              <br />
              For over a year, transforming my creativity and knowledge into
              websites has been my passion. I've helped various clients
              establish their online presence, and I'm always eager to learn
              about the latest technologies and frameworks. As a MERN stack
              developer, I focus on delivering dynamic, efficient, and
              innovative web solutions.
            </p>
            <div className=" border border-[#C778DD] text-center flex justify-center py-2 w-[200px] cursor-pointer hover:bg-[#C778DD] transition-all">
              <button className="flex items-center gap-3 justify-center text-white font-medium text-lg tracking-widest	">
                Read more{" "}
                <Image src={arrow_r} alt="arrow-icon" height={30} width={35} />
              </button>
            </div>
          </div>
          <div className="2xl:flex 2xl:items-center 2xl:justify-center lg:mt-8">
            <Image
              src={about_image}
              alt="about-image"
              width={500}
              height={500}
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
