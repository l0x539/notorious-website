import chestclosed from '../assets/svgs/chestclosed.svg';
import Image from 'next/image';
import {FC} from 'react';

const ChestClosed: FC<{className?: string}> = ({className}) => {
  return (
    <div className={`absolute flex flex-col items-center bottom-[160px]
    ${className}`}>
      <Image src={chestclosed} width={160} height={140.45}
        alt="chest closed" objectFit='cover' />
    </div>
  );
};

export default ChestClosed;

