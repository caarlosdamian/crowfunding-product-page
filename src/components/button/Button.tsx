import React from "react";
import './Button.scss'

interface BProps {
  label: string;
  onClick?: any;
  type: string;
}

export const Button = ({ label, type ,onClick}: BProps) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};
