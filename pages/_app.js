import GlobalStyle from "../components/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  // roda em todas as páginas
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}