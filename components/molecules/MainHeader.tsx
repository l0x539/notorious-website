
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
        src='../../assets/images/pirate.png'
        alt="twitter"
        width='400'
        height='335'/>

      <img className=' bottom-0 lefte-[100px]'
        src='../../assets/images/skeleton.png'
        alt="twitter"
        width='325'
        height='356'
      />

      <img className=' bottom-0 lefte-[150px]'
        src='../../assets/images/black.png'
        alt="twitter"
        width='325px'
        height='316'/>

    </div>


    <div>
      <img
        src={piratesnoto}
        alt="twitter"
        width='725'
        height='213'/>

    </div>

    <div className='relative'>

      <img className=' bottom-0 righte-[550px]'

        src={red}
        alt="twitter"
        width='289'
        height='382'/>

      <img className=' bottom-0 righte-[10px]'
        src={red}
        alt="twitter"
        width='300'
        height='300'/>

      <img className=' bottom-0 -righte-[15px]'

        src={blue}
        alt="twitter"
        width='425'
        height='402'/>

    </div>

  </div>);
};
export default MainHeader;
