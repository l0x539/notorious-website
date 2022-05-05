import Image from 'next/image';
import Treasure from '../molecules/Treasure';
import RoadMap from '../assets/images/roadmaptext.png';

const Treasures = () => {
  return (
    <div className='bg-black'>
      <div className='bg-main bg-no-repeat bg-cover
        border-b-[5px] border-[#8F8F8F] py-8'>
        <div className='flex justify-center'>
          <Image
            width={584}
            height={137}
            src={RoadMap}
            alt="Road map notorious pirates"
          />
        </div>
        <div
          className='max-w-[1572px] mx-auto grid grid-cols-4
            grid-rows-2 gap-16 gap-y-24 py-20
            bg-maproad bg-cover bg-no-repeat bg-center
            px-16'
        >
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-bold  text-xl
               leading-6 paragraphe'>
                Create <span className='text-[#FFCB45]'>interactive <br/>
                website </span>and discord <br/>server to help grow <br/>
                community
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-6 paragraphe'>
                Create one hundred <br/>
                unique <span className='text-[#FFCB45]'>Pirate <br/>
                Characters</span>, each with <br/>
                their own story & lore
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-6 paragraphe'>
                Transform characters <br/>
                into <span className='text-[#FFCB45]'>
                animated NFTs</span>, <br/>
                bundle into NFT Pirate <br/>
                Collections
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-7 paragraphe'>
                Grant <span className='text-[#FFCB45]'>
                Early Access</span> to <br/>
                Minting/Releases to <br/>
                Whitelisted members
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-7 paragraphe'>
                Release <span className='text-[#FFCB45]'>NFT <br/>
                Collections</span> to the <br/>
                general public
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-7 paragraphe'>
                Complete <br/>
                development of <br/>
                <span className='text-[#FFCB45]'>Pirate themed</span> NFT<br/>
                MMORPG
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-7 paragraphe'>
                Release videogame to <br/>
                the public. <span className='text-[#FFCB45]'>NFT <br/>
                holders</span> can play as <br/>
                their characters
              </p>
            </div>
          </Treasure>
          <Treasure >
            <div className="text-center mt-8">
              <p className='text-white font-semibold text-xl
               leading-7 paragraphe'>
                Announce the winner <br/>
                of our <span className='text-[#FFCB45]'>
                Mega Royalty</span> <br/>
                giveaway
              </p>
            </div>
          </Treasure>
        </div>
      </div>
    </div>
  );
};

export default Treasures;
