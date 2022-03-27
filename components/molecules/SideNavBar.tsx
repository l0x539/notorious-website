import SideNavLink from '../atoms/SideNavLink';


const SideNavBar = () =>{
  return (
    <div className='px-6 absolute bg-sidenav bg-cover border-4
     border-solid border-gray-400 sidenav-items hover:text-center'>
      <ul className='relative px-2'>
        <li className='relative border-b-2'>
          <h5 className='relative text-white text-center
          mb-5 mt-5'> Featured News </h5>
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
