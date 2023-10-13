import React from "react";
import forest from "../assets/images/forest.png";
import field1 from "../assets/images/field1.png";
import smarrow from "../assets/images/smarrow.png";
import arrowdown from "../assets/images/arrowdown.png";
import text from "../assets/images/text.svg";

const Slider = () => {
  return (
    <>
      <section>
        <div className="relative w-screen">
          <img
            src={forest}
            alt="Background Image"
            className="absolute top-0 left-0 -z-1 object-cover sm:block h-full w-screen xxs:hidden"
          />
          <img
            src={field1}
            alt="Background Image"
            className="absolute top-0 left-0 w-full -z-1 object-cover sm:hidden xxs:block"
          />
          <div className="relative z-1 flex flex-col items-center gap-32 xs:gap-44 pt-32 pb-10 sm:pb-16 lg:pb-20 lg:gap-28 xl:px-32 xl:pt-44 xl:pb-20 xl:gap-72">
            <div className="flex flex-col items-center gap-10 md:gap-10 text-white px-4">
              <div className="flex flex-col gap-3 md:gap-10 items-start px-2">
                <h2 className="font-volkhov font-normal text-5xl lg:text-6xl md:text-bold text-center leading-snug  tracking-2 md:font-medium md:leading-normal sm:px-14 lg:px-32 lg:leading-tight">
                  Keeping you safe from unhealthy trees.
                </h2>
                <div className="font-sans text-md w-full text-center tracking-4 sm:text-xl">
                  Professional tree services.
                </div>
              </div>
              <div className="rounded-md bg-[#FF740A] px-5 py-3 flex flex-row gap-2">
              <img 
              src={text}
              alt="text"
              className=""
              />
              <div className="font-sans font-medium text-white text-base">Text Us</div>
                
              </div>
            </div>
            <div className="border rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img 
              src={smarrow}
              alt="arrow-down"
              className="xxs:block md:hidden"
            />
             <img 
              src={arrowdown}
              alt="arrow-down" 
              className="md:block xxs:hidden"
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
