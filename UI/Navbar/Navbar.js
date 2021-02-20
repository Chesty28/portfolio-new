import React, { useState, useContext } from 'react';
import { Context} from '../../context/context';
import { BsPerson, BsCodeSlash, BsChatSquareDots } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

import s from  './Navbar.module.css';

const Navbar = () => {
    const [meHover, setMeHover] = useState(false);
    const [skillsHover, setSkillsHover] = useState(false);
    const [projectsHover, setProjectsHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);

    const context = useContext(Context);

    return (
        <nav className={s.navbar}>
				<ul className={s.navbar__list}>
                    <li className={s.navbar__list__item}
                        onMouseEnter={() => setMeHover(true)}
                        onMouseLeave={() => setMeHover(false)}
                        onClick={() => context.activateMePage()}
                        style={meHover ? {color: '#18d5f2'} : {color: '#666'}}><span className={s.linkSpan}>Me</span>
                        <BsPerson
                            onMouseEnter={() => setMeHover(true)}
                            onMouseLeave={() => setMeHover(false)}
                            className={s.navbar__list__icon}
                            style={meHover ? {color: '#18d5f2'} : null}
                        />
                    </li>
                    <li className={s.navbar__list__item}
                        onMouseEnter={() => setSkillsHover(true)}
                        onMouseLeave={() => setSkillsHover(false)}
                        onClick={() => context.activateSkillsPage()}
                        style={skillsHover ? {color: '#18d5f2'} : {color: '#666'}}><span className={s.linkSpan}>Skills</span>
                        <BsCodeSlash
                            onMouseEnter={() => setSkillsHover(true)}
                            onMouseLeave={() => setSkillsHover(false)}
                            className={s.navbar__list__icon}
                            style={skillsHover ? {color: '#18d5f2'} : null}
                        />
                    </li>
                    <li className={s.navbar__list__item}
                        onMouseEnter={() => setProjectsHover(true)}
                        onMouseLeave={() => setProjectsHover(false)}
                        style={projectsHover ? {color: '#18d5f2'} : {color: '#666'}}><span className={s.linkSpan}>Projects</span>
                        <CgWebsite
                            onMouseEnter={() => setProjectsHover(true)}
                            onMouseLeave={() => setProjectsHover(false)}
                            className={s.navbar__list__icon}
                            style={projectsHover ? {color: '#18d5f2'} : null}
                        />
                    </li>
                    <li className={s.navbar__list__item}
                        onMouseEnter={() => setContactHover(true)}
                        onMouseLeave={() => setContactHover(false)}
                        style={contactHover ? {color: '#18d5f2'} : {color: '#666'}}><span className={s.linkSpan}>Contact</span>
                        <BsChatSquareDots
                            onMouseEnter={() => setContactHover(true)}
                            onMouseLeave={() => setContactHover(false)}
                            className={s.navbar__list__icon}
                            style={contactHover ? {color: '#18d5f2'} : null}
                        />
                    </li>
                </ul>
			</nav>
    );
};

export default Navbar;