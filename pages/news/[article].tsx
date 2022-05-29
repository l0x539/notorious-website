import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import PublicPage from '../../components/layout/PublicPage';
import Article from '../../components/templates/Article';
import dbConnect from '../../lib/dbConnect';
import {INews} from '../../lib/types';
import News from '../../models/News';


const NewsArticle: NextPage<{
  article: INews
}> = ({article}) => {
  const router = useRouter();
  router.query.article;

  return (
    <PublicPage>
      <Head>
        <title>Notorious Pirates | News Articles </title>
        <meta name="description" content="Notorious Pirates Main website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article article={article}/>
    </PublicPage>
  );
};

export default NewsArticle;

export const getServerSideProps = async ({
  params,
  req,
  res,
}: {
  params:any;
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  await dbConnect();

  const article = await News.findById(params.article).lean();
  article._id = article._id.toString();

  return {props: {
    article,
  }};
};
