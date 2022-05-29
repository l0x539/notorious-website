import Link from 'next/link';
import Layout from '../../components/layout/adminLayout/Layout';

const Index = () => {
  return (<Layout>
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
