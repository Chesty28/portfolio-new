import React from 'react';
import Head from 'next/head';

import IndexPage from '../components/IndexPage/IndexPage';

const index = () => {
  return (
    <>
      <Head>
        <title>Petr Šudoma</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Nunito:ital,wght@0,200;0,400;1,400&display=swap" rel="stylesheet"/> 
      </Head>
      <IndexPage />
    </>
  );
};

export default index;