import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="iphone-plus-3">
        <div className="overlap-21">
          <div className="rectangle-8" />
          <Link className="text-wrapper-64" to="/iphone-8-plus-1">
            X
          </Link>
          <div className="menu">
            <Link className="text-wrapper-65" to="/iphone-8-plus-1">
              Home
            </Link>
            <div className="overlap-group-14">
              <div className="text-wrapper-66">Research Details</div>
              <div className="rectangle-9" />
            </div>
            <Link className="text-wrapper-67" to="/iphone-8-plus-3">
              Resources
            </Link>
            <Link className="text-wrapper-68" to="/iphone-8-plus-8">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
