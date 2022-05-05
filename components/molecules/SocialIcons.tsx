import SocialIcon from '../atoms/SocialIcon';

const SocialIcons = ()=> {
  return (
    <div className='grid grid-cols-3 items-center gap-[22px]'>
      <SocialIcon type='discord' link=" https://discord.gg/Au6rp6JQn7 " />
      <SocialIcon type='twitter' link="https://twitter.com/PirateNFTs" />
      <SocialIcon type='reddit' link="https://www.reddit.com/r/notoriouspirates/" />
    </div>
  );
};

export default SocialIcons;
