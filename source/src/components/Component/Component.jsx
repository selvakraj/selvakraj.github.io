/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ className, href }) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper-2">@Schamburg Tamil Fair 2024</div>
        <p className="p">3rd Schaumburg Tamil Fair 2024</p>
        <div className="text-wrapper-3">Tamil Research</div>
      </div>
      <img className="resarch" alt="Resarch" src="/img/resarch-badge2024-2.png" />
      <div className="text-wrapper-4">Contact</div>
      <a className="text-wrapper-5" href={href} rel="noopener noreferrer" target="_blank">
        thamizh.research.usa@gmail.com
      </a>
    </div>
  );
};

Component.propTypes = {
  href: PropTypes.string,
};
