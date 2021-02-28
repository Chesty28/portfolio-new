import '../styles/globals.css';
import ContextProvider from '../context/context';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Petr Šudoma</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Nunito:ital,wght@0,200;0,400;1,400&display=swap" rel="stylesheet"/>
    </Head>
    <ContextProvider><Component {...pageProps} /></ContextProvider>
    </>
  )
}

export default MyApp
