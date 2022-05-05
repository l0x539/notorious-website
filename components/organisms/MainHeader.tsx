
import NotoriousPiratesMain from '../atoms/NotoriousPiratesMain';
import Captain from '../atoms/Captain';
import Skeleton from '../atoms/Skeleton';
import RedPirate from '../atoms/RedPirate';
import Ghost from '../atoms/Ghost';
import Lady from '../atoms/Lady';
import BluePirate from '../atoms/BluePirate';
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
  border-b-[5px] border-[#8F8F8F]
  overflow-y-hidden'>
        <div className='relative'>
          <div className='absolute bottom-0 -left-0 z-20  2xl:w-[12.625rem]
       2xl:h-[20.938rem] xl:w-[8.625rem] xl:h-[14.304rem]'>
            <Captain />
          </div>
          <div className='absolute bottom-0 2xl:left-[4.6rem]
      z-0 2xl:w-[29.688rem] 2xl:h-[21.875rem] xl:left-[4rem]
      xl:w-[19.7rem] xl:h-[14.515rem]'>
            <Skeleton />
          </div>

          <div className=' absolute -bottom-2 2xl:left-[19.5rem] z-10
      2xl:w-[16.688rem] 2xl:h-[19.75rem]
      xl:w-[11.5rem] xl:h-[13.5rem] xl:left-[13.9rem]'>
            <RedPirate />
          </div>
        </div>

        <div className=' flex
    items-center place-content-around'>
          <NotoriousPiratesMain />
          {/* <Image className=''
        src={piratesnoto.src}
        alt="twitter"
        width='725'
        height='213'/> */}
        </div>

        <div className='relative'>
          <div className='absolute bottom-0 2xl:right-[20.625rem]
      z-20 2xl:w-[18.063rem]  2xl:h-[23.875rem]
      xl:right-[15.625rem] xl:h-[17.85rem] xl:w-[13.5rem] '>
            <Ghost />
          </div>
          <div className='absolute bottom-0 2xl:right-[13.2rem]
      z-30 2xl:w-[11.75rem] 2xl:h-[18.75rem]
      xl:w-[9rem] xl:h-[14.35rem] xl:right-[9.9rem]'>
            <Lady />
          </div>

          <div className='absolute -bottom-1 right-0
      z-10 2xl:w-[18.75rem] 2xl:h-[26.25rem] xl:w-[13.78rem] xl:h-[19.3rem]'>
            <BluePirate />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
