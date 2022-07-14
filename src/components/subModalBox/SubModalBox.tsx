import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ISubBoxProps } from "../../interfaces";
import { Button } from "../button/Button";
import "./subModalBox.scss";

export const SubModalBox = ({ subscription }: ISubBoxProps) => {
  const [selected, setselected] = useState(false);
 const {width} =  useWindowSize()
  const { buttonLabel, description, disable, pledge, quantity, title } =
    subscription;
  return (
    <div
      className={`sub-modal-container ${
        (selected && !disable && "active") || ""
      } ${(disable && "disable") || ""}`}
    >
      <div className={`top-sub-modal-container`}>
        <div className="left-check-container">
          <input
            type="checkbox"
            checked={selected}
            className="checkbox-custom"
            onClick={() => setselected(!selected)}
            disabled={disable && true}
          />
        </div>
        <div className="top-sub-modal-container-left">
          <h1 className="top-sub-modal-header-left">{title}</h1>
          {pledge !== 0 && (
            <h1 className="top-sub-modal-subtitle-left">
              Pledge ${pledge} or more
            </h1>
          )}
        </div>
        <div className="top-sub-modal-container-right">
          <h1 className="top-sub-modal-header-right">{quantity}</h1>
          <h1 className="top-sub-modal-subtitle-right">left</h1>
        </div>
      </div>
      <span className={`sub-modal-descripton ${(selected && "active") || ""}`}>
        {description}
      </span>
      <div className="top-sub-modal-container-right-mobile">
          <h1 className="top-sub-modal-header-right-mobile">{quantity}</h1>
          <h1 className="top-sub-modal-subtitle-right-mobile">left</h1>
        </div>
      {selected && quantity !== 0 && (
        <div className="bottom-sub-modal-container">
          <div className="left-bottom-box-container">
            <span className="left-bottom-header">Enter your pledge</span>
          </div>
          <div className="right-bottom-box-container">
            <div className="input-bottom-container">
              <span className="label-imput-bottom">$</span>
              <input
                type="text"
                className="bottom-container-input"
                placeholder="25"
              />
            </div>
            <Button label="Continue" type="primary small" />
          </div>
        </div>
      )}
    </div>
  );
};
