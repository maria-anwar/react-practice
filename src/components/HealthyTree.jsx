import React from "react";
import redtree from "../assets/images/redtree.png";

import treeVector from "../assets/images/treeVector.png";
import fullVector from "../assets/images/fullVector.png";
import check1 from "../assets/images/check1.svg";

const HealthyTree = () => {
  return (
    <>
      {/* <section className="flex flex-col w-full md:flex-row">
        <div className="relative z-40 mb-0 bg-opacity-70 bg-[#268C76] md:w-5/6">
          <img
            src={fullvector}
            alt="Background Image"
            className="absolute left-0 w-full h-full -z-1 object-cover lg:object-contain  bg-[#268C76] "
          />
          <div className="relative z-1 flex flex-col w-full px-4 gap-4 pt-20 pb-10 md:pt-10 lg:gap-4 lg:pl-20 lg:pr-20 lg:py-20  bg-opacity-70 border">
            <h3 className="font-volkhov text-white text-4xl text-bold text-left leading-10 md:text-3xl">
              Healthy trees are safe trees
            </h3>
            <div className="flex flex-col gap-2 text-white z-2">
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
              <div className="flex gap-2 py-2">
                <div className="flex justify-center items-center">
                  <i className="w-8 h-8 rounded-full bg-[#EDEFEE]" />
                </div>
                <div className="font-Source Sans Pro text-normal">
                  Feel confident your property is safe from the next storm.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={redtree} alt="healthy-tree" className="object-contain z-30 md:w-5/12" />
      </section> */}
      <section className="relative flex flex-col w-full md:flex-row">
        <div className=" bg-no-repeat xxs:bg-cover xl:bg-contain" style={{
            backgroundImage: `url(${treeVector})`,
            backgroundColor: "#268C76",
          }}>
        <div className="bg-opacity-70 flex-flex-col px-4 pt-12 pb-10 md:px-12 md:py-12  lg:px-16 lg:pt-20 lg:pb-10 xl:px-24 xl:justify-center">

          <h3 className="font-volkhov text-white text-4xl font-medium text-left leading-10 md:text-4xl lg:text-5xl lg:font-normal lg:pb-5">
            Healthy trees are safe trees
          </h3>
          <div className="flex flex-col  text-white">
            <div className="flex gap-2 py-2">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[#EDEFEE] w-6 h-6 lg:w-8 lg:h-8 flex justify-center items-center">
                  <img
                    src={check1}
                    alt="check"
                    className=" w-4 h-4 lg:w-6 lg:h-6"
                  />
                </div>
              </div>
              <div className="font-sans text-normal lg:text-lg">
                Feel confident your property is safe from the next storm.
              </div>
            </div>
            <div className="flex gap-2 py-2">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[#EDEFEE] w-6 h-6 lg:w-8 lg:h-8 flex justify-center items-center">
                  <img
                    src={check1}
                    alt="check"
                    className=" w-4 h-4 lg:w-6 lg:h-6"
                  />
                </div>
              </div>
              <div className="font-Source Sans Pro text-normal lg:text-lg">
                Feel confident your property is safe from the next storm.
              </div>
            </div>
            <div className="flex gap-2 py-2">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[#EDEFEE] w-6 h-6 lg:w-8 lg:h-8 flex justify-center items-center">
                  <img
                    src={check1}
                    alt="check"
                    className=" w-4 h-4 lg:w-6 lg:h-6"
                  />
                </div>
              </div>
              <div className="font-Source Sans Pro text-normal lg:text-lg">
                Feel confident your property is safe from the next storm.
              </div>
            </div>
          </div>
        </div>

        </div>
        <img
          src={redtree}
          alt="healthy-tree"
          className="object-cover w-full md:w-5/12"
        />
      </section>
    </>
  );
};

export default HealthyTree;
