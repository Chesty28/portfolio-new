import React from 'react';

import s from './Project.module.css';

const Project = props => {
    const projectClass = props.middle ? [s.project, s.projectMiddle].join(' ') : s.project;
    const projectTextClass = props.middle ? [s.projectText, s.middle].join(' ') : s.projectText;

	return (
		<div className={projectClass}>
			<div className={s.projectHeaderContainer}>
				<p className={s.projectHeader}>{props.header}</p>
			</div>
			<div className={s.hoverbox}>
                <img className={s.hoverboxImage} src={props.image}/>
                <p className={s.hoverboxText}>Click for more</p>
            </div>
			<div className={s.flexbox}>
				<p className={projectTextClass}>
					{props.children}
				</p>
			</div>
			<p className={s.hoverMe}>Hover for more</p>
		</div>
	);
};

export default Project;
