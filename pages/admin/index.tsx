import {NextApiRequest, NextApiResponse} from 'next';
import Link from 'next/link';
import {FC} from 'react';
import Layout from '../../components/layout/adminLayout/Layout';
import {getSession} from '../../lib/session';

const Index: FC<{
  loggedIn: boolean;
}> = ({loggedIn}) => {
  return (<Layout loggedIn={loggedIn}>
    <div className='flex items-center justify-center'>
      <div className='mx-4'>
        <Link href="/admin/nft-cards">
          <a className='p-16 rounded border border-red-200
          hover:bg-cyan-500 hover:text-white'>NFT Cards</a>
        </Link>
      </div>
      <div className='mx-4'>
        <Link href="/admin/news">
          <a className='p-16 rounded border border-red-200
          hover:bg-cyan-500 hover:text-white'>News</a>
        </Link>
      </div>
    </div>
  </Layout>);
};

export default Index;

export const getServerSideProps = async ({req, res}:
  {
    req: NextApiRequest,
    res: NextApiResponse
  }) => {
  const session = await getSession(req, res);
  console.log('isl:', session.loggedIn);

  return {
    props: {
      loggedIn: typeof session.loggedIn === 'boolean' ? session.loggedIn: null,
    },
  };
};
