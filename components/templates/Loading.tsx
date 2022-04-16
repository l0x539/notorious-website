import Image from 'next/image';
import Ship from '../atoms/Ship';
import background from '../assets/images/background.png';
import scrollimage from '../assets/images/scrollimage.png';
// import Spinner from '../atoms/Spinner';

const Loading = () => {
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
        <div className='flex relative justify-center items-center
        h-screen top-[1.5rem]
        drop-shadow-[0px_6px_10px_#FFCB45]'>
          <Image
            src={scrollimage}
            alt="Notorious pirates background image"
            width={400}
            height={400}
            objectFit='contain' />
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col
      justify-center items-center
    bg-zinc-800">
        <div className='w-[15rem]'>
          <Ship />
        </div>
        <div className='text-white text-2xl z-20'>Loading...</div>
        {/* <Spinner /> */}
      </div>
    </div>
  );
};

export default Loading;
