import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router'
import theme from '../src/theme';
import * as gtag from '../lib/gtag'
export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const title = "Agente - Campanha NFP"
  const description = `Transforme seus gastos em impacto social`
  const author = `Agente`

  return (
    <React.Fragment>
      <Head>
        <title>Agente - Campanha NFP</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content="Agente, Nota Fiscal Paulista, NFP, Doação, Impacto Social" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
