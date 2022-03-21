import type {NextPage} from 'next';
import Head from 'next/head';
import PublicPage from '../components/layout/PublicPage';
import Main from '../components/templates/Main';
// import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates</title>
        <meta name="description" content="Notorious Pirates Main website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </PublicPage>
  );
};

export default Home;
