import React from 'react';
import bgimg from "../assets/images/field1.png";
function ImageBackground() {
  return (
   <>
   <div class="grid grid-cols-3 gap-4">
        <div className='border bg-green col-start-2 bg-slate-600'>01</div>
        <div className='border bg-red-500'>02</div> 
        <div className='border bg-red-500'>03</div>
        <div className='border col-span-3 bg-red-500'>04</div>
</div>
   </>
  );
}

export default ImageBackground;
