import React, { useState } from 'react';
import Image from 'next/image';

import Modal from '../../../UI/Modal/Modal';

import s from './Project.module.css';

const Project = props => {
	const [activeModal, setActiveModal] = useState(false);

    const projectClass = props.middle ? [s.project, s.projectMiddle].join(' ') : s.project;
    const projectTextClass = props.middle ? [s.projectText, s.middle].join(' ') : s.projectText;

	const clickFunction = props.url ? () => window.open(props.url) : () => setActiveModal(true);

	const closeModal = () => {
		setActiveModal(false);
	}


	return (
		<>
			<Modal closeModal={closeModal} active={activeModal}>The page is not available yet</Modal>
			<div className={projectClass} onClick={clickFunction}>
				<div className={s.projectHeaderContainer}>
					<p className={s.projectHeader}>{props.header}</p>
				</div>
				<div className={s.hoverbox}>
					<img className={s.hoverboxImage} src={props.image} alt={props.alt}/>
					<p className={s.hoverboxText}>Click for more</p>
				</div>
				<div className={s.flexbox}>
					<p className={projectTextClass}>
						{props.children}
					</p>
				</div>
				<p className={s.hoverMe}>Hover for more</p>
			</div>
		</>
	);
};

export default Project;
