import React from 'react';

import s from './IndexPage.module.css';

const IndexPage = () => {
	return (
		<div>
			<nav className={s.navbar}>
				<ul></ul>
			</nav>
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
	);
};

export default IndexPage;
