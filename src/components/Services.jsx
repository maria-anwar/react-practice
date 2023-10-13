import React from 'react'
import HelpCard from "./HelpCard";
import woody from "../assets/images/woody.png";
import treeverticle from "../assets/images/treeverticle.png";

const Services = () => {
  return (
    <section className="" >
    <div className="xxs:block sm:hidden bg-no-repeat bg-contain bg-[#222222]" style={{ backgroundImage: `url(${treeverticle})`}}>
       <div className='py-20 px-5 flex flex-col gap-5'>
       <div className="flex flex-col gap-5">

       <h4 className='font-volkhov text-white text-3xl font-semibol'>What we have to offer</h4>
       <p className="font-Source Sans Pro font-small text-md text-white">
            TreeWalker Arbor Care Is fully licensed and insured. We offer
            professional tree services in the greater Charlotte area. We provide
            everything from tree trimming and stump grinding to pest mitigation
            and disease control. We specialize in keeping trees healthy and
            properties safe from damage. Let us know about your trees and
            schedule a free risk evaluation.
          </p> 
       </div>
       <div className="flex gap-5 flex-col">
          <HelpCard title={"Locations"} />
          <HelpCard title={"Services"} />
        </div>
       </div>
      </div>


      <div className="sm:block xxs:hidden bg-contain" style={{ backgroundImage: `url(${woody})`}}>
       <div className='py-20 px-5 flex flex-col gap-5 lg:px-16 lg:py-20 lg:justify-center xl:px-28'>
       <div className="flex flex-col gap-5">

       <h4 className='font-volkhov text-white text-3xl font-semibol'>What we have to offer</h4>
       <p className="font-Source Sans Pro font-small text-md text-white lg:w-8/12">
            TreeWalker Arbor Care Is fully licensed and insured. We offer
            professional tree services in the greater Charlotte area. We provide
            everything from tree trimming and stump grinding to pest mitigation
            and disease control. We specialize in keeping trees healthy and
            properties safe from damage. Let us know about your trees and
            schedule a free risk evaluation.
          </p> 
       </div>
       <div className="flex gap-5 flex-col lg:px-0 lg:justify-center md:flex-row ">
          <HelpCard title={"Locations"} />
          <HelpCard title={"Services"} />
        </div>
       </div>
      </div>
    </section>
  )
}

export default Services
