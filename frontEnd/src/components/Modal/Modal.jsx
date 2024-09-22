import React from 'react';
import './Modal.scss';

const Modal = ({ title, message, onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3>{title}</h3>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onCancel}>No</button>
                    <button className="btn-confirm" onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
