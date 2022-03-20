import Link from 'next/link';
import {FC} from 'react';

const HeaderLink: FC<{
  link: string;
  title: string;
}> = ({link, title}) => {
  return (
    <Link href={link}>
      <a className='block mt-4 lg:inline-block lg:mt-0 text-white mr-10
        text-base hover:text-yellow-500 hover:underline text-center'>
        {title}
      </a>
    </Link>
  );
};


export default HeaderLink;
