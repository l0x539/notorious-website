import {useLottie} from 'lottie-react';
import ShipJson from '../../assets/json/ship.json';

const Ship = () => {
  const options = {
    animationData: ShipJson,
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

export default Ship;
