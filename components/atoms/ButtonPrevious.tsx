
import ArrowPrev from '../assets/svgs/Arrow 2.svg';
import Image from 'next/image';
import {FC} from 'react';

const ButtonPrev: FC<{
    target:string

  }> = ({target}) => {
    return (
      <button
        className='carousel-control-prev absolute top-0 bottom-0
       flex items-center justify-center p-0 text-center border-0
        hover:outline-none hover:no-underline focus:outline-none
        focus:no-underline left-0'
        type="button"
        data-bs-target={target}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon
       inline-block bg-no-repeat" aria-hidden="true"></span>
        <Image src={ArrowPrev} width={1} height={0} alt="" />
      </button>
    );
  };

export default ButtonPrev;
