
import Discord from '../../assets/svgs/discord-logo-png-7622 2.svg';
import Twitter from '../../assets/svgs/twitter.svg';
import Reddit from '../../assets/svgs/reddit.svg';
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


  return (
    <a href={link}
      target="_blank" rel="noopener noreferrer">
      <Image src={Comp}
        width={40} height={40}
        alt="Notorious pirates Social media links logo"/>
    </a>
  );
};


export default SocialIcon;
