import React, { useContext } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';

const MePage = () => {
    const context = useContext(Context);

    const style = {
        width: '100vw',
        height: '100vh',
        background: '#222',
        position: 'absolute',
        transform: context.mePage ? 'translate(0, -100%)' : 'translate(-100%, -100%)',
        transition: 'transform 0.7s'
    };

    return (
        <div style={style}>
            <Navbar />
            me page
        </div>
    );
};

export default MePage;