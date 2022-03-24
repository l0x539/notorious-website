
import ArrowNext from '../assets/svgs/Arrow 1.svg';
import Image from 'next/image';
import {FC} from 'react';

const ButtonNext: FC<{
  target:string

}> = ({target}) => {
  return (
    <button
      className="carousel-control-next absolute top-0 bottom-0
      flex items-center,justify-center p-0 text-center
      border-0 hover:outline-none hover:no-underline
      focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target={target}
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon
      inline-block bg-no-repeat" aria-hidden="true"></span>
      <Image src={ArrowNext} width={1} height={0} alt="" />
    </button>
  );
};

export default ButtonNext;
