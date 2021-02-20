import React, { useContext } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';

import s from './SkillsPage.module.css';

const SkillsPage = () => {
    const context = useContext(Context);

    const style = {
        width: '100vw',
        height: '100vh',
        background: '#222',
        position: 'absolute',
        transform: context.skillsPage ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.7s'
    };

    return (
        <div style={style}>
            <Navbar />
            <img className={s.skillsImage} src='/skills-image.svg' />
        </div>
    );
};

export default SkillsPage;