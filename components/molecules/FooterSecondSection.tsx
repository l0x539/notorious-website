import FooterLink from '../atoms/FooterLink';


const FooterPartTwo =()=>{
  return (
    <div className='text-notorious-golden-100 w-1/7' >
      <h3 className='underline underline-offset-4
      font-bold text-xl text-white'>Your Compass
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
