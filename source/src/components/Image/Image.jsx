/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Image = ({ className, src, ...props }) => {
  return (
    <a
      className={`image ${className}`}
      href="https://www.youtube.com/watch?v=d5KpuI0JJJY"
      rel="noopener noreferrer"
      target="_blank"
      
    >
      <img className="img" alt="Image" src={src}/>
      {props.children}
    </a>
  );
};
