import React, { useContext } from 'react';

import Navbar from '../../UI/Navbar/Navbar';
import Copyright from '../../UI/Copyright/Copyright';
import InteractiveText from '../../UI/InteractiveText/InteractiveText';
import { Context } from '../../context/context';

import s from './IndexPage.module.css';

const IndexPage = () => {
    const context = useContext(Context);

    const style = {
        background: '#222',
        position: 'absolute',
        transform: context.indexPage ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.7s'
    };

	return (
		<div className={s.indexPage} style={style}>
            <Navbar />
            <div className={s.hero}>
                <h1 className={s.header}>
                    <InteractiveText type='header'/>
                </h1>
                <p className={s.logo}>P</p>
            </div>
            <Copyright />
		</div>
	);
};

export default IndexPage;
