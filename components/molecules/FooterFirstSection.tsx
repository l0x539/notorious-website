import Image from 'next/image';
import logo from '../../assets/images/np.png';


const FooterPartOne = ()=>{
  return (
    <div className="w-1/6">
      <Image
        src={logo}
        alt="image" width="306.38px"
        height="90px" />
      <h4 className='text-xl text-white underline font-bold'>
          Welcome aboard!
      </h4>

      <p className='text-white  text-lg pb-1'>Notorious Pirates
        is an NFT MMORPG
        (Massively Multiplayer
        Online Roleplaying Game) aimed at allowing its
        holders to earn while they play.
        Come plunder with us!
      </p>
    </div>
  );
};

export default FooterPartOne;
