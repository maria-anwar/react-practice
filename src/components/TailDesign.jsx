import React from 'react'

const TailDesign = () => {
  return (
    <>
    <div className="grid grid-cols-2  bg-black grid-flow-col gap-10"> 
        <div className='bg-white col-span-3 border min-w-20'>FIRST CARD</div>
        <div className='bg-white col-span-3 border min-w-20'>SECOND CARD</div>
        {/* <div className='bg-white col-span-4 border'>SECOND CARD</div>
        <div className='bg-white col-span-4 border'>SECOND CARD</div>
        <div className='bg-white col-span-4 border'>SECOND CARD</div> */}
    </div>
    </>
  )
}

export default TailDesign