import React from "react";
import { useDispatch, useSelector } from "react-redux";
import closeModal from "../../images/icon-close-modal.svg";
import { ISubscription } from "../../interfaces";
import {
  toogleModal,
  toogleModalSuccess,
} from "../../redux/toggle/toggleSlice";
import { subscriptions } from "../../utils/data";
import { SubModalBox } from "../subModalBox/SubModalBox";
import check from "../../images/icon-check.svg";
import "./Modal.scss";
import { Button } from "../button/Button";

export const Modal = () => {
  const dispatch = useDispatch();
  const { modalSucces } = useSelector((state: any) => state.toggle);

  const closeAllModals = () => {
    dispatch(toogleModal());
    dispatch(toogleModalSuccess());
  };
  return (
    <div className={`modal-container ${(modalSucces && "success") || ""}`}>
      {modalSucces ? (
        <div className="modal-success-container">
          <img src={check} alt="check" className="succes-img" />
          <span className="succes-header">Thanks for your support!</span>
          <span className="succes-text">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </span>
          <Button
            label="Got it!"
            type="primary small"
            onClick={closeAllModals}
          />
        </div>
      ) : (
        <>
          <div className="modal-content">
            <img
              src={closeModal}
              alt="closeModal"
              className="close-modal"
              onClick={() => dispatch(toogleModal())}
            />
            <h1 className="modal-header">Back this project</h1>
            <p className="modal-text">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?{" "}
            </p>
          </div>
          <div className="subcriptions-container">
            {subscriptions.map((item: ISubscription) => (
              <SubModalBox subscription={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
