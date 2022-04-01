import logo from '../assets/svgs/logo.svg';
import Link from 'next/link';
import Image from 'next/image';


const Logo = () => {
  return (
    <Link href='/'>
      <a className='inline-flex items-center '>
        <Image src={logo} height={65} width={65}
          alt=" Notorious Pirates Logo" />
      </a>
    </Link>
  );
};

export default Logo;
