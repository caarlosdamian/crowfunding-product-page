import React, { useState } from "react";
import './Bar.scss';

export const Bar = () => {
  const [progress, setProgress] = useState(80);
  return (
    <div className="checking">
      <div className="bar-container" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
