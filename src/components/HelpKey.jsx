import React from 'react'
import check from "../assets/images/check.svg";
const HelpKey = (props) => {
  return (
    <div className="flex gap-3 lg:max-w-max lg:max-h-max items-center">
    <div className="flex items-center rounded-full bg-pink-100 w-8 justify-center h-8 ">
      <img 
        src={check}
        alt="check-box"
        className=""
      />
    </div>
  <div className="font-Agipo text-[#222] font-medium text-xl">{props.title}</div>
  </div>
  )
}

export default HelpKey