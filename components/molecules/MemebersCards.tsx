
import MemberCard from '../atoms/MemberCard';
import chris from '../assets/images/ChrisHeuvel.png';
import pearso from '../assets/images/PearsonWright.png';
import maddi from '../assets/images/MaddiAshley.png';
import nino from '../assets/images/SikoukNourdin.png';
import muhammed from '../assets/images/MuhammadSafdar.png';
import holten from '../assets/images/HoltenRuff.png';
import jeff from '../assets/images/jefft1.png';

const MemebersCards = () =>{
  return (
    <div className='2xl:max-w-[1620px] mx-4 lg:mx-16 xl:mx-auto
    grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-7 gap-[2.5rem]'>
      <MemberCard link={holten} name='Holten Ruff'
        description='Character Designer & GFX Assisant'
        twitter='https://twitter.com/ruff_holten'
        linkidin='#'
      />

      <MemberCard link={nino} name='Sikouk Nourdin'
        description='Software Developer & DevSolvers.com CEO'
        twitter='https://twitter.com/l0x539'
        linkidin='https://www.linkedin.com/in/sikouknourdin/'
      />

      <MemberCard link={chris} name='Chris Heuvel'
        description='Game Developer & System Admin'
        twitter='#'
        linkidin='#'/>

      <MemberCard name='Jeff Trahan' link={jeff}
        description=' Character Developer,
      SFX Artist, &GFX Designer'
        twitter='https://twitter.com/TrahanCreates'
        linkidin='https://www.linkedin.com/in/jeff-trahan-20b465230/'/>

      <MemberCard link={pearso} name='Pearson Wright'
        description='Marketing Manager,
        Project Financier, & Project Strategist'
        twitter='https://twitter.com/PearsonWright_'
        linkidin='https://www.linkedin.com/in/pearsonwright/'/>

      <MemberCard link={maddi} name='Maddi Ashley'
        description='Community Engagement & Partnership Manager'
        twitter='#'
        linkidin='#'/>


      <MemberCard link={muhammed} name='Muhammad Safdar'
        description=' Marketing Assistant & Social Media Manager'
        twitter='#'
        linkidin='#'/>
    </div>
  );
};

export default MemebersCards;
