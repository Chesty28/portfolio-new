import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';
import Copyright from '../../UI/Copyright/Copyright';

import s from './SkillsPage.module.css';

const SkillsPage = () => {
    const context = useContext(Context);

    const [mobileImage, setMobileImage] = useState(false);

    const checkWidth = () => {
        if (window.innerWidth <= 570) {
            setMobileImage(true);
        } else {
            setMobileImage(false);
        }
    }

    const style = {
        width: '100vw',
        height: '100vh',
        background: '#222',
        position: 'absolute',
        transform: context.skillsPage ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.7s'
    };

    useEffect(() => {
        checkWidth();
        window.addEventListener('resize', checkWidth);
    }, [])

    return (
        <div style={style}>
            <Navbar />
            <img className={s.skillsImage} alt='skills image' src={mobileImage ? '/skills-image-phone.svg' : '/skills-image.svg'} />
            <Copyright />
        </div>
    );
};

export default SkillsPage;