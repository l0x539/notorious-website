import FooterPartOne from '../molecules/FooterFirstSection';
import FooterPartTwo from '../molecules/FooterSecondSection';
import FooterPartThree from '../molecules/FooterThirdSection';
import FooterPartFour from '../molecules/FooterFourthSection';

const Footer = () => {
  return (
    <footer className='bg-black '>
      <div className="container mx-auto
       pt-10 pb-10 flex  justify-between  ">
        <FooterPartOne/>
        <FooterPartTwo/>
        <FooterPartThree/>
        <FooterPartFour/>
      </div>
    </footer>
  );
};

export default Footer;
