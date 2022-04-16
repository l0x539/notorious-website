import {ReactNode, useEffect, useState} from 'react';
import Loading from '../../templates/Loading';
import Maintenance from '../../templates/Maintenance';


interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loading />
  ) :
    (
      <>
        <div className='block lg:hidden'>
          <Maintenance />
        </div>
        <div className='hidden lg:block'>
          {children}
        </div>
      </>
    );
};

export default Layout;


