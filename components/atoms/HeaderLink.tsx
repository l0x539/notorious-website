/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */

import Discord from './assets/discord.svg';
import Twitter from './assets/twitter.svg';
import Reddit from './assets/reddit.svg';
import Image from 'next/image';


const HeaderLink = () => {
  return (
    <div className='lg:inline-flex lg:flex-row mr-40 lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
      <a href='#'>
        <Image src={Discord} height={50} width={50} />
      </a>
      <a href='#'>
        <Image src={Twitter} height={50} width={50} />
      </a>
      <a href='#'>
        <Image src={Reddit} height={35} width={35} />
      </a>
    </div>
  );
};

export default HeaderLink;
