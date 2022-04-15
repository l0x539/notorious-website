import Discord from '../atoms/DiscordIcon';
import Twitter from '../atoms/TwitterIcon';
import ReddIt from '../atoms/RedditIcon';


const FooterPartThree =()=>{
  return (
    <div className='w-1/7 '>
      <h3 className='text-white text-lg underline font-bold mb-3.5'>
  Engage with us!</h3>
      <Discord/>
      <Twitter/>
      <ReddIt/>
    </div>
  );
};
export default FooterPartThree;
