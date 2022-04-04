import Head from 'next/head';
import PublicPage from '../components/layout/PublicPage';
import News from '../components/templates/News';
const Main = () => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates | News</title>
        <meta name="description" content="Notorious Pirates News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <News />
    </PublicPage>
  );
};

export default Main;
