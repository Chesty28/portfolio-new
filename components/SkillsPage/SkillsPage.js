import React, { useContext } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';

const SkillsPage = () => {
    const context = useContext(Context);

    const style = {
        width: '100vw',
        height: '100vh',
        background: '#222',
        position: 'absolute',
        transform: context.skillsPage ? 'translate(0, -100%)' : 'translate(-100%, -100%)',
        transition: 'transform 0.7s'
    };

    return (
        <div style={style}>
            <Navbar />
            skills page
        </div>
    );
};

export default SkillsPage;