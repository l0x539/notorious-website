import {useLottie} from 'lottie-react';
import CompassJson from '../assets/json/compass.json';

const Compass = () => {
  const options = {
    animationData: CompassJson,
    loop: true,
    autoplay: true,
  };

  const {View} = useLottie(options);

  return (
    <div className='w-[120px] h-[120px]'>
      {View}
    </div>
  );
};

export default Compass;
