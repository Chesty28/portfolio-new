import React from 'react';

import s from './Backdrop.module.css';

const Backdrop = props => {
    return (
        <div className={s.backdrop}>
            {props.children}
        </div>
    );
};

export default Backdrop;