/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"]*/
import Link from 'next/link';
import Image from 'next/image';
import logo from '../atoms/assets/logo.svg';
import HeaderLink from '../atoms/HeaderLink';


const Header = () => {
  return (
    <header>
      <div className="container mx-auto bg-nav bg-cover">
        <nav className='flex items-center flex-wrap p-3'>
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-2 ml-40 '>
              <Image src={logo} height={65} width={65} />
            </a>
          </Link>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white mr-10 text-base hover:underline hover:text-yellow-500 '>
                Earn Notoriety
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white  mr-10 text-base hover:underline hover:text-yellow-500'>
                News
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white mr-10 text-base hover:underline hover:text-yellow-500'>
                Community
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white mr-10 text-base hover:underline hover:text-yellow-500'>
                Pirate Store
              </a>
            </Link>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-white mr-10 text-base hover:underline hover:text-yellow-500'>
                Play Game
              </a>
            </Link>
          </div>
          <div className="lg:inline-flex lg:w-auto w-full px-5 py-2">
            <HeaderLink />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
