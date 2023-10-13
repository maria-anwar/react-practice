import React from 'react'

const KeyBenefit = (props) => {
  return (
    <div className="flex gap-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-[#F3F9F8] flex justify-center items-center text-[#268C76] text-normal font-bold">
                {props.count}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-volkhov text-[#242424] text-3xl font-bold pe-4 leading-normal lg:text-2xl">
                {props.title}
              </h4>
              <div className="font-Source Sans Pro font-normal text-md text-[#242424] pe-4">
                {props.desc}
              </div>
            </div>
          </div>
  )
}

export default KeyBenefit