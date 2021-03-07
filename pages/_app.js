import '../styles/globals.css';
import ContextProvider from '../context/context';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Petr Šudoma</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Fullstack Web Developer Petr Šudoma. I'm using React, Express, MongoDB and other popular technologies for my development"></meta>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Nunito:ital,wght@0,200;0,400;1,400&display=swap" rel="stylesheet"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
      <meta name="msapplication-TileColor" content="#222222"/>
      <meta name="theme-color" content="#ffffff"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-P2Q8TGBSY0"></script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P2Q8TGBSY0');
          `
            }}
      />
    </Head>
    <ContextProvider><Component {...pageProps} /></ContextProvider>
    </>
  )
}

export default MyApp
