import Image from 'next/image';
import twitter from '../../assets/svgs/twitter.svg';

const Twitter = () => {
  return (
    <a href="https://twitter.com/PirateNFTs" target="_blank" rel="noopener noreferrer" className='mr-4 hover:drop-shadow-[0px_0px_23px_rgba(255,203,69,0.55)] '>
      <Image src={twitter}
        alt="imag"
        width="40px"
        height="40px"/>
    </a>
  );
};

export default Twitter;
