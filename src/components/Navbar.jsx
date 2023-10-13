import React, { useState, useEffect } from 'react';
// import logo1 from "../assets/images/Logo1.png";
import logo1 from "../assets/images/Logo1.svg";
import phone from "../assets/images/phone.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
         
  return (
    <>
        <nav className='bg-[#242424] px-8 flex flex-row justify-between py-3 lg:px-10 lg:py-4 sticky top-0 z-10'>
            <img 
                src={logo1}
                alt="tree-walker"   
                className='h-10' 
                />
            <Link className='flex flex-row gap-2 px-3 lg:px-4  bg-[#FF740A] justify-center items-center rounded-lg'>
            <img 
                src={phone}
                alt="tree-walker"   
                className='w-4 h-4 lg:w-5 lg:h-5' 
                />
                <div className='text-[#FFF] text-xs lg:text-base'>(980) 777-5224</div>
            </Link>
        </nav>
    </>
  )
}

export default Navbar