import {ReactNode, useEffect, useState} from 'react';
import Loading from '../../templates/Loading';
import Maintenance from '../../templates/Maintenance';


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


