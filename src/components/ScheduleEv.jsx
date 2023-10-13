import React from 'react'
import KeyBenefit from "./KeyBenefit";
import woodcutting from "../assets/images/woodcutting.png";
import BlockButton from "./BlockButton";

const ScheduleEv = () => {
  return (
    <>
 <section className="flex flex-col px-5 py-10 gap-5 sm:px-20 lg:flex-row lg:pl-20 lg:pr-10 lg:py-20 lg:gap-14">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h3 className="font-volkhov text-[#242424] text-3xl font-bold">
            How we can help?
          </h3>
          <p className="font-Source Sans Pro font-small text-md text-[#242424] lg:w-4/5">
            Unhealthy trees will only get worse over time. Let’s talk about your
            trees. We can take a look and bring peace of mind by offering our
            recommendations.
          </p>
          
            <img src={woodcutting} alt="wood cutting" className="xxs:hidden md:block" />
          
        </div>
        <div className="flex flex-col gap-5">
          <KeyBenefit
            count={"1"}
            title={"Tell us about your trees"}
            desc={
              "Reach out and let us know about your trees. Feel free to send pictures"
            }
          />
          <KeyBenefit
            count={"2"}
            title={"Schedule Free Evaluation"}
            desc={
              "We will come on-site to perform a tree health and safety evaluation no cost to you."
            }
          />
          <KeyBenefit
            count={"3"}
            title={"We’ll recommend a plan"}
            desc={
              "You’ll know exactly what is needed to keep your trees health and your property safe from damage."
            }
          />
          <div className="lg:flex justify-center sm:ml-14 md:w-[60%] md:me-5 lg:ml-0 lg:w-[100%]">
            <BlockButton />
          </div>
          {/* <BlockButton /> */}
        </div>
          <img src={woodcutting} alt="tree-cut" className="md:hidden xxs:block" />   
      </section>
    </>
  )
}

export default ScheduleEv