
import Hanger from '../atoms/Hanger';

import {FC} from 'react';
const Card: FC<{


}> = ({children}) => {
  return (
    <div className='z-20'>
      <Hanger />
      <div className='bg-card bg-cover
       rounded-lg top-16'>
        {children}
      </div>
    </div>

  );
};


export default Card;
