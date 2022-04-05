import FooterLink from '../atoms/FooterLink';


const FooterPartTwo =()=>{
  return (
    <div className='text-yellow-300 text-lg ' >
      <h3 className='underline font-bold text-white'>Your Compass
      </h3>
      <FooterLink name=' Port of Call' link='#'/>
      <FooterLink name='Earn Notoriety' link='/'/>
      <FooterLink name='News' link='news'/>
      <FooterLink name=' Community' link='articles'/>
      <FooterLink name='Pirate Store' link='#'/>
      <FooterLink name='Play Game' link='#'/>
    </div>
  );
};

export default FooterPartTwo;
