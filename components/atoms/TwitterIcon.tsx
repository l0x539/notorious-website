import Image from 'next/image';
import twitter from '../../assets/svgs/twitter.svg';

const Twitter = () => {
  return (
    <a href="https://twitter.com/PirateNFTs" className='mr-4'>
      <Image src={twitter}
        alt="imag"
        width="40px"
        height="40px"/>
    </a>
  );
};

export default Twitter;
