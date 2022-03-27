import Link from 'next/link';
import {FC} from 'react';
const SideNavLink: FC<{
  link: string;
  title: string;
}> = ({link, title}) => {
  return (
    <div>
      <Link href={link} passHref>
        <ul className="relative">
          <li className="relative mt-2">
            <a className='flex flex-col flex-wrap items-center
            text-white text-sm py-1 px-4 hover:bg-yellow-800
            transition duration-300 ease-in-out h-7'>
              {title}
            </a>
          </li>
        </ul>
      </Link>
    </div>
  );
};


export default SideNavLink;
