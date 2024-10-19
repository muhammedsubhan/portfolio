import React from "react";
import quote from "@/images/quote.png";
import Image from "next/image";

const Quote = () => {
  return (
    <>
      <div className=" mt-40 py-10 px-56  xl:px-5 md:py-6 sm:mt-20">
        <div className="flex justify-center">
          <Image
            src={quote}
            alt="quote-image"
            height={300}
            width={800}
            quality={100}
            className="pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export default Quote;
