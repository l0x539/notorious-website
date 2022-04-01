
import blue from '../../assets/images/blue.png';
import pirate from '../../assets/images/pirate.png';
import black from '../../assets/images/black.png';
import piratesnoto from '../../assets/images/piratesNoto.png';
import skeleton from '../../assets/images/skeleton.png';
import red from '../../assets/images/red.png';


const MainHeader = () => {
  return (<div className='grid grid-cols-[repeat(3,_1fr)] min-h-[23.875rem]'>


    <div className='relative'>
      <img className='absolute bottom-0 -left-24 z-20'
        src={pirate.src}
        alt="twitter"
        width='400'
        height='335'/>
      <img className='absolute bottom-0 left-[4.375rem] z-0'
        src={skeleton.src}
        alt="twitter"
        width='470'
        height='356'
      />
      <img className=' absolute bottom-0 left-[16.75rem] z-10'
        src={black.src}
        alt="twitter"
        width='325'
        height='316'/>

    </div>

    <div className=' flex-row lg:flex
     lg:items-center place-content-around'>
      <img className=''
        src={piratesnoto.src}
        alt="twitter"
        width='725'
        height='213'/>

    </div>

    <div className='relative'>
      <img className='absolute bottom-0 right-[20.625rem] z-30'
        src={red.src}
        alt="twitter"
        width='289'
        height='382'/>

      <img className='absolute bottom-0 right-[9.375rem] z-20 '
        src={red.src}
        alt="twitter"
        width='300'
        height='300'/>

      <img className='absolute bottom-0 -right-[4.063rem] z-10'
        src={blue.src}
        alt="twitter"
        width='425'
        height='402'/>
    </div>
  </div>);
};
export default MainHeader;
