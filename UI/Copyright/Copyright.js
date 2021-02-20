import React from 'react';

import s from './Copyright.module.css';

const Copyright = () => {
    return (
        <p className={s.copy}>&copy; Petr Šudoma {new Date().getFullYear()}</p>
    );
};

export default Copyright;