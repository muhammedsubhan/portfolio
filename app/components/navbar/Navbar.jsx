"use client";

import React, { useState } from "react";
import logo from "@/images/Logo.png";
import arrow_down from "@/images/arrow-down.png";
import Image from "next/image";
import Hamburger from "hamburger-react";
import github from "@/images/github.png";
import linkedin from "@/images/linkedin.png";
import email from "@/images/email.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="flex sticky top-0 z-50 bg-[#282c33]">
        <div className="absolute">
          <div className="px-12 lg:px-0 lg:pl-8 ">
            <p className="border-r-[2px] border-[#ABB2BF] h-[300px] rounded-full"></p>
          </div>
          <div className="px-[37px] lg:px-0 lg:pl-7 mt-5">
            <ul className="flex flex-col gap-5">
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

        <div className="flex items-center justify-between px-56  h-24 w-full xl:px-12">
          <div className="flex items-center gap-3">
            <Image src={logo} height={50} width={40} alt="logo" quality={100} />
            <h1 className="font-medium text-2xl text-white tracking-widest">
              Subhan
            </h1>
          </div>

          <div className="hidden md:flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#D9D9D9" />
          </div>

          <div className="flex items-center justify-between md:hidden">
            <ul className="flex items-center gap-8 lg:gap-6">
              {["home", "works", "about-me", "contacts"].map((link) => (
                <li
                  key={link}
                  className={`text-xl font-medium flex gap-1 cursor-pointer  tracking-widest ${
                    activeLink === link
                      ? "text-white"
                      : "text-[#ABB2BF] opacity-80"
                  }`}
                  onClick={() => handleSetActive(link)}
                >
                  <span className="text-[#C778DD]">#</span>
                  {link}
                </li>
              ))}
              <li>
                <div className="flex items-center gap-1 ml-4 lg:ml-0">
                  <p className="text-xl font-medium text-[#ABB2BF]">EN</p>
                  <Image
                    src={arrow_down}
                    width={14}
                    height={14}
                    alt="arrow-icon"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
