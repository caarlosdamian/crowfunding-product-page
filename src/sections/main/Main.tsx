import React from "react";
import { useSelector } from "react-redux";
import { SubBox } from "../../components/subBox/SubBox";
import { ISubscription } from "../../interfaces";
import "./Main.scss";

export const Main = () => {
  const subcriptions = useSelector((state: any) => state.subcriptions);
  console.log(subcriptions);
  return (
    <div className="main-container">
      <h2 className="main-header">About this project</h2>
      <span className="main-top-text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </span>
      <span className="main-down-text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </span>
      <div className="cards-container">
        {subcriptions.map((subscription: ISubscription) => (
          <>{subscription.principal && <SubBox subscription={subscription} />}</>
        ))}
      </div>
    </div>
  );
};
