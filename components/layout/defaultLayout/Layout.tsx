import {ReactNode} from 'react';
import Maintenance from '../../templates/Maintenance';


interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
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


