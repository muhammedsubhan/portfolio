"use client";

import React, { useState } from "react";
import logo from "@/images/Logo.png";
import arrow_down from "@/images/arrow-down.png";
import Image from "next/image";
import Hamburger from "hamburger-react";
import github from "@/images/github.png";
import linkedin from "@/images/linkedin.png";
import email from "@/images/email.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "min-h-[400px] py-10 opacity-100 " : "h-0 opacity-0"
        } overflow-hidden bg-[#282c33] transition-all duration-500 ease-in-out`}
      >
        <div className="p-5">
          <div className="">
            <ul className="flex flex-col  gap-8 lg:gap-6">
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
            <div className=" py-5  flex items-center justify-center">
              <ul className="flex gap-8 items-center">
                <li>
                  <Link
                    href="https://github.com/muhammedsubhan"
                    target="_blank"
                  >
                    <Image
                      src={github}
                      alt="github-icon"
                      height={25}
                      width={35}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/muhammad-subhan-software-engineer-917b62206/"
                    target="_blank"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin-icon"
                      height={25}
                      width={35}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammedsubhan692@gmail.com"
                    target="_blank"
                  >
                    <Image
                      src={email}
                      alt="email-icon"
                      height={25}
                      width={35}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sticky top-0 z-50 bg-[#282c33]">
        <div className="absolute lg:hidden block">
          <div className="px-12 lg:px-0 lg:pl-8 ">
            <p className="border-r-[2px] border-[#ABB2BF] h-[300px] rounded-full"></p>
          </div>
          <div className="px-[37px] lg:px-0 lg:pl-7 mt-5 ">
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="https://github.com/muhammedsubhan" target="_blank">
                  <Image
                    src={github}
                    alt="github-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/muhammad-subhan-software-engineer-917b62206/"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="linkedin-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammedsubhan692@gmail.com"
                  target="_blank"
                >
                  <Image
                    src={email}
                    alt="email-icon"
                    height={25}
                    width={23}
                    className="cursor-pointer"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between px-56  h-24 w-full xl:px-16 lg:px-6">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                height={50}
                width={40}
                alt="logo"
                quality={100}
              />
              <h1 className="font-medium text-2xl text-white tracking-widest">
                Subhan
              </h1>
            </div>
          </Link>

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
