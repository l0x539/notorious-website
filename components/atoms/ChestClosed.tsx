import chestclosed from '../assets/svgs/chestclosed.svg';
import Image from 'next/image';

const ChestClosed = () => {
  return (
    <div className='absolute flex flex-col items-center bottom-[140px]'>
      <Image src={chestclosed} width={160} height={140.45}
        alt="chest closed" objectFit='cover' />

    </div>
  );
};

export default ChestClosed;

