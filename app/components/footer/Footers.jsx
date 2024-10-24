import React from "react";
import Image from "next/image";
import logo from "@/images/Logo.png";
import github from "@/images/github.png";
import linkedin from "@/images/linkedin.png";
import email from "@/images/email.png";
import Link from "next/link";

const Footers = () => {
  return (
    <>
      <div className=" px-56 border-t-2 border-[#ABB2BF] py-2 mt-10 xl:px-20 lg:px-6">
        {/* <div className="flex gap-5 justify-between sm:flex-col">
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
                  <Link
                    href="https://github.com/muhammedsubhan"
                    target="_blank"
                  >
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
        </div> */}
        <div className="mt-0 flex items-center justify-center sm:text-center">
          <p className="text-[#ABB2BF]">© Copyright 2024. Made by Subhan</p>
        </div>
      </div>
    </>
  );
};

export default Footers;
