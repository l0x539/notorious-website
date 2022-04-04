
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
        description='Character Designer & GFX Assisant'/>

      <MemberCard link={chris} name='Chris Heuvel'
        description='Game Developer & System Admin'/>

      <MemberCard link={chris} name='Chris Heuvel'
        description='Game Developer & System Admin'/>

      <MemberCard name='Jeff Trahan' link={jeff}
        description=' Character Developer,
      SFX Artist, &GFX Designer'/>

      <MemberCard link={pearso} name='Pearson Wright'
        description='Marketing Manager,
        Project Financier, & Project Strategist'/>

      <MemberCard link={pearso} name='Maddi Ashley'
        description='Community Engagement & Partnership Manager'/>


      <MemberCard link={muhammed} name='Muhammad Safdar'
        description=' Marketing Assistant & Social Media Manager'/>
    </div>
  );
};

export default MemebersCards;
