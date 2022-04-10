import Logo from '../atoms/Logo';
import HeaderLinks from '../molecules/HeaderLinks';
import SocialIcons from '../molecules/SocialIcons';


const Header = () => {
  return (
    <header>
      <div className=" bg-nav bg-cover h-[5.563rem]
    border-b-[5px] border-[#8F8F8F]
  border-b-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25), 0_4px_4px_rgba(0, 0, 0, 0.25)]
    ">
        <nav className='container mx-auto flex items-center flex-wrap'>
          <Logo />
          <HeaderLinks />
          <SocialIcons />
        </nav>
      </div>
    </header>
  );
};

export default Header;
