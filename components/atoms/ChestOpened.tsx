import chestopened from '../assets/svgs/chestopened.svg';
import Image from 'next/image';

const ChestOpened = () => {
  return (
    <div className='absolute flex flex-col items-center bottom-[170px] mr-10'>
      <Image src={chestopened} width={170} height={172}
        alt="chest opened" objectFit='cover' />

    </div>
  );
};

export default ChestOpened;

