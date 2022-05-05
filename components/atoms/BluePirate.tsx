import {useLottie} from 'lottie-react';
import BluePirateJson from '../assets/json/bluePirate.json';

const BluePirate = () => {
  const options = {
    animationData: BluePirateJson,
    loop: true,
    autoplay: true,
  };

  const {View} = useLottie(options);

  return (
    <>
      {View}
    </>
  );
};

export default BluePirate;
