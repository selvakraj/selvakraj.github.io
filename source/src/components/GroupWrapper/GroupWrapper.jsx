/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupWrapper = ({ className, href }) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className="text-wrapper-6">Contact</div>
      <a className="text-wrapper-7" href={href} rel="noopener noreferrer" target="_blank">
        thamizh.research.usa@gmail.com
      </a>
      <img className="resarch-badge" alt="Resarch" />
      <div className="overlap-group-2">
        <p className="text-wrapper-8">3rd Schaumburg Tamil Fair 2024</p>
        <div className="text-wrapper-9">Tamil Research</div>
      </div>
    </div>
  );
};

GroupWrapper.propTypes = {
  href: PropTypes.string,
};
