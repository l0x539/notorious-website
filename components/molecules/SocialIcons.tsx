import SocialIcon from '../atoms/SocialIcon';

const SocialIcons = ()=> {
  return (
    <div className='lg:inline-flex lg:flex-row lg:w-auto w-full
     lg:items-center items-start h-[89px]'>
      <SocialIcon type='discord' link=" https://discord.gg/Au6rp6JQn7 " />
      <SocialIcon type='twitter' link="https://twitter.com/PirateNFTs" />
      <SocialIcon type='reddit' link="https://www.reddit.com/r/notoriouspirates/" />
    </div>
  );
};

export default SocialIcons;
