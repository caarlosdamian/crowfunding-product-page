import React from "react";
import { Button } from "../button/Button";
import "./SubBox.scss";

interface SubBoxProps {
  title: string;
  price: number;
  description: string;
}

export const SubBox = () => {
  return (
    <div className="subcription-box-wrapper">
      <div className="subcription-top-container">
        <span className="subcription-header">Bamboo Stand</span>
        <span className="subcription-subtext">Pledge $25 or more</span>
      </div>
      <span className="subcription-description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</span>
      <div className="subcription-bottom-container">
        <div className="subcrition-bottom-left">
          <span className="subcription-quantity">64</span>
          <span className="subcription-prhase">left</span>
        </div>
        <Button label="Select Reward" type="primary"/>
      </div>
    </div>
  );
};
