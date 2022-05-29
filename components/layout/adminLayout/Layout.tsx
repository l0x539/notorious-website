import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ReactNode, useEffect, useState} from 'react';
import Logo from '../../atoms/Logo';
import Loading from '../../templates/Loading';

interface LayoutProps {
  children: ReactNode;
  isNews?: boolean;
  loggedIn?: boolean;
}

const Layout = ({children, isNews, loggedIn}: LayoutProps) => {
  const router = useRouter();
  useEffect(() => {
    if (!loggedIn) {
      router.push('/admin/login');
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <body className='min-h-full bg-white'>
      <Head>
        <title>NFT cards</title>
      </Head>
      <div className={loading ? 'block':'hidden'}>
        <Loading />
      </div>

      <div className="container mx-auto
        w-full relative h-20 text-right bg-white mb-20">
        <div className="h-full inline-block">
          <Link href="/admin">
            <a className='mx-10 font-[120%] h-full inline-flex
              jusitfy-center align-center'>Home</a>
          </Link>
          <Link href={isNews?'/admin/news':'/admin/nft-cards'}>
            <a className='mx-10 font-[120%] h-full inline-flex
              jusitfy-center align-center'>{isNews?'News':'NFTs'}</a>
          </Link>
          <Link href={isNews?'/admin/news/new':'/admin/nft-cards/new'}>
            <a className='my-10 font-[120%] h-full inline-flex
              jusitfy-center align-center'>{isNews?
              'Add News':'Add NFT Card'}</a>
          </Link>
        </div>
        <div className='absolute left-5 top-0 inline-block h-full'>
          <Logo />
        </div>
      </div>
      <div className='container mx-auto'>
        {children}
      </div>
    </body>
  );
};

export default Layout;


