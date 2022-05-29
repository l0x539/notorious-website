import Image from 'next/image';
import background from '../assets/images/background.png';
import Oops from '../atoms/Oops';


const Maintenance = () => {
  return (
    <div className="relative h-screen lg:h-auto w-screen lg:w-auto">
      <div className='absolute h-full w-full top-0 bg-black'>
        <div className='background-mobile z-[-1]'>
          <Image
            src={background}
            alt="Notorious pirates background image"
            layout='fill'
            objectFit='cover' />
        </div>
      </div>
      <div className='relative flex h-full justify-center
      items-center mx-6 lg:h-screen'>
        <div className='lg:w-96'>
          <Oops />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;


