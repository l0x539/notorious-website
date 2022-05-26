import Head from 'next/head';
import Link from 'next/link';
import {ReactNode, useEffect, useState} from 'react';
import Logo from '../../atoms/Logo';
import Loading from '../../templates/Loading';

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) :
    (
      <body className='min-h-full bg-white'>
        <Head>
          <title>NFT cards</title>
        </Head>

        <div className="container mx-auto
        w-full relative h-20 text-right bg-white mb-20">
          <div className="h-full inline-block">
            <Link href="/admin/nft-cards">
              <a className='mx-10 font-[120%] h-full inline-flex
              jusitfy-center align-center'>Home</a>
            </Link>
            <Link href="/admin/nft-cards/new">
              <a className='my-10 font-[120%] h-full inline-flex
              jusitfy-center align-center'>Add NFT Card</a>
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


