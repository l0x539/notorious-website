import Discord from '../atoms/DiscordIcon';
import Twitter from '../atoms/TwitterIcon';
import ReddIt from '../atoms/RedditIcon';


const FooterPartThree =()=>{
  return (
    <div className=''>
      <h3 className='text-white text-lg underline font-bold mb-4'>
  Engage with us!</h3>
      <Discord/>
      <Twitter/>
      <ReddIt/>
    </div>
  );
};
export default FooterPartThree;
