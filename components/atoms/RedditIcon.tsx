import Image from 'next/image';
import reddit from '../../assets/svgs/reddit.svg';

const ReddIt = () => {
  return (
    <a href="https://www.reddit.com/r/notoriouspirates/" target="_blank" rel="noopener noreferrer" className='mr-4 hover:drop-shadow-[0px_0px_23px_rgba(255,203,69,0.55)]'>
      <Image src={reddit}
        alt="imag"
        width="40px"
        height="40px"/>
    </a>
  );
};

export default ReddIt;
