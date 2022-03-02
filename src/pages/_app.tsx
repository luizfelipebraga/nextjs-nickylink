import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../styles/globalStyle'
import IndexPage from './index';
import config from 'react-reveal/globals';

function MyApp({ Component, pageProps }: AppProps) {
  config({ ssrFadeout: true });

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
