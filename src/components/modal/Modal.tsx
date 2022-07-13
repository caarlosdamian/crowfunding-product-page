import React from 'react'
import { useDispatch } from 'react-redux';
import closeModal from '../../images/icon-close-modal.svg'
import { toogleModal } from '../../redux/toggle/toggleSlice';
import './Modal.scss'

export const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className='modal-container'>
        <div className='modal-content'>
          <img src={closeModal} alt="closeModal"  className='close-modal' onClick={()=>dispatch(toogleModal())}/>
            <h1 className="modal-header">Back this project</h1>
            <p className="modal-text">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
        </div>
    </div>
  )
}
