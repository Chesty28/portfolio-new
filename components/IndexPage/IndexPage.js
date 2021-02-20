import React, { useContext } from 'react';

import Navbar from '../../UI/Navbar/Navbar';
import Copyright from '../../UI/Copyright/Copyright';
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
                    <span className={[s.span, s.an1].join(' ')}>H</span>
                    <span className={[s.span, s.an2].join(' ')}>i</span>
                    <span className={[s.span, s.an1].join(' ')}>, </span>
                    <span> </span>
                    <span className={[s.span, s.an1].join(' ')}>I</span>
                    <span className={[s.span, s.an2].join(' ')}>'</span>
                    <span className={[s.span, s.an2].join(' ')}>m</span>
                    <br />
                    <span className={[s.span, s.an2].join(' ')}>P</span>
                    <span className={[s.span, s.an3].join(' ')}>e</span>
                    <span className={[s.span, s.an1].join(' ')}>t</span>
                    <span className={[s.span, s.an2].join(' ')}>r</span>
                    <span> </span>
                    <span className={[s.span, s.an2].join(' ')}>Š</span>
                    <span className={[s.span, s.an3].join(' ')}>u</span>
                    <span className={[s.span, s.an2].join(' ')}>d</span>
                    <span className={[s.span, s.an1].join(' ')}>o</span>
                    <span className={[s.span, s.an2].join(' ')}>m</span>
                    <span className={[s.span, s.an1].join(' ')}>a</span>
                </h1>
                <p className={s.logo}>P</p>
            </div>
            <Copyright />
		</div>
	);
};

export default IndexPage;
