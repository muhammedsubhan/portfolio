import React from "react";
import email_icon from "@/images/email.png";
import phone_icon from "@/images/phone.png";
import Image from "next/image";

const ContactMe = () => {
  return (
    <>
      <div className=" mt-8 py-5 px-56">
        <div className="flex items-center mt-28">
          <h1 className="text-white text-3xl font-medium flex gap-1  tracking-widest">
            <span className="text-[#C778DD]">#</span>contacts
          </h1>
          <div className="px-5">
            <p className="border border-[#C778DD] h-[1px] w-[350px] rounded-full"></p>
          </div>
        </div>
        <div className="mt-20 flex  justify-between">
          <div className="w-[560px] ">
            <p className="text-xl text-[#ABB2BF]  tracking-widest leading-relaxed">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me.
            </p>
          </div>
          <div className="border-2 border-[#ABB2BF]">
            <div className="py-3">
              <div className="py-3 mb-4 px-3">
                <p className="text-lg text-white font-medium tracking-widest">
                  Message me here
                </p>
              </div>
              <div className="flex flex-col gap-5 px-5">
                <div className="flex  items-center gap-3">
                  <Image
                    src={phone_icon}
                    alt="phone-icon"
                    height={30}
                    width={25}
                  />
                  <p className="text-lg text-[#ABB2BF] tracking-widest">
                    +92 3010400528
                  </p>
                </div>
                <div className="flex  items-center gap-3">
                  <Image
                    src={email_icon}
                    alt="email-icon"
                    height={30}
                    width={25}
                  />
                  <p className="text-lg text-[#ABB2BF] tracking-widest">
                    muhammedsubhan692@gmail.com
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

export default ContactMe;
