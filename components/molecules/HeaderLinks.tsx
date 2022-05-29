import HeaderLink from '../atoms/HeaderLink';


const HeaderLinks = () =>{
  return (
    <div className='w-full block flex-grow lg:flex
     lg:items-center lg:w-auto h-[89px]
     grid grid-col-5 gap-3'>
      <HeaderLink title='Earn Notoriety' link='/'/>
      <HeaderLink title='News' link='/news'/>
      <HeaderLink title='Community' link='#'/>
      <HeaderLink title='Pirate Store' link='#'/>
      <HeaderLink title='Play Game' link='#'/>
    </div>
  );
};

export default HeaderLinks;
