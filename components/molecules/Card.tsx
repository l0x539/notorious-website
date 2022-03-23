import Hanger from '../atoms/Hanger';
import Image from 'next/image';
import {FC} from 'react';
const Card: FC<{
  title: string;
  Icon?: string;
  iconAlt: string;
}> = ({title, Icon, iconAlt}) => {
  return (
    <div className=' mx-8 px-5 md:px-12 relative mt-20'>
      <div className="absolute h-[451px]">
        <div className='absolute'>
          <Hanger />
        </div>
        <div className='bg-card bg-cover h-full w-[436px] rounded-lg absolute'>
          <h4 className="mt-4 text-center text-white text-3xl">
            {title}
            <br></br>
            <span className='text-yellow-600 text-3xl'>
            Notorious Pirates Club</span>
          </h4>
          {Icon && (
            <div className="flex justify-center mt-5 ">
              <Image src={Icon} alt={iconAlt} width={336} height={314} />
            </div>
          )}

        </div>
      </div>
    </div>

  );
};


export default Card;
