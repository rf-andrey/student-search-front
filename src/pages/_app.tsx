import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'reakit';

import { createApolloClient } from '@libs/apollo-graphql/apolloClient';
import DefaultTheme from '@libs/styled-components/defaultTheme';
import { GlobalStyle } from '@libs/styled-components/globalStyle';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

interface ApplicationProps extends AppProps {
  api: string;
}

const App: NextPage<ApplicationProps> = props => {
  const { Component, pageProps, api } = props;
  const client = createApolloClient(api);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApolloProvider client={client}>
        <Provider>
          <DefaultTheme>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer />
          </DefaultTheme>
        </Provider>
      </ApolloProvider>
    </>
  );
};

export async function getStaticProps() {
  const api = process.env.API_URL;

  return {
    props: {
      api,
    },
  };
}

export default App;
