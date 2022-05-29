import Logo from '../atoms/Logo';
import HeaderLinks from '../molecules/HeaderLinks';
import SocialIcons from '../molecules/SocialIcons';


const Header = () => {
  return (
    <header>
      <div className=" bg-nav bg-cover h-[5.563rem]
      border-b-[5px] border-[#8F8F8F] flex items-center lg:block">
        <nav className='container mx-auto flex items-center flex-wrap
      grid grid-cols-2 gap-4 px-16
      lg:flex lg:flex-nowrap lg:justify-start lg:items-center'>
          <Logo />
          <HeaderLinks />
          <SocialIcons />
        </nav>
      </div>
    </header>
  );
};

export default Header;
