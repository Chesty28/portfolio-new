import React, { useContext } from 'react';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';
import Copyright from '../../UI/Copyright/Copyright';
import Project from './Project/Project';

import s from './ProjectsPage.module.css';

const ProjectsPage = () => {
	const context = useContext(Context);

	const style = {
		width: '100vw',
		minHeight: '100vh',
		background: '#222',
		position: 'absolute',
		transform: context.projectsPage ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.7s',
	};

	return (
		<div className={s.projectsPage} style={style}>
			<Navbar />

			<div className={s.projectsContainer}>
				<p className={s.clickMe}>Click tabs below to visit the pages</p>
				<Project 
					header='Old Portfolio' 
					image='/portfolio-screen.png' 
					available={true}
				>
					My old portfolio website
				</Project>

				<Project 
					header='School Done' 
					middle 
					available={false}
					image='/schooldone-screen.png'
				>
					My own startup for students
				</Project>

				<Project 
					header='Golden Rose' 
					available={false}
					image='/goldenrose-screen.png'>
					Placeholder website for beauty studio
				</Project>
			</div>

			<Copyright />
		</div>
	);
};

export default ProjectsPage;
