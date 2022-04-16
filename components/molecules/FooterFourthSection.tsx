import DiscordJoin from '../atoms/DiscordJoin';

const FooterPartFour= () =>{
  return (
    <div className='w-1/7'>
      <DiscordJoin/>
      <h3 className='text-white text-lg underline font-bold ml-2 mt-5'>
        Legal Disclaimer
      </h3>
      <p className='text-white font-medium mt-2 text-lg ml-2 w-[18rem]'>
        The Notorious Pirates video game is a fan-made,
        nonprofit remake of Pirates of the Caribbean Online,
        and is no way affiliated with Disney Interactive.
      </p>
    </div>);
};

export default FooterPartFour;
