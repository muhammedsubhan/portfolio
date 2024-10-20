import Image from "next/image";
import React from "react";
import arrow_r from "@/images/arrow_r.png";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className=" mt-8 py-5 px-56 xl:px-20 lg:px-6 ">
        <div className="flex items-center mt-28">
          <h1 className="text-white text-3xl font-medium flex gap-1  tracking-widest">
            <span className="text-[#C778DD]">#</span>projects
          </h1>
          <div className="px-5">
            <p className="border border-[#C778DD] h-[1px] w-[500px] rounded-full lg:w-[400px] md:w-[300px]"></p>
          </div>
          <div className="flex justify-end  w-full ">
            <button className="text-lg text-white tracking-widest flex items-center gap-2">
              View all{" "}
              <Image src={arrow_r} alt="arrow-icon" height={30} width={35} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-10 2xl:grid-cols-2 md:grid-cols-1 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
