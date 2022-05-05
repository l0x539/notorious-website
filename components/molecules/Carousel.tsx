import ArrowNext from '../assets/svgs/Arrow 1.svg';
import ArrowPrev from '../assets/svgs/Arrow 2.svg';
import Image from 'next/image';
import {FC, ReactChild, useEffect} from 'react';

const Carousel : FC<{
    id: string;
    title: ReactChild;
    description: ReactChild
}> = ({
  id,
  title,
  description,
}) => {
  useEffect(() => {
    require('tw-elements');
  });

  return (
    <div id={id} className="carousel slide relative bg-cover"
      data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0
         left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1" >
        </button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2" ></button>
        {/* <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2" >
        </button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="2"
          aria-label="Slide 3" >
        </button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="3"
          aria-label="Slide 4" >
        </button>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="4"
          aria-label="Slide 5" >
        </button> */}
      </div>
      <div className="carousel-inner relative overflow-hidden">
        <div className="carousel-item
        w-full bg-carousel border-8 border-[#C0AB75]
        carousel-item active  float-left pb-12
        shadow-[inset_0px_4px_62px_rgba(192,_171,_117,_0.25)]">
          <div className=" text-center">
            <h1 className="text-[1.875rem] text-white mt-4">{title}
            </h1>
            <p className='text-white text-center font-normal
            text-[1.375rem] my-1'>
              {description}</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-1'>
                  Learn More...
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex
         items-center justify-center p-0 text-center border-0 hover:outline-none
          hover:no-underline underline-offset-4
          focus:outline-none focus:no-underline underline-offset-4
          left-0"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon
         inline-block bg-no-repeat" aria-hidden="true">
          <Image src={ArrowPrev} width={1} height={0} alt="" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex
         items-center justify-center p-0 text-center border-0 hover:outline-none
          hover:no-underline underline-offset-4
          focus:outline-none focus:no-underline underline-offset-4
          right-0"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon
         inline-block bg-no-repeat" aria-hidden="true">
          <Image src={ArrowNext} width={1} height={0} alt="" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
};

export default Carousel;
