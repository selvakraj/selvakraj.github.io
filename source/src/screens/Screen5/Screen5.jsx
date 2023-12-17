import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="iphone-plus-wrapper">
        <div className="iphone-plus-4">
          <div className="overlap-22">
            <div className="rectangle-10" />
            <Link className="text-wrapper-69" to="/iphone-8-plus-1">
              X
            </Link>
            <div className="menu-2">
              <div className="overlap-group-15">
                <Link className="text-wrapper-70" to="/iphone-8-plus-1">
                  Home
                </Link>
                <div className="rectangle-11" />
              </div>
              <Link className="text-wrapper-71" to="/iphone-8-plus-2">
                Research Details
              </Link>
              <Link className="text-wrapper-72" to="/iphone-8-plus-3">
                Resources
              </Link>
              <div className="text-wrapper-73">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
