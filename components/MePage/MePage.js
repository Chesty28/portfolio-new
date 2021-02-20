import React, { useContext } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';
import Copyright from '../../UI/Copyright/Copyright';

import s from './MePage.module.css';
import ans from '../IndexPage/IndexPage.module.css';

const MePage = () => {
	const context = useContext(Context);

	const style = {
		width: '100vw',
		height: '100vh',
		background: '#222',
		position: 'absolute',
		transform: context.mePage ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.7s',
	};

	return (
		<div className={s.mePage} style={style}>
			<Navbar />
			<h2 className={s.sectionHeader}>
				<span className={[ans.span, ans.an1].join(' ')}>A</span>
				<span className={[ans.span, ans.an2].join(' ')}>b</span>
				<span className={[ans.span, ans.an3].join(' ')}>o</span>
				<span className={[ans.span, ans.an2].join(' ')}>u</span>
				<span className={[ans.span, ans.an1].join(' ')}>t</span>
				<span> </span>
				<span className={[ans.span, ans.an2].join(' ')}>m</span>
				<span className={[ans.span, ans.an3].join(' ')}>e</span>
			</h2>

			<div className={s.meTextContainer}>
				<p className={s.meText}>
					<span className={s.mePinkSpan}>I am</span> 18 years and my
					passion is IT, especially{' '}
					<span className={s.meBlueSpan}>web development</span>
				</p>
				<p className={s.meText}>
					<span className={s.mePinkSpan}>I am</span> junior{' '}
					<span className={s.meBlueSpan}>fullstack developer</span>
				</p>
				<p className={s.meText}>
					<span className={s.mePinkSpan}>I am</span> using{' '}
					<span className={s.meBlueSpan}>MERN stack</span>
				</p>
				<p className={s.meText}>
					<span className={s.mePinkSpan}>I am</span> working on my own
					startups <span className={s.meBlueSpan}>every day</span>
				</p>
			</div>
			<div className={s.ballContainer}>
				<div className={[s.ball, s.ball1].join(' ')}></div>
				<div className={[s.ball, s.ball2].join(' ')}></div>
				<div className={[s.ball, s.ball3].join(' ')}></div>
				<div className={[s.ball, s.ball4].join(' ')}></div>
			</div>
			<Copyright />
		</div>
	);
};

export default MePage;
