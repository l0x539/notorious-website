import {useLottie} from 'lottie-react';
import CaptainJson from '../assets/json/captain.json';

const Captain = () => {
  const options = {
    animationData: CaptainJson,
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

export default Captain;
