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
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Layout>
  );
};

export default PublicPage;
