import {useLottie} from 'lottie-react';
import Link from 'next/link';
import CompassJson from '../assets/json/compass.json';

const Compass = () => {
  const options = {
    animationData: CompassJson,
    loop: true,
    autoplay: true,
  };

  const {View} = useLottie(options);

  return (
    <Link href="/" passHref>
      <div className='w-[80px] h-[80px] cursor-pointer my-2'>
        {View}
      </div>
    </Link>
  );
};

export default Compass;
