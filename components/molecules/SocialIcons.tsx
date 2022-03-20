import SocialIcon from '../atoms/SocialIcon';

const SocialIcons = ()=> {
  return (
    <div className='lg:inline-flex lg:flex-row lg:w-auto w-full
     lg:items-center items-start'>
      <SocialIcon type='discord' link="#" />
      <SocialIcon type='twitter' link="#" />
      <SocialIcon type='reddit' link="#" />
    </div>
  );
};

export default SocialIcons;
