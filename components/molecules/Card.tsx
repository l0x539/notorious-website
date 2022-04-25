
import Hangers from '../atoms/Hangers';

import {FC} from 'react';
const Card: FC<{}> = ({children}) => {
  return (
    <div className='z-20 drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]'>
      <Hangers />
      <div className='relative z-20 bg-card bg-cover bg-center
      rounded-xl top-16'>
        {children}
      </div>
    </div>
  );
};


export default Card;


