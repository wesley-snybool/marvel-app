import type { AppProps } from 'next/app';
import { globalCss } from '../global.styles';
import { LoginProvider } from '../src/contexts/loguin/contextLogin';

const GlobalRemoveCss = globalCss({
  '*': {
    margin: '0',
    padding: '0',
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LoginProvider>
    <main className={GlobalRemoveCss()}>
      <Component {...pageProps} />
    </main>
  </LoginProvider>
);

export default MyApp;
