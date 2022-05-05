import SocialIcon from '../atoms/SocialIcon';


const FooterPartThree =()=>{
  return (
    <div className=''>
      <h3 className='text-white text-xl underline
      underline-offset-4 font-bold mb-3.5'>
  Engage with us!</h3>
      <div className='grid grid-cols-3 items-center gap-[22px]'>
        <SocialIcon type='discord' link=" https://discord.gg/Au6rp6JQn7 " />
        <SocialIcon type='twitter' link="https://twitter.com/PirateNFTs" />
        <SocialIcon type='reddit' link="https://www.reddit.com/r/notoriouspirates/" />
      </div>
    </div>
  );
};
export default FooterPartThree;
