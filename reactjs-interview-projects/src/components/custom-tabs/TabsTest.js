import React from "react";
import { Tabs } from "./Tabs";
import "./styles.css";

export const TabsTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleContentChange = (curretTabIndex) => {
    console.log(curretTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleContentChange} />;
};

function RandomComponent() {
  return <h1>Some random content</h1>;
}
