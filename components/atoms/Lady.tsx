import {useLottie} from 'lottie-react';
import LadyJson from '../assets/json/lady.json';

const Lady = () => {
  const options = {
    animationData: LadyJson,
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

export default Lady;
