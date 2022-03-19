import Discord from '../atoms/DiscordIcon';
import Twitter from '../atoms/TwitterIcon';
import ReddIt from '../atoms/RedditIcon';


const FooterPart3 =()=>{
  return (
    <div className=''>
      <h3 className='text-white text-lg underline font-bold'>
  Engage with us!</h3>
      <Discord/>
      <Twitter/>
      <ReddIt/>
    </div>
  );
};
export default FooterPart3;
