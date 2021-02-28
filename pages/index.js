import React from 'react';
import Head from 'next/head';

import IndexPage from '../components/IndexPage/IndexPage';
import MePage from '../components/MePage/MePage';
import SkillsPage from '../components/SkillsPage/SkillsPage';
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';
import ContactPage from '../components/ContactPage/ContactPage';

const index = () => {
  return (
    <>
      <IndexPage />
      <MePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
};

export default index;