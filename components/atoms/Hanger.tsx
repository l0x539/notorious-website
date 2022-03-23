
import HangerLeft from '../assets/images/hangerleft.png';
import HangerRight from '../assets/images/hangerright.png';
import Image from 'next/image';


const Hanger = () => {
  return (
    <div className='block relative'>
      <Image src={HangerRight} height={494} width={300}
        alt="Hanger Right" className='float-right'/>

      <Image src={HangerLeft} height={494} width={300}
        alt="Hanger Left" className='float-left'/>

    </div>
  );
};

export default Hanger;
