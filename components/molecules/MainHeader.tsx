
import blue from '../../assets/images/blue.png';
import pirate from '../../assets/images/pirate.png';
import black from '../../assets/images/black.png';
import piratesnoto from '../../assets/images/piratesNoto.png';
import skeleton from '../../assets/images/skeleton.png';
import red from '../../assets/images/red.png';

const MainHeader = () => {
  return (<div className='flex w-full'>


    <div
      className='relative '>
      <img className=' bottom-0 -lefte-[15px] '
        layout='fill'
        objectFit="cover"
        src='../../assets/images/pirate.png'
        alt="twitter"
        width='400px'
        height='335px'/>

      <img className=' bottom-0 lefte-[100px]'
        layout='fill'
        objectFit="cover"
        src='../../assets/images/skeleton.png'
        alt="twitter"
        width='325px'
        height='356px'
      />

      <img className=' bottom-0 lefte-[150px]'
        layout='fill'
        objectFit="cover"
        src='../../assets/images/black.png'
        alt="twitter"
        width='325px'
        height='316px'/>

    </div>


    <div>
      <img
        src={piratesnoto}
        alt="twitter"
        width='725px'
        height='213px'/>

    </div>

    <div className='relative'>

      <img className=' bottom-0 righte-[550px]'
        layout='fill'
        objectFit="cover"
        src={red}
        alt="twitter"
        width='289px'
        height='382px'/>

      <img className=' bottom-0 righte-[10px]'
        src={red}
        alt="twitter"
        width='300px'
        height='300px'/>

      <img className=' bottom-0 -righte-[15px]'

        src={blue}
        layout='fill'
        objectFit="cover"
        alt="twitter"
        width='425x'
        height='402px'/>

    </div>

  </div>);
};
export default MainHeader;
