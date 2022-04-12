import Image from 'next/image';
import background from '../assets/images/background.png';


const Maintenance = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className='absolute h-full w-full top-0 bg-black'>
        <div className='background-mobile z-[-1]'>
          <Image
            src={background}
            alt="Notorious pirates background image"
            layout='fill'
            objectFit='cover' />
        </div>
      </div>
      <div className='relative flex flex-col h-full justify-center'>
        <h1 className="text-white text-center text-xl font-semibold">
            Not supported for mobile yer, use a Desktop</h1>
      </div>
    </div>
  );
};

export default Maintenance;


