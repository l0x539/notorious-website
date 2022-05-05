import FooterPartOne from '../molecules/FooterFirstSection';
import FooterPartTwo from '../molecules/FooterSecondSection';
import FooterPartThree from '../molecules/FooterThirdSection';
import FooterPartFour from '../molecules/FooterFourthSection';

const Footer = () => {
  return (
    <footer className='bg-black '>
      {/* eslint-disable-next-line max-len*/}
      <div className="grid grid-cols-[minmax(0px,306px)_minmax(0px,176px)_minmax(0px,176px)_minmax(0px,288px)]
      container mx-auto
       pt-10 pb-10
       gap-[171px]
       ">
        <FooterPartOne/>
        <FooterPartTwo/>
        <FooterPartThree/>
        <FooterPartFour/>
      </div>
    </footer>
  );
};

export default Footer;
