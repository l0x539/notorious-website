import HangerLeft from '../assets/images/hangerleft.png';
import HangerRight from '../assets/images/hangerright.png';
import Image from 'next/image';


const Hanger = () => {
  return (
    <div className='flex flex-row flex-wrap'>
      <div className='float-right'>
        <Image src={HangerRight} height={494} width={300} alt="Hanger Right" />
      </div>
      <div className='float-left'>
        <Image src={HangerLeft} height={494} width={300} alt="Hanger Left"/>
      </div>

    </div>
  );
};

export default Hanger;
