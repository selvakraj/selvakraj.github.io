import React from "react";
import { Link } from "react-router-dom";
import { Component } from "../../components/Component";
import "./style.css";

export const Screen11 = () => {
  return (
    <div className="screen-11">
      <div className="desktop-4">
        <div className="overlap-40">
          <div className="navbar-2">
            <Link className="text-wrapper-119" to="/">Home</Link>
            <Link className="text-wrapper-120" to="/research-details">
              Research Details
            </Link>
            <Link className="text-wrapper-121" to="/resources">
              Resources
            </Link>
            <Link className="text-wrapper-122" to="/contact-us">
              Contact
            </Link>
            <div className="rectangle-21" />
          </div>
          <a
            className="text-wrapper-123"
            href="mailto:thamizh.research.usa@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            thamizh.research.usa@gmail.com
          </a>
          <div className="text-wrapper-124">Please email your queries</div>
        </div>
        <Component className="component-2" href="mailto:thamizh.research.usa@gmail.com" />
        <div className="overlap-41">
          <div className="overlap-42">
            <div className="ellipse-15" />
            <img className="image-56" alt="Image" src="/img/image-19.png" />
            <img className="image-57" alt="Image" src="/img/image-30.png" />
          </div>
          <div className="text-wrapper-125">தன்னார்வத் தொண்டு</div>
          <a
            className="button-10"
            href="https://docs.google.com/forms/d/e/1FAIpQLScf4e5DQk5hiCPL5BTo8nejKUq5btmbqA7PvzpX-9pmQcLUYg/viewform?usp=sf_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="overlap-43">
              <div className="text-wrapper-126">Volunteer</div>
            </div>
          </a>
          <p className="text-wrapper-127">Interested in lending a helping hand?</p>
        </div>
      </div>
    </div>
  );
};
