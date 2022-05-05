import {useLottie} from 'lottie-react';
import GhostJson from '../assets/json/ghost.json';

const Ghost = () => {
  const options = {
    animationData: GhostJson,
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

export default Ghost;
