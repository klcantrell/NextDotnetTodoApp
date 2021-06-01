import { useRef } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { DarkModeProvider } from '../context/dark-mode-state';
import '../styles/globals.css';

interface MyAppProps extends AppProps {
  initialDarkModeValue: boolean,
}

function MyApp({ Component, pageProps, initialDarkModeValue }: MyAppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  console.log(`Value is ${initialDarkModeValue}`);

  return (
    <DarkModeProvider initialValue={initialDarkModeValue}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const initialDarkModeValue = await getInitialDarkModeValue();

  return { ...appProps, initialDarkModeValue, };
};

async function getInitialDarkModeValue(): Promise<boolean> {
  console.log(`Running on the ${typeof window === 'undefined' ? 'server' : 'client'}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });
}

export default MyApp;
