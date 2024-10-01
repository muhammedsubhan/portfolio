"use client";

import React, { useState } from "react";
import logo from "@/images/Logo.png";
import arrow_down from "@/images/arrow-down.png";
import Image from "next/image";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="flex">
        <div className="px-12 lg:px-0 lg:pl-8 ">
          <p className="border-r-[2px] border-[#ABB2BF] h-[380px] rounded-full	"></p>
        </div>
        <div className="flex items-center justify-between px-40  h-24 w-full xl:px-12">
          <div className="flex items-center gap-3">
            <Image src={logo} height={50} width={40} alt="logo" quality={100} />
            <h1 className="font-medium text-2xl text-white">Subhan</h1>
          </div>

          <div className="hidden md:flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#D9D9D9" />
          </div>

          <div className="flex items-center justify-between md:hidden">
            <ul className="flex items-center gap-8 lg:gap-6">
              <li className="text-white text-xl font-medium flex gap-1">
                <span className="text-[#C778DD]">#</span>home
              </li>
              <li className="text-white text-xl font-medium flex gap-1">
                <span className="text-[#C778DD]">#</span>works
              </li>
              <li className="text-white text-xl font-medium flex gap-1">
                <span className="text-[#C778DD]">#</span>about-me
              </li>
              <li className="text-white text-xl font-medium flex gap-1">
                <span className="text-[#C778DD]">#</span>contacts
              </li>
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
