
import blue from '../assets/images/blue.png';
import pirate from '../assets/images/pirate.png';
import black from '../assets/images/black.png';
import piratesnoto from '../assets/images/piratesNoto.png';
import skeleton from '../assets/images/skeleton.png';
import red from '../assets/images/red.png';
import women from '../assets/images/women.png';
import Image from 'next/image';
import Header from './Header';

const MainHeader = () => {
  return (
    <div className='bg-header bg-cover bg-no-repeat'>
      <div className='z-20'>
        <Header />
      </div>
      <div className='
  grid grid-cols-[repeat(3,_1fr)]
  2xl:min-h-[24.875rem] xl:min-h-[18.875rem]
  border-b-[5px] border-[#8F8F8F]'>
        <div className='relative'>
          <div className='absolute bottom-0 -left-0 z-20  2xl:w-[12.625rem]
       2xl:h-[20.938rem] xl:w-[8.625rem] xl:h-[14.304rem]'>
            <Image
              layout='responsive'
              src={pirate.src}
              alt="Pirate captain"
              width='202'
              height='335'/>
          </div>
          <div className='absolute bottom-0 2xl:left-[4.6rem]
      z-0 2xl:w-[29.688rem] 2xl:h-[21.875rem] xl:left-[4rem]
      xl:w-[19.7rem] xl:h-[14.515rem]'>
            <Image
              layout='responsive'
              src={skeleton.src}
              alt="Skeleton pirate"
              width='475'
              height='350'
            />
          </div>

          <div className=' absolute bottom-0 2xl:left-[19.5rem] z-10
      2xl:w-[16.688rem] 2xl:h-[19.75rem]
      xl:w-[11.5rem] xl:h-[13.5rem] xl:left-[13.9rem]'>
            <Image
              layout='responsive'
              src={black.src}
              alt="Drinking Pirate"
              width='267'
              height='316'/>
          </div>
        </div>

        <div className=' flex
    items-center place-content-around h-40 lg:h-auto '>
          <Image className=''
            src={piratesnoto.src}
            alt="Notorious Pirates"
            width='725'
            height='213'/>
        </div>

        <div className='relative'>
          <div className='absolute bottom-0 2xl:right-[20.625rem]
      z-30 2xl:w-[18.063rem]  2xl:h-[23.875rem]
      xl:right-[15.625rem] xl:h-[17.85rem] xl:w-[13.5rem] '>
            <Image
              layout='responsive'
              src={red.src}
              alt="Ghost Pirate"
              width='289'
              height='382'/>

          </div>
          <div className='absolute bottom-0 2xl:right-[13.2rem]
      z-20 2xl:w-[11.25rem] 2xl:h-[18.75rem]
      xl:w-[8.625rem] xl:h-[14.35rem] xl:right-[9.9rem]'>
            <Image
              layout='responsive'
              src={women.src}
              alt="Women Pirate"
              width='180'
              height='300'/>
          </div>

          <div className='absolute bottom-0 right-0
      z-10 2xl:w-[18.75rem] 2xl:h-[26.25rem] xl:w-[13.78rem] xl:h-[19.3rem]'>
            <Image
              layout='responsive'
              src={blue.src}
              alt="Casual Pirate"
              width='300'
              height='420'/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
