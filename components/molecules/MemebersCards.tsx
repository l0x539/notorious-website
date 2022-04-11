
import MemberCard from '../atoms/MemberCard';
import chris from '../../assets/images/ChrisHeuvel.png';
import pearso from '../../assets/images/PearsonWright.png';
import muhammed from '../../assets/images/MuhammadSafdar.png';
import holten from '../../assets/images/HoltenRuff.png';
import jeff from '../../assets/images/jefft1.png';

const MemebersCards = () =>{
  return (
    <div className='container mx-auto grid grid-cols-7 gap-6'>
      <MemberCard link={holten} name='Holten Ruff'
        description='Character Designer & GFX Assisant'
        twitter='https://twitter.com/ruff_holten'
        linkidin='#'
      />

      <MemberCard link={chris} name='Chris Heuvel'
        description='Game Developer & System Admin'
        twitter='#'
        linkidin='https://www.linkedin.com/in/christian-van-den-heuvel-011156205/'
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

      <MemberCard link={pearso} name='Maddi Ashley'
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
