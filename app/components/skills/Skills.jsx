import React from "react";
import Image from "next/image";
import skills_image from "@/images/skills.png";

const Skills = () => {
  return (
    <>
      <div className=" mt-8 py-5 px-56 xl:px-20 lg:px-8">
        <div className="flex items-center mt-28">
          <h1 className="text-white text-3xl font-medium flex gap-1  tracking-widest">
            <span className="text-[#C778DD]">#</span>skills
          </h1>
          <div className="px-5  md:w-full">
            <p className="border border-[#C778DD] h-[1px] w-[500px] rounded-full  md:w-full"></p>
          </div>
        </div>
        <div className="mt-20 flex justify-between  2xl:flex-col-reverse" >
          <div className="2xl:flex 2xl:justify-center mt-10 ">
            <Image
              src={skills_image}
              alt="skills-image"
              width={550}
              height={550}
              className="pointer-events-none"
            />
          </div>
          <div className="flex  gap-5 flex-wrap">
            <div className="border border-[#ABB2BF] min-w-[250px] min-h-[140px] sm:w-full">
              <h1 className="border border-[#ABB2BF] py-2 px-2 text-white font-medium  text-lg tracking-widest">
                Languages
              </h1>
              <div>
                <p className="text-[#ABB2BF] text-lg font-medium tracking-widest p-2 leading-loose">
                  TypeScript C++ <br /> Python Javascript
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap sm:w-full">
              <div className="border border-[#ABB2BF] w-[250px]  min-h-[140px] sm:w-full ">
                <h1 className="border border-[#ABB2BF] py-2 px-2 text-white font-medium  text-lg tracking-widest">
                  Databases
                </h1>
                <div>
                  <p className="text-[#ABB2BF] text-lg font-medium tracking-widest p-2 leading-loose">
                    SQLite PostgreSQL <br /> MongoDB
                  </p>
                </div>
              </div>
              <div className="border border-[#ABB2BF] w-[250px]  min-h-[140px]  sm:w-full">
                <h1 className="border border-[#ABB2BF] py-2 px-2 text-white font-medium  text-lg tracking-widest">
                  Others
                </h1>
                <div>
                  <p className="text-[#ABB2BF] text-lg font-medium tracking-widest p-2 leading-loose">
                    HTML CSS SCSS <br /> TailwindCSS MUI
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5  lg:flex-row lg:flex-wrap  sm:w-full">
              <div className="border border-[#ABB2BF] w-[250px]  min-h-[160px]  sm:w-full">
                <h1 className="border border-[#ABB2BF] py-2 px-2 text-white font-medium  text-lg tracking-widest">
                  Mobile or Generative Ai
                </h1>
                <div>
                  <p className="text-[#ABB2BF] text-lg font-medium tracking-widest p-2 leading-loose">
                    React Native Langchain <br /> Chat-bot
                  </p>
                </div>
              </div>{" "}
              <div className="border border-[#ABB2BF] w-[250px]  min-h-[170px]  sm:w-full">
                <h1 className="border border-[#ABB2BF] py-2 px-2 text-white font-medium  text-lg tracking-widest">
                  Frameworks
                </h1>
                <div>
                  <p className="text-[#ABB2BF] text-lg font-medium tracking-widest p-2 leading-loose">
                    Reactjs Nextjs <br /> Expressjs Nodejs Django Firebase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
