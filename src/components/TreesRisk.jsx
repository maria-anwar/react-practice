import React from "react";

const TreesRisk = (props) => {
  return (
    <>
      
        <div className="py-4 px-4 flex flex-col shadow-lg rounded-lg  gap-8 sm:rounded-xl sm:shadow-xl lg:w-568 md:gap-4 sm:p-6 md:p-4 md:w-1/2 lg:p-6">
          <img
            src={props.imgUrl}
            alt="mess-tree"
            className="rounded-lg sm:rounded-xl"
          />
          <div className="flex flex-col gap-3 sm:px-4 md:px-0">
            <h4 className="font-volkhov font-semibold text-2xl text-[#242424] pe-8 md:text-2xl md:text-left md:pe-0 xl:text-3xl">
              {props.title}
            </h4>
            <ul
              role="list"
              className="marker:text-slate-900 list-disc pl-4 space-y-3 text-[#242424] font-normal text-medium"
            >
              <li>{props.point1}</li>
              <li>{props.point2}</li>
              <li>{props.point3}</li>
            </ul>
          </div>
        </div>
      
    </>
  );
};

export default TreesRisk;
