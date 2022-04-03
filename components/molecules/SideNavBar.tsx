import SideNavLink from '../atoms/SideNavLink';


const SideNavBar = () =>{
  return (
    <div className='px-6 py-6 absolute bg-sidenav bg-cover border-4
     border-solid border-[#8F8F8F] sidenav-items hover:text-center'>
      <ul className='relative px-5'>
        <li className='relative border-b-4 border-b-[#D8D8D8]'>
          <h5 className='relative text-white text-center
         text-xl mb-7 font-normal'> Featured News </h5>
        </li>
      </ul>
      <SideNavLink title='All News' link='#'/>
      <SideNavLink title='NFT Releases' link='#'/>
      <SideNavLink title='Game Updates' link='#'/>
      <SideNavLink title='Competitions/Giveaways' link='#'/>
      <SideNavLink title='Partnership News' link='#'/>
      <SideNavLink title='Help Wanted' link='#'/>
      <SideNavLink title='On the Horizon' link='#'/>
    </div>
  );
};

export default SideNavBar;
