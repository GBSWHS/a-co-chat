import Head from "@/components/Head";
import { GlobalStyle } from "@/style/globals";
import { AppProps } from "next/dist/shared/lib/router/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Component {...pageProps} />
    </>
  )
}