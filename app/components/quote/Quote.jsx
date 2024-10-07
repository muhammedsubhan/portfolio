import React from "react";
import quote from "@/images/quote.png";
import Image from "next/image";

const Quote = () => {
  return (
    <>
      <div className=" mt-40 py-10 px-56">
        <div className="flex justify-center">
          <Image
            src={quote}
            alt="quote-image"
            height={300}
            width={800}
            className="pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export default Quote;
