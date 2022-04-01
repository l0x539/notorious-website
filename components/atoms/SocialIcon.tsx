
import Discord from '../assets/svgs/discord-logo.svg';
import Twitter from '../assets/svgs/twitter-logo.svg';
import Reddit from '../assets/svgs/reddit-logo.svg';
import {useMemo} from 'react';
import {FC} from 'react';
import Image from 'next/image';

const SocialIcon: FC<{
  link: string;
  type: 'discord' | 'twitter'| 'reddit';
}> = ({link, type}) => {
  const Comp= useMemo(() =>{
    const typeicon ={
      'discord': Discord,
      'twitter': Twitter,
      'reddit': Reddit,
    };
    return typeicon[type];
  }, [type]);


  return <a href={link}><Image src={Comp}
    alt="Notorious pirates Social media links logo"/></a>;
};


export default SocialIcon;
