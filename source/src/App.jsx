import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeWrapper } from "./screens/WrapperScreens/HomeWrapper";
import { ResearchDetailsWrapper } from "./screens/WrapperScreens/HomeWrapper";

import { Screen12 as Home } from "./screens/Screen12";
import { Screen7 as ResearchDetails } from "./screens/Screen7";
import { DesktopScreen as Resources } from "./screens/DesktopScreen";
import { Screen11 as ContactUs } from "./screens/Screen11";

import { IphonePlus } from "./screens/IphonePlus";
import { Desktop as ResourcesTab2 } from "./screens/Desktop";
import { IphonePlusScreen } from "./screens/IphonePlusScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen13 } from "./screens/Screen13";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeWrapper />,
  },
  {
    path: "/iphone-8-plus-1",
    element: <IphonePlus />,
  },
  {
    path: "/resources-tab-2",
    element: <ResourcesTab2 />,
  },
  {
    path: "/iphone-8-plus-2",
    element: <IphonePlusScreen />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/iphone-8-plus-6",
    element: <DivWrapper />,
  },
  {
    path: "/iphone-8-plus-5",
    element: <Screen5 />,
  },
  {
    path: "/iphone-8-plus-9",
    element: <Screen6 />,
  },
  {
    path: "/research-details",
    element: <ResearchDetailsWrapper />,
  },
  {
    path: "/iphone-8-plus-8",
    element: <Screen8 />,
  },
  {
    path: "/iphone-8-plus-7",
    element: <Screen9 />,
  },
  {
    path: "/iphone-8-plus-3",
    element: <Screen10 />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/iphone-8-plus-4",
    element: <Screen13 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
