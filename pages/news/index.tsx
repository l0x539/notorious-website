import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Head from 'next/head';
import PublicPage from '../../components/layout/PublicPage';
import News from '../../components/templates/News';
import dbConnect from '../../lib/dbConnect';
import {INews} from '../../lib/types';
import NewsModel from '../../models/News';

const Main: NextPage<{
  news: INews[]
}> = ({news}) => {
  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates | News</title>
        <meta name="description" content="Notorious Pirates News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <News news={news} />
    </PublicPage>
  );
};

export default Main;

export const getServerSideProps = async ({req, res}:
  {
    req: NextApiRequest,
    res: NextApiResponse
  }) => {
  await dbConnect();
  const result = await NewsModel.find({}).limit(14);
  const news = result.map((doc: INews) => {
    const article = doc.toObject() as any;
    article._id = article._id.toString();
    return article;
  });

  return {
    props: {
      news,
    },
  };
};
