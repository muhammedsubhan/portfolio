import React from "react";
import Image from "next/image";
import logo from "@/images/Logo.png";
import github from "@/images/github.png";
import linkedin from "@/images/linkedin.png";
import email from "@/images/email.png";

const Footer = () => {
  return (
    <>
      <div className=" px-56 border-t-2 border-[#ABB2BF] py-10 mt-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                height={50}
                width={35}
                alt="logo"
                quality={100}
              />
              <h1 className="font-medium text-2xl text-white tracking-widest">
                Subhan
              </h1>
              
            </div>
            <h1 className="text-2xl  tracking-widest text-white">
              Web and Mobile App Developer
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl text-white tracking-widest font-medium">
                Media
              </h1>
              <ul className="flex gap-5 items-center">
                <li>
                  <Image
                    src={github}
                    alt="github-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src={linkedin}
                    alt="linkedin-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src={email}
                    alt="email-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <p className="text-[#ABB2BF]">© Copyright 2024. Made by Subhan</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
