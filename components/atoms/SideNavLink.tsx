import Link from 'next/link';
import {FC} from 'react';
const SideNavLink: FC<{
  link: string;
  title: string;
}> = ({link, title}) => {
  return (
    <div className='sidenav-link cursor-pointer'>
      <Link href={link} passHref>
        <a className='flex flex-col flex-wrap items-center
            text-white text-xl font-normal py-2 px-6 hover:bg-[#894C15]
            hover:shadow-inner transition duration-300 ease-in-out'>
          {title}
        </a>
      </Link>
    </div>
  );
};


export default SideNavLink;
