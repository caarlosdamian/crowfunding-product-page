import React from "react";
import { navItems } from "../../utils/data";
import './BoxMenu.scss';

export const BoxMenu = () => {
  return (
    <ul className="box-menu-container">
      {navItems.map((item) => (
        <li className="item-box-menu" key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
