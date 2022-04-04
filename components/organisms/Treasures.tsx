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
          className='container mx-auto grid grid-cols-4
            grid-rows-2 gap-16 gap-y-24 py-20
            bg-maproad bg-cover bg-no-repeat bg-center
            px-16'
        >
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
          <Treasure ></Treasure>
        </div>
      </div>
    </div>
  );
};

export default Treasures;
