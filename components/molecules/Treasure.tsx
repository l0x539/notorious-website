
import {FC} from 'react';
import {useState} from 'react';
// import ChestClosed from '../atoms/ChestClosed';
// import ChestOpened from '../atoms/ChestOpened';
import TreasureOpen from '../atoms/TreasureOpen';

const Treasure: FC<{


}> = ({children}) => {
  const [isHovering, setIsHovered] = useState(false);
  return (
    <div className='z-5 cursor-pointer relative flex flex-col items-center
     bg-scrollimage bg-contain bg-center bg-no-repeat'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <>
        <div className='absolute flex flex-col items-center
         bottom-[170px] h-[200px] w-[200px] mr-10'>
          <TreasureOpen isHovering={isHovering} />
        </div>
        {/* <ChestOpened className={isHovering ? 'block' : 'hidden'} />
        <ChestClosed className={isHovering ? 'hidden' : 'block'} /> */}
        <div className='flex justify-center
         items-center w-[283px] h-[236px]' >
          {children}
        </div>
      </>
    </div>
  );
};


export default Treasure;
