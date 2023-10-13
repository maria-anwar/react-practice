import React from 'react'
import wreckimg from "../assets/images/wrecked.png";
import mess from "../assets/images/mess.png";
import TreesRisk from "../components/TreesRisk";

const MessyTree = () => {
  return (
    <>
        <section className="z-40 px-6 pb-6 mt-20 flex flex-col gap-3 lg:p-20">
        <h2 className="p-2 font-volkhov font-medium text-4xl leading-snug text-[#242424] text-center lg:font-medium lg:text-5xl">
          Are your trees hurting more than helping
        </h2>
        <div className=" flex flex-col md:flex-row md:gap-5 md:p-4 gap-4">
          <TreesRisk
            imgUrl={wreckimg}
            title={"Unchecked trees can be dangerous and unpredictable"}
            point1={
              "Is your foundation at risk of cracking from invasive roots?"
            }
            point2={
              "Is your foundation at risk of cracking from invasive roots?"
            }
            point3={"How safe are your parked vehicles?"}
          />
          <TreesRisk
            imgUrl={mess}
            title={"Trees are messy"}
            point1={"Is raking leaves a huge chore every year?"}
            point2={"Tired of tripping over roots while mowing?"}
            point3={"Overgrowth getting unsightly?"}
          />
        </div>
      </section>
    </>
  )
}

export default MessyTree