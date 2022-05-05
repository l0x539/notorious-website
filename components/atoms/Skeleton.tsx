import {useLottie} from 'lottie-react';
import SkeletonJson from '../assets/json/Skull.json';

const Skeleton = () => {
  const options = {
    animationData: SkeletonJson,
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

export default Skeleton;
