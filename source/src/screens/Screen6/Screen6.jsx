import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="iphone-plus-5">
        <div className="overlap-23">
          <div className="rectangle-12" />
          <Link className="text-wrapper-74" to="/iphone-8-plus-3">
            X
          </Link>
          <div className="menu-3">
            <Link className="text-wrapper-75" to="/iphone-8-plus-1">
              Home
            </Link>
            <Link className="text-wrapper-76" to="/iphone-8-plus-2">
              Research Details
            </Link>
            <Link className="text-wrapper-77" to="/iphone-8-plus-3">
              Resources
            </Link>
            <div className="overlap-group-16">
              <div className="text-wrapper-78">Contact</div>
              <div className="rectangle-13" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
