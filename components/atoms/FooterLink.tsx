import Link from 'next/link';
import {FC} from 'react';

const FooterLink: FC<{
  link: string;
  name: string;
}> = ({link, name}) => {
  return (
    <div className="  text-yellow-100 text-lg hover:text-yellow-500
    hover:translate-x-1.5 transition-transform pt-2">
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
};


export default FooterLink;
