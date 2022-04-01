import ArrowNext from '../assets/svgs/Arrow 1.svg';
import ArrowPrev from '../assets/svgs/Arrow 2.svg';
import Image from 'next/image';
import {FC, useEffect} from 'react';

const Carousel : FC<{
    id: string;
    title: string;

}> = ({
  id,
  title,
}) => {
  useEffect(() => {
    require('tw-elements');
  });

  return (
    <div id={id} className="carousel slide relative
      bg-carousel bg-cover w-[911px] h-[261px]"
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
        </button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <div className="carousel-caption hidden md:block
              text-center">
            <h1 className="text-2xl text-white">{title}
              <span className='text-yellow-600 text-xl block mb-5'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-base font-normal'>
              Discover the true meaning of notoriety in the<br/>
                world’s first upcoming Pirate themed Metaverse</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-5'>
                  Learn More...
            </button>
          </div>
        </div>
        <div className="carousel-item  relative float-left w-full">
          <div className="carousel-caption hidden md:block
              text-center">
            <h1 className="text-2xl text-white">{title}
              <span className='text-yellow-600 text-xl block mb-5'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-base font-normal'>
            Discover the true meaning of notoriety in the<br/>
                world’s first upcoming Pirate themed Metaverse</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-5'>
                  Learn More...
            </button>
          </div>
        </div>
        <div className="carousel-item  relative float-left w-full">
          <div className="carousel-caption hidden md:block
              text-center">
            <h1 className="text-2xl text-white">{title}
              <span className='text-yellow-600 text-xl block mb-5'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-base font-normal'>
            Discover the true meaning of notoriety in the<br/>
                world’s first upcoming Pirate themed Metaverse</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-5'>
                  Learn More...
            </button>
          </div>
        </div>
        <div className="carousel-item  relative float-left w-full">
          <div className="carousel-caption hidden md:block
              text-center">
            <h1 className="text-2xl text-white">{title}
              <span className='text-yellow-600 text-xl block mb-5'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-base font-normal'>
            Discover the true meaning of notoriety in the<br/>
                world’s first upcoming Pirate themed Metaverse</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-5'>
                  Learn More...
            </button>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="carousel-caption hidden  md:block
              text-center">
            <h1 className="text-2xl text-white">{title}
              <span className='text-yellow-600 text-xl block mb-5'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-base font-normal'>
              Discover the true meaning of notoriety in the<br/>
                world’s first upcoming Pirate themed Metaverse</p>
            <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-5'>
                  Learn More...
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex
         items-center justify-center p-0 text-center border-0 hover:outline-none
          hover:no-underline focus:outline-none focus:no-underline left-0"
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
          hover:no-underline focus:outline-none focus:no-underline right-0"
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
