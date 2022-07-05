import React from "react";
import './Button.scss'

interface BProps {
  label: string;
  fn?: () => void;
  type: string;
}

export const Button = ({ label, fn, type }: BProps) => {
  return (
    <button className={`button ${type}`} onClick={fn}>
      {label}
    </button>
  );
};
