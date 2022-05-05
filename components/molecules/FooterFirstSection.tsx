import Image from 'next/image';
import logo from '../assets/images/np.png';


const FooterPartOne = ()=>{
  return (
    <div className="w-1/7">
      <Image
        src={logo}
        alt="image" width="306.38px"
        height="90px" />
      <h4 className='text-xl text-white underline
      underline-offset-4 font-bold mt-3.5 ml-4'>
          Welcome aboard!
      </h4>

      <p className='text-white font-semibold leading-5
        text-[1.125rem] pb-1 mt-3 w-[18rem] ml-4'>Notorious Pirates
        is an NFT  MMORPG(Massively Multiplayer
        Online Roleplaying Game) aimed at  allowing its
        holders to earn while they play.
        Come plunder with us!
      </p>
    </div>
  );
};

export default FooterPartOne;
