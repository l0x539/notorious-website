import {useLottie} from 'lottie-react';
import OopsJson from '../assets/json/oops.json';

const Oops = () => {
  const options = {
    animationData: OopsJson,
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

export default Oops;
