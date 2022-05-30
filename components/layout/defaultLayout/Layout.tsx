import {ReactNode, useEffect, useState} from 'react';
import Loading from '../../templates/Loading';


interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  const loadPage = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      loadPage();
    } else {
      window.addEventListener('load', loadPage);
      return () => window.removeEventListener('load', loadPage);
    }
  }, []);

  return (
    <>
      <div className={`fixed ${loading ? 'block':'hidden'} z-[100]`}>
        <Loading />
      </div>
      <div className='lg:block'>
        {children}
      </div>
    </>
  );
};

export default Layout;


