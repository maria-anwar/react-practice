import React from 'react'
import check from "../assets/images/check.svg";
const HelpKey = (props) => {
  return (
    <div className="flex gap-3">
    <div className="flex items-center rounded-full bg-pink-100 w-8 justify-center">
      <img 
        src={check}
        alt="check-box"
        className=""
      />
    </div>
  <div className="font-Agipo text-[#222] font-medium text-2xl">{props.title}</div>
  </div>
  )
}

export default HelpKey