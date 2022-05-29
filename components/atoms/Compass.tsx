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
      <div className='w-[120px] h-[120px]'>
        {View}
      </div>
    </Link>
  );
};

export default Compass;
