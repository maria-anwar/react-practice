import React from 'react'
import text from "../assets/images/text.svg";
import { Link } from 'react-router-dom';
const BlockButton = () => {
  return (
    <Link style={{textDecoration:'none'}}>
    <div className='flex gap-2 px-3 py-4 bg-[#FF740A] rounded-lg items-center justify-center lg:px-5 lg:w-6/12'>
    <img 
      src={text}
      alt='chat-box'
      className=''
    />
      <div className='font-Source Sans Pro text-[#FAF6F9] text-md font-medium lg:font-normal lg:text-xl'>Schedule Free Evaluation Today</div>
    </div>
    </Link>

  )
}

export default BlockButton