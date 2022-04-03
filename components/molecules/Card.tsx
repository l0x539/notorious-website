
import Hangers from '../atoms/Hangers';

import {FC} from 'react';
const Card: FC<{}> = ({children}) => {
  return (
    <div className='z-20'>
      <Hangers />
      <div className='relative top-0 z-20 bg-card bg-cover rounded-xl top-16'>
        {children}
      </div>
    </div>
  );
};


export default Card;


