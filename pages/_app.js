import GlobalStyle from "../src/components/GlobalStyle";
import Head from 'next/head';
import AuthProvider from "../src/contexts/AuthContext";

export default function MyApp({ Component, pageProps }) {
  // roda em todas as páginas
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <title>Aluracord</title>
      </Head>
      <GlobalStyle/>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}