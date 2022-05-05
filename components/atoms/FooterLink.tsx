import Link from 'next/link';
import {FC} from 'react';

const FooterLink: FC<{
  link: string;
  name: string;
}> = ({link, name}) => {
  return (
    <div className="  text-notorious-golden-100 text-xl
    hover:text-notorious-golden-500
    hover:translate-x-3.5 transition-transform font-semibold
    hover:font-bold pt-2">
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
};


export default FooterLink;
