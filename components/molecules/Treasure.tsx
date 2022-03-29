
import {FC} from 'react';
import {useState} from 'react';
import ChestClosed from '../atoms/ChestClosed';
import ChestOpened from '../atoms/ChestOpened';

const Treasure: FC<{


}> = ({children}) => {
  const [isHovering, setIsHovered] = useState(false);
  return (
    <div className='z-5 relative flex flex-col items-center
     bg-scrollimage bg-cover'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

      {isHovering && (
        <><ChestOpened />
          <div className='flex justify-center
         items-center w-[283.2px] h-[200px]' >
            {children}
          </div></>
      )}
      {!isHovering && (
        <><ChestClosed />
          <div className='flex justify-center
          items-center w-[283.2px] h-[200px]'>
            {children}
          </div></>
      )}


    </div>

  );
};


export default Treasure;
