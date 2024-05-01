'use client'
import { FC } from 'react';
import './Modal.scss';

interface IModalPageProps {
  img: string, 
  title: string, 
  subTitle: string, 
  modalClose: any
}

const Modal: FC<IModalPageProps> = ({ img, title, subTitle, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} alt="" />
            </div>
            <p className="modal-subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
