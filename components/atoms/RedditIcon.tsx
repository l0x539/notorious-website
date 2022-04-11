import Image from 'next/image';
import reddit from '../../assets/svgs/reddit.svg';

const ReddIt = () => {
  return (
    <a href="https://www.reddit.com/r/notoriouspirates/" target="_blank" rel="noopener noreferrer" className='mr-4'>
      <Image src={reddit}
        alt="imag"
        width="40px"
        height="40px"/>
    </a>
  );
};

export default ReddIt;
