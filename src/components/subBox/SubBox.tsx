import React from "react";
import { useDispatch } from "react-redux";
import { ISubBoxProps, ISubscription } from "../../interfaces";
import { toogleModal } from "../../redux/toggle/toggleSlice";
import { Button } from "../button/Button";
import "./SubBox.scss";



export const SubBox = ({ subscription }: ISubBoxProps) => {
  const { title, pledge, description, quantity, disable } = subscription;
  const dispatch = useDispatch();

  const handleOpenModal = async () =>{
    console.log("open modal");
    window.scrollTo(0, 0)
    await dispatch(toogleModal());
  }
  return (
    <div className="subcription-box-wrapper">
      <div className="subcription-top-container">
        <span className={`subcription-header ${disable && 'disable' || ''}`}>{title}</span>
        <span className={`subcription-subtext ${disable && 'disable' || ''}`}>Pledge ${pledge} or more</span>
      </div>
      <span className={`subcription-description ${disable && 'disable' || ''}`}>{description}</span>
      <div className="subcription-bottom-container">
        <div className="subcrition-bottom-left">
          <span className={`subcription-quantity ${disable && 'disable' || ''}`}>{quantity}</span>
          <span className={`subcription-prhase ${disable && 'disable' || ''}`}>left</span>
        </div>
        <Button
          label={(disable && "Out of stock") || "Select Reward"}
          type={(disable && "disable") || "primary"}
          onClick={!disable && handleOpenModal || undefined}
        />
      </div>
    </div>
  );
};
