import React from "react";
import { Link } from "react-router-dom";
import { GroupWrapper } from "../../components/GroupWrapper";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="iphone-plus-6">
        <div className="overlap-33">
          <Link to="/iphone-8-plus-5">
            <img className="image-49" alt="Image" src="/img/image-46.png" />
          </Link>
          <Link to="/iphone-8-plus-1">
            <img className="logo-4" alt="Logo" src="/img/resarch-badge2024-2.png" />
          </Link>
        </div>
        <GroupWrapper className="group-87" href="mailto:thamizh.research.usa@gmail.com" />
        <Link className="text-wrapper-101" to="/iphone-8-plus-8">
          Contact
        </Link>
        <div className="group-88">
          <div className="overlap-34">
            <p className="text-wrapper-102">Interested in lending a helping hand?</p>
            <div className="overlap-35">
              <div className="ellipse-11" />
              <img className="image-50" alt="Image" src="/img/image-19.png" />
              <img className="image-51" alt="Image" />
            </div>
            <a
              className="button-9"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2MHtkp-xyJewRHGusKrn0GYXrggeoheoW25-OoQRXH-ZnMw/viewform"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="overlap-group-19">
                <div className="text-wrapper-103">Volunteer</div>
              </div>
            </a>
            <div className="text-wrapper-104">தன்னார்வத் தொண்டு</div>
          </div>
        </div>
      </div>
    </div>
  );
};
