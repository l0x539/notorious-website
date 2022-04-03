
import HangerLeft from '../assets/images/hangerleft.png';
import HangerRight from '../assets/images/hangerright.png';
import Image from 'next/image';


const Hanger = () => {
  return (
    <div className='flex justify-between h-16'>
      <div className='relative -left-16 z-10'>
        <Image src={HangerRight}
          alt="Hanger Right" className='left-0 z-[-1]
        relative -left-24'/>
      </div>
      <div className='relative -right-16 z-10'>
        <Image src={HangerLeft}
          alt="Hanger Left" className='right-0 z-[-1]'/>
      </div>
    </div>
  );
};

export default Hanger;
