import ButtonNext from '../atoms/ButtonNext';
import ButtonPrev from '../atoms/ButtonPrevious';

import {FC} from 'react';
const Carousel: FC<{
  id: string;
  title: string;
  className?: string;

}> = ({
  id,
  title,
  className,
}) => {
  return (
    <div id={id}
      className={`carousel slide relative relative w-full bg-carousel 
      ${className}`}
      data-bs-ride="carousel">
      <div className={`carousel-indicators absolute 
      right-0 -bottom-10 left-0 flex justify-center p-0 mb-4`}>
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="0"
          className={`w-3 h-3 active`}
          aria-current='true'
          aria-label={`Slide 1`}
        ></button>
      </div>
      <div className={`carousel-inner rounded-xl overflow-hidden`}>
        <div className="carousel-caption hidden md:block absolute text-center">
          <h1 className="text-xl">{title}
            <span className='text-yellow-600 text-sm block'>
                Notorious Pirate!</span></h1>
          <p>Discover the true meaning of notoriety in the world’s
              first upcoming Pirate themed Metaverse</p>
          <button className='text-black bg-white font-semibold
           py-2 px-4 border rounded'>
           Learn More..</button>
        </div>
      </div>
      <ButtonNext target={`#${id}`} />
      <ButtonPrev target={`#${id}`} />
    </div>

  );
};


export default Carousel;


