import React from "react";
import email_icon from "@/images/email.png";
import phone_icon from "@/images/phone.png";
import Image from "next/image";

const ContactMe = () => {
  return (
    <>
      <div className="mt-8 py-5 px-56 xl:px-20 lg:px-6" id="contacts">
        <div className="flex items-center mt-28">
          <h1 className="text-white text-3xl font-medium flex gap-1 tracking-widest">
            <span className="text-[#C778DD]">#</span>contacts
          </h1>
          <div className="px-5 md:w-full">
            <p className="border border-[#C778DD] h-[1px] w-[350px] rounded-full md:w-full"></p>
          </div>
        </div>
        <div className="mt-20 flex lg:gap-5 justify-between md:flex-col">
          <div className="w-[560px] md:w-full">
            <p className="text-xl text-[#ABB2BF] tracking-widest leading-relaxed">
              I’m interested in freelance opportunities. However, if you have
              other requests or questions, don’t hesitate to contact me.
            </p>
          </div>
          <div className="border-2 border-[#ABB2BF] w-[350px] md:w-full">
            <div className="py-3">
              <div className="py-3 mb-4 px-3">
                <p className="text-lg text-white font-medium tracking-widest">
                  Message me here
                </p>
              </div>
              <div className="flex flex-col gap-5 px-5 w-full">
                <div className="flex items-center gap-3 px-2">
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
                <div className="flex items-center gap-3 px-2">
                  <Image
                    src={email_icon}
                    alt="email-icon"
                    height={30}
                    width={25}
                  />
                  <p className="text-lg text-[#ABB2BF] tracking-widest break-words overflow-hidden w-full">
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
