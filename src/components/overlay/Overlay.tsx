import React from "react";
import { useDispatch } from "react-redux";
import { toogleFalse, toogleModal } from "../../redux/toggle/toggleSlice";
import "./Overlay.scss";

export const Overlay = () => {
  const dispatch = useDispatch();
  const handleCloseOverlay = () => {
    dispatch(toogleFalse());
    dispatch(toogleModal());
  }
  return (
    <div className="overlay" onClick={handleCloseOverlay}>
      Overlay
    </div>
  );
};
