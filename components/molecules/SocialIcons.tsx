import SocialIcon from '../atoms/SocialIcon';

const SocialIcons = ()=> {
  return (
    <div className='grid grid-cols-3 items-center gap-2'>
      <SocialIcon type='discord' link="#" />
      <SocialIcon type='twitter' link="#" />
      <SocialIcon type='reddit' link="#" />
    </div>
  );
};

export default SocialIcons;
