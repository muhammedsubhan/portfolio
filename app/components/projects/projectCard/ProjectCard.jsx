import Image from "next/image";
import React from "react";
import portfolio from "@/images/portfolio-1.png";
import live from "@/images/live.png";
import github from "@/images/live-github.png";

const ProjectCard = () => {
  return (
    <div className="w-[500px] border border-[#ABB2BF] mt-20">
      <div className="overflow-hidden group">
        <Image
          src={portfolio}
          alt="portfolio_img"
          width={500}
          height={300}
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="p-2 border border-[#ABB2BF]">
        <h1 className="text-xl tracking-widest text-[#ABB2BF]">
          Nextjs Tailwind CSS{" "}
        </h1>
      </div>
      <div className="px-4 py-3 flex flex-col gap-2">
        <h1 className="text-white text-xl tracking-widest font-medium">
          Portfolio Website
        </h1>
        <p className="text-[#ABB2BF] text-lg tracking-widest">
          Where you know about me.!!
        </p>
      </div>
      <div className="flex items-center gap-3 py-5 px-4">
        <div className="border flex justify-center border-[#C778DD] text-center py-1.5 w-[130px] cursor-pointer hover:bg-[#C778DD] transition-all group">
          <button className="flex items-center gap-2 text-[#ABB2BF] font-medium text-base tracking-widest text-center group-hover:text-white">
            Live <Image src={live} alt="live-icon" height={30} width={25} />
          </button>
        </div>
        <div className="border flex justify-center border-[#ABB2BF] text-center py-1.5 w-[130px] cursor-pointer transition-all">
          <button className="flex items-center gap-2 text-[#ABB2BF] font-medium text-base tracking-widest text-center">
            Github <Image src={github} alt="live-icon" height={30} width={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
