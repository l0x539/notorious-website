import Image from 'next/image';
import discord from '../../assets/svgs/discord-logo-png-7622 2.svg';

const Discord = () => {
  return (
    <a className='shadow-lg mr-4' href="#" >
      <Image src={discord}
        alt="imag"
        width="45px"
        height="45px"/>
    </a>
  );
};

export default Discord;
