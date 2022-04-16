import {useLottie} from 'lottie-react';
import NotoriousPiratesJson from '../../assets/json/notorious-pirates.json';


const NotoriousPiratesMain = () => {
  const options = {
    animationData: NotoriousPiratesJson,
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

export default NotoriousPiratesMain;
