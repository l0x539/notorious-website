import Link from 'next/link';
import {FC} from 'react';
const SideNavLink: FC<{
  link: string;
  title: string;
}> = ({link, title}) => {
  return (
    <div className='sidenav-link cursor-pointer'>
      <Link href={link} passHref>
        <ul className="relative">
          <li className="relative mt-2">
            <a className='flex flex-col flex-wrap items-center
            text-white text-xl font-normal py-1 px-6 hover:bg-[#894C15]
            hover:shadow-inner transition duration-300 ease-in-out h-9'>
              {title}
            </a>
          </li>
        </ul>
      </Link>
    </div>
  );
};


export default SideNavLink;
