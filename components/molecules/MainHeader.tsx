
import blue from '../../assets/images/blue.png';
import pirate from '../../assets/images/pirate.png';
import black from '../../assets/images/black.png';
import piratesnoto from '../../assets/images/piratesNoto.png';
import skeleton from '../../assets/images/skeleton.png';
import red from '../../assets/images/red.png';

const MainHeader = () => {
  return (<div className='flex justify-between w-full'>


    <div
      className='flex '>
      <img className='relative -left-24 z-20'
        src={pirate.src}
        alt="twitter"
        width='400'
        height='335'/>

      <img className='relative -left-[330px] z-0'
        src={skeleton.src}
        alt="twitter"
        width='500'
        height='356'
      />

      <img className=' relative -left-[610px] z-10'
        src={black.src}
        alt="twitter"
        width='325'
        height='316s'/>

    </div>


    <div>
      <img
        src={piratesnoto.src}
        alt="twitter"
        width='725'
        height='213'/>

    </div>

    <div className='flex'>

      <img className=' relative -right-[10px]'

        src={red.src}
        alt="twitter"
        width='289'
        height='382'/>

      <img className='relative -right-[10px] '
        src={red.src}
        alt="twitter"
        width='300'
        height='300'/>

      <img className='relative -right-[10px]'
        src={blue.src}
        alt="twitter"
        width='425'
        height='402'/>

    </div>

  </div>);
};
export default MainHeader;
