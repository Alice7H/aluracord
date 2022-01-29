import GlobalStyle from "../src/components/GlobalStyle";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  // roda em todas as páginas
  return (
    <>
     <Head>
          <title>Aluracord</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}