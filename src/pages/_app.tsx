import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { GlobalStyle } from '../styles/globalStyle'
import IndexPage from './index';
import config from 'react-reveal/globals';
import { useEffect, useLayoutEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  config({ ssrFadeout: true });

  const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
  
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

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
