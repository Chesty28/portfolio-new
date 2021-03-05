import React, { useContext } from 'react';
import { Context} from '../../context/context';
import { BsPerson, BsCodeSlash, BsChatSquareDots } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

import s from  './Navbar.module.css';

const Navbar = () => {
    const context = useContext(Context);

    return (
        <nav className={s.navbar}>
                <p onClick={() => context.activateIndexPage()} className={s.navbar__list__indexLink__text}>P</p>
                
				<ul className={s.navbar__list}>
                    <li className={[s.navbar__list__item, s.firstListItem].join(' ')}
                        onClick={() => context.activateMePage()}
                        style={{color: context.mePage && '#18D5F2'}}
                        ><span className={s.linkSpan}>Me</span>
                        <BsPerson className={[s.navbar__list__icon, s.personIcon].join(' ')} style={{color: context.mePage && '#18D5F2'}} />
                    </li>

                    <li className={s.navbar__list__item}
                        onClick={() => context.activateSkillsPage()}
                        style={{color: context.skillsPage && '#18D5F2'}}
                        ><span className={s.linkSpan}>Skills</span>
                        <BsCodeSlash className={s.navbar__list__icon} style={{color: context.skillsPage && '#18D5F2'}} />
                    </li>
                    
                    <li className={s.navbar__list__item}
                        onClick={() => context.activateProjectsPage()}
                        style={{color: context.projectsPage && '#18D5F2'}}
                        ><span className={s.linkSpan}>Projects</span>
                        <CgWebsite className={s.navbar__list__icon} style={{color: context.projectsPage && '#18D5F2'}} />
                    </li>

                    <li className={s.navbar__list__item}
                        onClick={() => context.activateContactPage()}
                        style={{color: context.contactPage && '#18D5F2'}}
                        ><span className={s.linkSpan}>Contact</span>
                        <BsChatSquareDots className={s.navbar__list__icon} style={{color: context.contactPage && '#18D5F2'}} />
                    </li>
                </ul>
			</nav>
    );
};

export default Navbar;