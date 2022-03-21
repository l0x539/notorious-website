import '../styles/globals.scss';
import type {AppProps} from 'next/app';
/* eslint linebreak-style: ["error", "windows"]*/

const MyApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
