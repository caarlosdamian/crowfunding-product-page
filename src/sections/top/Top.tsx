import React from "react";
import { Button } from "../../components/button/Button";
import { ButtonIcon } from "../../components/buttonIcon/ButtonIcon";
import logo from "../../images/logo-mastercraft.svg";
import "./Top.scss";

interface TopProps {
    showMenu: boolean;
}

export const Top = ({showMenu}:TopProps) => {
  return (
    <div className={`top-container ${showMenu && 'showmenu' || ''}`}>
      <img src={logo} alt="logo-master" className="logo-master" />
      <span className="top-header">Mastercraft Bamboo Monitor Riser</span>
      <span className="top-subtitle">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </span>
      <div className="top-button-container">
        <Button label="Back this project" type="primary large" />
        <ButtonIcon />
      </div>
    </div>
  );
};
