import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../styles/globalStyle'
import IndexPage from './index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <IndexPage />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
