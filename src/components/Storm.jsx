import React from "react";
import damagelg from "../assets/images/damage-lg.png";


const Storm = () => {
  return (
    <>
      <section className=" bg-[#242424] flex flex-col items-center w-full md:flex-row">
        <div className="flex flex-col px-5 leading-tight gap-4 pt-10 pb-20 sm:px-4 md:px-12 lg:w-3/5 lg:px-40">
          <h3 className="font-volkhov text-white text-3xl text-bold">
            Storms happen all the time.
          </h3>
          <div className="font-sans text-lg font-normal text-white ">
            Even the best cared for trees can suffer horrible consequences at
            the hands of nature.
          </div>
        </div>
        <img
          src={damagelg}
          alt="healthy-tree"
          className="md:bg-cover md:order-first sm:w-full md:w-5/12 md:h-full xl:w-5/12"
        />
      </section>
    </>
  );
};

export default Storm;
