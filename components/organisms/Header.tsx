import Logo from '../atoms/Logo';
import HeaderLinks from '../molecules/HeaderLinks';
import SocialIcons from '../molecules/SocialIcons';
import Styles from '../../styles/Home.module.scss';


const Header = () => {
  return (
    <header className={Styles.divider}>
      <div className=" bg-nav bg-cover
      border-b-[5px] border-[#8F8F8F]">
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
