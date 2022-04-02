import {ReactNode} from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import Layout from './defaultLayout/Layout';

interface PublicPageProps {
    children: ReactNode
}

const PublicPage = ({children}: PublicPageProps) => {
  return (
    <Layout>
      <div className='z-20'>
        <Header />
      </div>
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
