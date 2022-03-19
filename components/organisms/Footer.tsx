import FooterPart1 from '../molecules/FooterPart1';
import FooterPart2 from '../molecules/FooterPart2';
import FooterPart3 from '../molecules/FooterPart3';
import FooterPart4 from '../molecules/FooterPart4';

const Footer = () => {
  return (
    <footer className='bg-black  '>
      <div className="container mx-auto
      grid grid-cols-4 grid-flow-col gap-4  pt-10 pb-10 ">
        <FooterPart1/>
        <FooterPart2/>
        <FooterPart3/>
        <FooterPart4/>
      </div>
    </footer>
  );
};

export default Footer;
