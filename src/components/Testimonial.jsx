import React from 'react'
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

const Testimonial = (props) => {

  return (
  <>
    <div className="flex flex-col justify-between bg-white p-4 rounded-lg h-72 md:w-1/3 lg:w-1/3 border">
              <p className="font-Source Sans Pro font-small text-md text-[#242424]">
               {props.desc}
              </p>
              <div className="flex gap-2 w-max items-center">
                <img
                  src={props.imgUrl}
                  alt="green trees"
                  className="h-10 w-10 rounded-full"
                />
                <div className="">{props.name}</div>
              </div>
            </div> 
  </>
  )
}

export default Testimonial