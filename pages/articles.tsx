import Head from 'next/head';
import PublicPage from '../components/layout/PublicPage';
import Articles from '../components/templates/Articles';

const ArticlesPage = () => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates | News Articles </title>
        <meta name="description" content="Notorious Pirates Main website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles/>
    </PublicPage>
  );
};

export default ArticlesPage;
