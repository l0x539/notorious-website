
import MemberCard from '../atoms/MemberCard';
import chris from '../../assets/images/ChrisHeuvel.png';
import pearso from '../../assets/images/PearsonWright.png';
import muhammed from '../../assets/images/MuhammadSafdar.png';
import holten from '../../assets/images/HoltenRuff.png';
import jeff from '../../assets/images/jefft1.png';

const MemebersCard = () =>{
  return (
    <div className='pb-24
    border-b-[5px] border-[#8F8F8F]
    bg-members pt-6 bg-no-repeat bg-cover bg-center'>
      <h1 className='font-semibold text-center text-3xl text-white
        mb-4 truncate mb-6'>
          Meet the
        <span className='text-3xl
        text-yellow-500 truncate mx-1'>Pirate Lords </span>
          of the
        <div className='text-3xl text-yellow-500 truncate'>
          Open Seas!
        </div>
      </h1>
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
    </div>
  );
};

export default MemebersCard;
