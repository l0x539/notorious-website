import SideNavLink from '../atoms/SideNavLink';


const SideNavBar = () =>{
  return (
    <div className='px-5 py-6 absolute bg-sidenav bg-cover border-4
     border-solid border-[#8F8F8F] sidenav-items hover:text-center
     shadow-[0_4px_75px_-85px_rgba(0,0,0,0.2)]'>
      <ul className='relative px-5'>
        <li className='relative border-b-4 border-b-[#D8D8D8]'>
          <h5 className='relative text-white text-center
         text-[22px] mb-7 font-normal'> Featured News </h5>
        </li>
      </ul>
      <div className='mt-3.5'>
        <SideNavLink title='All News' link='#'/>
        <SideNavLink title='NFT Releases' link='#'/>
        <SideNavLink title='Game Updates' link='#'/>
        <SideNavLink title='Competitions/Giveaways' link='#'/>
        <SideNavLink title='Partnership News' link='#'/>
        <SideNavLink title='Help Wanted' link='#'/>
        <SideNavLink title='On the Horizon' link='#'/>
      </div>
    </div>
  );
};

export default SideNavBar;
