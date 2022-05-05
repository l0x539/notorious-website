import {useLottie} from 'lottie-react';
import {FC, useEffect, useState} from 'react';
import TreasureOpenJson from '../assets/json/teasor opening.json';

const TreasureOpen: FC<{isHovering: boolean}> = ({isHovering}) => {
  const [playing, setPlaying] = useState(false);

  const options = {
    animationData: TreasureOpenJson,
    loop: true,
    autoplay: true,
  };

  const {View, stop, play} = useLottie(options);

  useEffect(() => {
    if (isHovering && !playing) {
      setPlaying(true);
      play();
    }

    if (!isHovering) {
      setPlaying(false);
      stop();
    }
  }, [isHovering, play, stop, setPlaying, playing]);

  return (
    <div>
      {View}
    </div>
  );
};

export default TreasureOpen;
