import React from 'react';

const Copyright = () => {
    const style = {
        position: 'absolute',
        left: '50%',
        bottom: '5px',
        transform: 'translateX(-50%)',
        fontSize: '120%',
    };

    return (
        <p style={style}>&copy; Petr Šudoma {new Date().getFullYear()}</p>
    );
};

export default Copyright;