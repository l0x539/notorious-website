import {useLottie} from 'lottie-react';
import RedPirateJson from '../../assets/json/red pirate.json';

const RedPirate = () => {
  const options = {
    animationData: RedPirateJson,
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

export default RedPirate;
