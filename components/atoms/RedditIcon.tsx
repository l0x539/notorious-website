import Image from 'next/image';
import reddit from '../../assets/svgs/reddit.svg';

const ReddIt = () => {
  return (
    <a href="#" className='mr-4'>
      <Image src={reddit}
        alt="imag"
        width="45px"
        height="45px"/>
    </a>
  );
};

export default ReddIt;
