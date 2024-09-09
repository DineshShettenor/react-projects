import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => <MenuItem item={listItem} key={index}/>)
        : null}
    </ul>
  );
};
