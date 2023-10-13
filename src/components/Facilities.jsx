import React from "react";
import HelpCard from "./HelpCard";
import woody from "../assets/images/woody.png";
import treeverticle from "../assets/images/treeverticle.png";

const Facilities = () => {
  <>
    <section className="relative my-10">
      <div className="xs:hidden lg:block">
        <img
          src={woody}
          alt="green trees"
          className="absolute top-0 left-0 right-0 -z-1 object-cover w-screen" 
        />
      </div>
      <div className="lg:hidden xs:block">
        <img
          src={treeverticle}
          alt="green trees"
          className="absolute top-0 left-0 right-0 -z-1 object-cover"
        />
      </div>
      <div className="relative z-1 py-14 px-4 flex flex-col gap-20 lg:p-20 lg:justify-center lg:items-center lg:gap-10 md:justify-center md:items-center">
        <div className="flex flex-col gap-5">
          <h4 className="font-Volkhov text-white text-2xl font-bold">
            What we have to offer
          </h4>
          <p className="font-Source Sans Pro font-small text-md text-white">
            TreeWalker Arbor Care Is fully licensed and insured. We offer
            professional tree services in the greater Charlotte area. We provide
            everything from tree trimming and stump grinding to pest mitigation
            and disease control. We specialize in keeping trees healthy and
            properties safe from damage. Let us know about your trees and
            schedule a free risk evaluation.
          </p>
        </div>
        <div className="flex gap-5 flex-col md:flex-row lg:flex-row lg:justify-evenly">
          <HelpCard title={"Locations"} />
          <HelpCard title={"Services"} />
        </div>
      </div>
    </section>
    
  </>
};

export default Facilities;
