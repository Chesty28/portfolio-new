import React from 'react';
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoFacebook,
    IoLogoInstagram
} from 'react-icons/io';

import s from './SocialTab.module.css';

const SocialTab = props => {
    let icon;
    

    switch (props.icon) {
        case 'linkedin':
            icon = <IoLogoLinkedin />;
        break;

        case 'github':
            icon = <IoLogoGithub />;
        break;

        case 'facebook':
            icon = <IoLogoFacebook />;
        break;

        case 'instagram':
            icon = <IoLogoInstagram />;
        break;
    }

    return (
        <div onClick={() => window.open(props.url)} className={[s.socialTab, s[props.icon]].join(' ')}>
            <div className={s.socialIcon}>{icon}</div>
        </div>
    );
};

export default SocialTab;