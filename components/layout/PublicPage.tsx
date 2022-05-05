import {useRouter} from 'next/router';
import {ReactNode} from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import MainHeader from '../organisms/MainHeader';
import Layout from './defaultLayout/Layout';

interface PublicPageProps {
    children: ReactNode
}

const PublicPage = ({children}: PublicPageProps) => {
  const router = useRouter();
  console.log();

  return (
    <Layout>
      {
        router.pathname === '/' ?
        <MainHeader /> :
        <Header />
      }
      <main className='z-0'>
        {children}
      </main>
      <div className='z-40'>
        <Footer />
      </div>
    </Layout>
  );
};

export default PublicPage;
