import React, { useState } from 'react';

export const Context = React.createContext({
    mePage: false,
    skillsPage: false,
    projectsPage: false,
    contactPage: false,
    activateMePage: () => {},
    activateSkillsPage: () => {},
    activateProjectsPage: () => {},
    activateContactPage: () => {}
});

const ContextProvider = props => {
    const [mePage, setMePage] = useState(false);
    const [skillsPage, setSkillsPage] = useState(false);
    const [projectsPage, setProjectsPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);

    const activateMePage = () => {
        setMePage(true);
        setSkillsPage(false);
        setProjectsPage(false);
        setContactPage(false);
    };

    const activateSkillsPage = () => {
        setMePage(false);
        setSkillsPage(true);
        setProjectsPage(false);
        setContactPage(false);
    };

    const activateProjectsPage = () => {
        setMePage(false);
        setSkillsPage(false);
        setProjectsPage(true);
        setContactPage(false);
    };

    const activateContactPage = () => {
        setMePage(false);
        setSkillsPage(false);
        setProjectsPage(false);
        setContactPage(true);
    };

    return (
        <Context.Provider value={{
            mePage: mePage,
            skillsPage: skillsPage,
            projectsPage: projectsPage,
            contactPage: contactPage,
            activateMePage: activateMePage,
            activateSkillsPage: activateSkillsPage,
            activateProjectsPage: activateProjectsPage,
            activateContactPage: activateContactPage
        }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;