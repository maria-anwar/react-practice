import React from 'react';
import treelog from "../assets/images/treelog.png";
import trees from "../assets/images/trees.png";

function mycomponent() {
  // Determine the screen width
  const screenWidth = window.innerWidth;

  return (
    <div>
      {screenWidth <= 375 ? (
        
        <img src={treelog} alt="Mobile Image" />
      ) : (
        
        <img src={trees} alt="Desktop Image" />
      )}
    </div>
  );
}

export default mycomponent;
