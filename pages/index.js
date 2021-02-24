import React from 'react';
import Head from 'next/head';

import IndexPage from '../components/IndexPage/IndexPage';
import MePage from '../components/MePage/MePage';
import SkillsPage from '../components/SkillsPage/SkillsPage';
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';

const index = () => {
  return (
    <>
      <Head>
        <title>Petr Šudoma</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Nunito:ital,wght@0,200;0,400;1,400&display=swap" rel="stylesheet"/> 
      </Head>
      <IndexPage />
      <MePage />
      <SkillsPage />
      <ProjectsPage />
    </>
  );
};

export default index;