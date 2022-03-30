import Hangers from '../atoms/Hangers';

import {FC} from 'react';
const Card: FC<{


}> = ({children}) => {
  return (
    <div className='z-20'>
      <Hangers />
      <div className='bg-woodbg bg-cover top-20'>
        {children}

      </div>


    </div>

  );
};


export default Card;
