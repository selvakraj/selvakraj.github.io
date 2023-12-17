import React from "react";
import { Screen12 as HomeDesktop } from "../Screen12";
import { IphonePlus as HomePhone } from "../IphonePlus";

import { Screen7 as ResearchDetailsDesktop } from "../Screen7";
import { IphonePlusScreen as ResearchDetailsMobile } from "../IphonePlusScreen";

import "./style.css";


export const HomeWrapper = () => {
  return (
    <>
        <div className="desktopHome">
            <HomeDesktop />
        </div>
        <div className="mobileHome">
            <HomePhone />
        </div>
    </>
  );
};

export const ResearchDetailsWrapper = () => {
    return (
      <>
          <div className="desktopHome">
              <ResearchDetailsDesktop />
          </div>
          <div className="mobileHome">
              <ResearchDetailsMobile />
          </div>
      </>
    );
  };
