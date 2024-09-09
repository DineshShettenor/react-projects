import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export const MenuItem = ({ item }) => {
  const [displayChildrenCurrent, setDisplayChildrenCurrent] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    // console.log(getCurrentLabel)
    setDisplayChildrenCurrent({
      ...displayChildrenCurrent,
      [getCurrentLabel]: !displayChildrenCurrent[getCurrentLabel],
    });
  };
//   console.log(displayChildrenCurrent);

  return (
    <li className="menu-item-container">
      <div className="menu-item"
        onClick={() => handleToggleChildren(item.label)}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span>
            {displayChildrenCurrent[item.label] ? (
              <FaMinus color="#fff" size={24} />
            ) : (
              <FaPlus color="#fff" size={24} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildrenCurrent[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
