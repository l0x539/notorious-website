
import Hanger from '../atoms/Hanger';

import {FC} from 'react';
const Card: FC<{


}> = ({children}) => {
  return (
    <div className='mx-5 px-5'>
      <Hanger />
      <div className='bg-card bg-cover
       rounded-lg overflow-hidden absolute mx-20 top-16'>
        {children}

      </div>


    </div>

  );
};


export default Card;
