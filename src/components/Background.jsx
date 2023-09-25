import React from 'react';
import bgimg from "../assets/images/field1.png";
function ImageBackground() {
  return (
    <div
      style={{
        position: 'relative',
         
        height: '766px', 
      }}
    >
      {/* Use an img element for the background image */}
      <img
        src={bgimg}
        alt="Background Image"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%', // Make the image cover the entire container width
          height: '100%', // Make the image cover the entire container height
          objectFit: 'cover', // Ensure the image covers the container without stretching
          zIndex: '-1', // Send the image to the background
        }}
      />

      {/* Content goes here */}
      <div
        style={{
          position: 'relative',
          zIndex: '1', // Place content above the image
        }}
      >
        <h1 className='p-10'>Your Content Goes Here</h1>
        <p>This is your content over the background image.</p>
      </div>
    </div>
  );
}

export default ImageBackground;
