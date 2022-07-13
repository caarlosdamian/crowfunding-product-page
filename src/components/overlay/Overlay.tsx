import React from "react";
import { useDispatch } from "react-redux";
import { toogleFalse } from "../../redux/toggle/toggleSlice";
import "./Overlay.scss";

export const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <div className="overlay" onClick={() => dispatch(toogleFalse())}>
      Overlay
    </div>
  );
};
