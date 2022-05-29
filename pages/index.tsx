import type {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Head from 'next/head';
import PublicPage from '../components/layout/PublicPage';
import Main from '../components/templates/Main';
import dbConnect from '../lib/dbConnect';
import {ICard, INews} from '../lib/types';
import Card from '../models/Card';
import News from '../models/News';
// import styles from '../styles/Home.module.scss'

const Home: NextPage<{
  cards: ICard[];
  mainNews: INews[];
}> = ({cards, mainNews}) => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates</title>
        <meta name="description" content="Notorious Pirates Main website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main cards={cards} mainNews={mainNews} />
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
  const resultCards = await Card.find({}).limit(14);
  const resultNews = await News.find({}).limit(5);
  const cards = resultCards.map((doc: ICard) => {
    const card = doc.toObject();
    card._id = card._id.toString();
    return card;
  });

  const mainNews = resultNews.map((doc: ICard) => {
    const article = doc.toObject();
    article._id = article._id.toString();
    return article;
  });

  return {
    props: {
      cards,
      mainNews,
    },
  };
};
