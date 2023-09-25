import React from "react";

const TreesRisk = (props) => {
  return (
    <>
      
        <div className="px-4 py-4 flex flex-col shadow-lg rounded-lg gap-8 text-black border lg:w-568">
          <img
            className="rounded-lg"
            src={props.imgUrl}
            alt="mess-tree"
            height="272"
          />
          <div className="flex flex-col gap-3 items-start">
            <h4 className="font-Volkhov text-3xl text-semibold text-black lg:text-4xl">
              {props.title}
            </h4>
            <ul
              role="list"
              className="marker:text-slate-900 list-disc pl-4 space-y-3 text-black-500 text-lg"
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
