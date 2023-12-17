/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({
  className,
  text = "தமிழின் இசை மரபு",
  text1 = "அர்சுன் வித்யாசங்கர்",
  rectangle = "/img/rectangle-15.png",
  href,
}) => {
  return (
    <div className={`group ${className}`}>
      <div className="text-wrapper">{text}</div>
      <div className="div">{text1}</div>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <img className="rectangle" alt="Rectangle" src={rectangle} />
      </a>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rectangle: PropTypes.string,
  href: PropTypes.string,
};
