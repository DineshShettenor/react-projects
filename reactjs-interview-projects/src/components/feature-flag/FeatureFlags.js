import React, { useContext } from "react";
import { LightDarkMode } from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tact-toe";
import { RandomColor } from "../random-color/RandomColor";
import Accordian from "../accordian";
import { TreeView } from "../tree-view/TreeView";
import { TabsTest } from "../custom-tabs/TabsTest";
import { FeatureFlagContext } from "./context";
import menus from "../tree-view/data";

export const FeatureFlags = () => {
const {loading, enabledFlags} = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
        key: "showTicTacToeBoard",
        component: <TicTacToe />,
      },
      {
        key: "showRandomColorGenerator",
        component: <RandomColor />,
      },
      {
        key: "showAccordian",
        component: <Accordian />,
      },
      {
        key: "showTreeView",
        component: <TreeView menus={menus}/>,
      },
      {
        key: "showTabs",
        component: <TabsTest />,
      },
  ];

  const checkEnbledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  }

  if(loading){
    return <h1>Data is Loding Plese Wait....</h1>
  }

  return <div>
    <h1>FeatureFlags</h1>
    {
        componentsToRender.map((componentItem, index) => (checkEnbledFlags(componentItem.key) ? <div key={index}>{componentItem.component}</div> : null))
    }
  </div>;
};
