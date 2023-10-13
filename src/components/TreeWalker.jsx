import React from 'react'
import treewalker from "../assets/images/treewalker.png";
import climber from "../assets/images/climber.png";
import climber1 from "../assets/images/climber1.png";

const TreeWalker = () => {
  return (
   <>
    {/* <section className=" relative flex flex-col lg:flex-row lg:pt-10 h-screen mb-20">
        <div className="pt-14 px-4 pb-2 lg:pl-20 lg:py-12 lg:pr-0 lg:w-2/4 sm:w-full">
          <img src={treewalker} alt="tree walker" className=" object-cover w-auto" />
        </div>
        <div className="relative lg:w-4/6 flex justify-center border">
          <div className="xxs:block sm:hidden">
            <img
              src={climber1}
              alt="tree"
              className="absolute top-0 left-0 -z-1 object-cover"
            />
          </div>
          <div className="xxs:hidden sm:block">
            <img
              src={climber}
              alt="tree"
              className="absolute top-0 left-0 -z-1 object-cover"
            />
          </div>
          
          <div className=" relative z-1 px-4 pt-4 pb-6 flex flex-col gap-4 lg:py-40 lg:justify-center lg:pl-14 lg:pr-20">
            <div className="font-Volkhov text-[#268C76] font-semibold text-3xl ">
              <span className="font-Volkhov text-[#242424] font-semibold text-3xl">
                Hi !
              </span>
              I’m TreeWalker👋🌳
            </div>
            <div className="font-Source Sans Pro text-[#242424] font-medium text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="font-Source Sans Pro text-[#64748B] font-medium text-md">
              - Josh Rohmann
            </div>
          </div>
        </div>
      </section> */}
      <section className='md:flex md:flex-row md:mt-10'>

      <div className="pt-14 px-4 pb-2 lg:pl-20 lg:py-12 md:py-5  md:px-4 lg:pr-0 lg:w-2/5 sm:w-full sm:px-8">
          <img src={treewalker} alt="tree walker" className=" object-cover w-full md:bg-cover border" />
      </div>
      <div className="relative lg:w-3/5 flex justify-center">
        
            <img
              src={climber1}
              alt="tree"
              className="absolute top-0 left-0 -z-1 object-cover xxs:block md:hidden sm:object-fill"
            />
         
            <img
              src={climber}
              alt="tree"
              className="absolute top-0 left-0 -z-1 w-full bg-contain xxs:hidden md:block"
            />
         
          
          <div className=" relative z-1 px-4 pt-4 pb-6 flex flex-col gap-4 sm:px-8 md:px-4 md:pt-20 lg:py-40 lg:justify-center lg:pl-14 lg:pr-20">
            <div className="font-Volkhov text-[#268C76] font-semibold text-3xl xl:text-4xl ">
              <span className="font-Volkhov text-[#242424] font-semibold text-3xl  xl:text-4xl">
                Hi! <b/>
              </span>
               I’m TreeWalker👋🌳
            </div>
            <div className="font-Source Sans Pro text-[#242424] font-medium text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="font-Source Sans Pro text-[#64748B] font-medium text-md">
              - Josh Rohmann
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default TreeWalker