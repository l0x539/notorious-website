
import MemberCard from '../atoms/MemberCard';
import chris from '../../assets/images/ChrisHeuvel.png';
import pearso from '../../assets/images/PearsonWright.png';
import muhammed from '../../assets/images/MuhammadSafdar.png';
import holten from '../../assets/images/HoltenRuff.png';
import jeff from '../../assets/images/jefft1.png';

const MoleculeMemebersCard = () =>{
  return (
    <div className=' flex items-start place-content-center'>
      <div className='mr=l-[45px]'>
        <MemberCard link={holten} name='Holten Ruff'
          description='Character Designer & GFX Assisant'/>
      </div>

      <div className='ml-[45px]'>
        <MemberCard link={chris} name='Chris Heuvel'
          description='Game Developer & System Admin'/>
      </div>

      <div className='ml-[45px]'>
        <MemberCard link={chris} name='Chris Heuvel'
          description='Game Developer & System Admin'/>
      </div>

      <div className='ml-[45px]'>
        <MemberCard name='Jeff Trahan' link={jeff}
          description=' Character Developer,
      SFX Artist, &GFX Designer'/>
      </div>

      <div className='ml-[45px]'>
        <MemberCard link={pearso} name='Pearson Wright'
          description='Marketing Manager,
        Project Financier, & Project Strategist'/>
      </div>

      <div className='ml-[45px]'>
        <MemberCard link={pearso} name='Maddi Ashley'
          description='Community Engagement & Partnership Manager'/>

      </div>

      <div className='ml-[45px]'>
        <MemberCard link={muhammed} name='Muhammad Safdar'
          description=' Marketing Assistant & Social Media Manager'/>

      </div>

    </div>
  );
};

export default MoleculeMemebersCard;
