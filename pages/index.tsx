import type {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Head from 'next/head';
import PublicPage from '../components/layout/PublicPage';
import Main from '../components/templates/Main';
import dbConnect from '../lib/dbConnect';
import {ICard} from '../lib/types';
import Card from '../models/Card';
// import styles from '../styles/Home.module.scss'

const Home: NextPage<{
  cards: ICard[]
}> = ({cards}) => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates</title>
        <meta name="description" content="Notorious Pirates Main website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main cards={cards} />
    </PublicPage>
  );
};

export default Home;

export const getServerSideProps = async ({req, res}:
  {
    req: NextApiRequest,
    res: NextApiResponse
  }) => {
  await dbConnect();
  const result = await Card.find({}).limit(14);
  const cards = result.map((doc: ICard) => {
    const card = doc.toObject();
    card._id = card._id.toString();
    return card;
  });

  return {
    props: {
      cards,
    },
  };
};
