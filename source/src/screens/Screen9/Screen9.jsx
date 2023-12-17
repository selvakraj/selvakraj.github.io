import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="iphone-plus-7">
        <div className="overlap-36">
          <div className="rectangle-18" />
          <Link className="text-wrapper-105" to="/iphone-8-plus-3">
            X
          </Link>
          <div className="menu-4">
            <Link className="text-wrapper-106" to="/iphone-8-plus-1">
              Home
            </Link>
            <Link className="text-wrapper-107" to="/iphone-8-plus-2">
              Research Details
            </Link>
            <div className="overlap-group-20">
              <div className="text-wrapper-108">Resources</div>
              <div className="rectangle-19" />
            </div>
            <Link className="text-wrapper-109" to="/iphone-8-plus-8">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
