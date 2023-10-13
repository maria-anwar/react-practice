import React from 'react'
import text from "../assets/images/text.svg";
import { Link } from 'react-router-dom';
const BlockButton = () => {
  return (
    <Link style={{textDecoration:'none'}} to="/">
    <div className='flex gap-2 px-3 py-3 bg-[#FF740A] rounded-lg items-center justify-center sm:w-80'>
    <img 
      src={text}
      alt='chat-box'
      className=''
    />
      <div className='font-Source Sans Pro text-[#FAF6F9] text-small  font-normal sm:text-lg sm:font-normal  lg:font-normal lg:text-lg'>Schedule Free Evaluation Today</div>
    </div>
    </Link>

  )
}

export default BlockButton