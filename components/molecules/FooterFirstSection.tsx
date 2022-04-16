import Image from 'next/image';
import logo from '../../assets/images/np.png';


const FooterPartOne = ()=>{
  return (
    <div className="w-1/7">
      <Image
        src={logo}
        alt="image" width="306.38px"
        height="90px" />
      <h4 className='text-xl text-white underline font-bold mt-3.5'>
          Welcome aboard!
      </h4>

      <p className='text-white  font-medium
        text-[18px] pb-1 mt-2 w-[288px]'>Notorious Pirates
        is an NFT  MMORPG(Massively Multiplayer
        Online Roleplaying Game) aimed at  allowing its
        holders to earn while they play.
        Come plunder with us!
      </p>
    </div>
  );
};

export default FooterPartOne;
