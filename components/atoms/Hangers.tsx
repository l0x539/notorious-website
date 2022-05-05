
import HangerLeft from '../assets/images/hangerleft.png';
import HangerRight from '../assets/images/hangerright.png';
import Image from 'next/image';


const Hanger = () => {
  return (
    <div className='flex justify-between h-[3.875rem] overflow-hidden'>
      <div className='relative left-2 z-10'>
        <Image src={HangerRight}
          alt="Hanger Right"/>
      </div>
      <div className='relative right-2 z-10'>
        <Image src={HangerLeft}
          alt="Hanger Left"/>
      </div>
    </div>
  );
};

export default Hanger;
