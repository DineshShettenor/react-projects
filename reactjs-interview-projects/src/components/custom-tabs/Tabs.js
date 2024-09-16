import React, { useState } from "react";

export const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabsIndex, setCurrentTabsIndex] = useState(0);
  const handleTabsChange = (currentIndex) => {
    setCurrentTabsIndex(currentIndex);
    onChange(currentIndex);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabsItem, index) => (
          <div
            key={tabsItem.label}
            onClick={() => handleTabsChange(index)}
            className={`tab-item ${
              currentTabsIndex === index ? "active" : ""
            }`}
          >
            <span className="label">{tabsItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabsIndex] && (
          <div>{tabsContent[currentTabsIndex].content}</div>
        )}
      </div>
    </div>
  );
};
