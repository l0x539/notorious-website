import {ReactNode, useEffect, useState} from 'react';
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
      <>
        <div className='lg:block'>
          {children}
        </div>
      </>
    );
};

export default Layout;


