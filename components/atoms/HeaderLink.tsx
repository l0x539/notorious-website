import Link from 'next/link';
import {FC} from 'react';

const HeaderLink: FC<{
  link: string;
  title: string;
}> = ({link, title}) => {
  return (
    <Link href={link}>
      <a className='block lg:text-center lg:mt-0 text-white
      mx-5 text-[1.375rem] hover:underline
      hover:underline-offset-4 hover:underline hover:underline-offset-4-offset-4
       hover:text-notorious-golden-500 hover:cursor-pointer flex
       items-center h-full'>
        {title}
      </a>
    </Link>
  );
};


export default HeaderLink;
