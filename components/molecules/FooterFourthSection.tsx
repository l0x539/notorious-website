import DiscordJoin from '../atoms/DiscordJoin';

const FooterPartFour= () =>{
  return (
    <div className=''>
      <DiscordJoin/>
      <h3 className='text-white text-xl underline
      underline-offset-4 font-bold ml-2 mt-5'>
        Legal Disclaimer
      </h3>
      <p className='text-white font-semibold leading-5
      mt-2.5 text-lg ml-2 w-[18rem]'>
        The Notorious Pirates video game is a fan-made,
        nonprofit remake of Pirates of the Caribbean Online,
        and is in no way affiliated with Disney Interactive.
      </p>
    </div>);
};

export default FooterPartFour;
