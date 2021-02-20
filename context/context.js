import React, { useState } from 'react';

export const Context = React.createContext({
    indexPage: true,
    mePage: false,
    skillsPage: false,
    projectsPage: false,
    contactPage: false,
    activateIndexPage: () => {},
    activateMePage: () => {},
    activateSkillsPage: () => {},
    activateProjectsPage: () => {},
    activateContactPage: () => {}
});

const ContextProvider = props => {
    // Use reducer here ...
    const [indexPage, setIndexPage] = useState(true);
    const [mePage, setMePage] = useState(false);
    const [skillsPage, setSkillsPage] = useState(false);
    const [projectsPage, setProjectsPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);

    const activateIndexPage = () => {
        setIndexPage(true);
        setMePage(false);
        setSkillsPage(false);
        setProjectsPage(false);
        setContactPage(false);
    }

    const activateMePage = () => {
        setIndexPage(false);
        setMePage(true);
        setSkillsPage(false);
        setProjectsPage(false);
        setContactPage(false);
    };

    const activateSkillsPage = () => {
        setIndexPage(false);
        setMePage(false);
        setSkillsPage(true);
        setProjectsPage(false);
        setContactPage(false);
    };

    const activateProjectsPage = () => {
        setIndexPage(false);
        setMePage(false);
        setSkillsPage(false);
        setProjectsPage(true);
        setContactPage(false);
    };

    const activateContactPage = () => {
        setIndexPage(false);
        setMePage(false);
        setSkillsPage(false);
        setProjectsPage(false);
        setContactPage(true);
    };

    return (
        <Context.Provider value={{
            indexPage: indexPage,
            mePage: mePage,
            skillsPage: skillsPage,
            projectsPage: projectsPage,
            contactPage: contactPage,
            activateIndexPage: activateIndexPage,
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