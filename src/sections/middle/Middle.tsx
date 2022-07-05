import React from "react";
import { Bar } from "../../components/bar/Bar";
import "./Middle.scss";
import { useSelector } from "react-redux";

export const Middle = () => {
  const { menuActive } = useSelector((state: any) => state.toggle);

  return (
    <div className={`middle-container ${(menuActive && "active") || ""}`}>
      <div className="middle-top-container">
        <div className="middle-top-container-labels">
          <span className="middle-top-container-header-label">$89,914</span>
          <span className="middle-top-container-subtitle-label">
            of $100,000 backed
          </span>
        </div>
        <div className="middle-top-container-labels test">
          <span className="middle-top-container-header-label">5,007</span>
          <span className="middle-top-container-subtitle-label">
            total backers
          </span>
        </div>
        <div className="middle-top-container-labels">
          <span className="middle-top-container-header-label">56</span>
          <span className="middle-top-container-subtitle-label">days left</span>
        </div>
      </div>
      <Bar />
    </div>
  );
};
