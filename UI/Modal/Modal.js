import React, { useState } from 'react';

import Backdrop from './Backdrop/Backdrop';

import s from './Modal.module.css';

const Modal = props => {

    return (
        <>
            {props.active
            ? 
            <Backdrop>
                <div className={s.modal}>
                    <p className={s.modalText}>{props.children}</p>
                    <button onClick={props.closeModal} className={s.modalButton}>OK</button>
                </div>
            </Backdrop>
            :
            null}
        </>
    )
};

export default Modal;