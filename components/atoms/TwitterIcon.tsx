import Image from 'next/image';
import twitter from '../../assets/svgs/twitter.svg';

const Twitter = () => {
  return (
    <a href="#" className='mr-4'>
      <Image src={twitter}
        alt="imag"
        width="45px"
        height="45px"/>
    </a>
  );
};

export default Twitter;
