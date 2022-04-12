import Image from 'next/image';
import {
  Children,
  FC,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import styles from '../../styles/carousel.module.scss';

import ArrowPrev from '../assets/images/Arrowleft.png';
import ArrowNext from '../assets/images/ArrowRight.png';

const CarouselTwo: FC<{
  show: number,
}> = ({
  show,
  children,
}) => {
  const [items, setItems] = useState<(
    ReactChild | ReactFragment | ReactPortal | undefined
  )[]>(Children.toArray(children));
  const [index, setIndex] = useState(0);
  const shiftLeft = () => {
    items.unshift(items.pop());
    setItems(items.map((item, key) => (
      item
    )));
    setIndex(index-1);
  };

  const shiftRight = () => {
    items.push(items.shift());
    setItems(items.map((item, key) => (
      item
    )));
    setIndex(index+1);
  };

  return (
    <div className='relative'>
      <div
        className=''>
        <div className="flex justify-evenly
        align-center clip-hidden py-8 ">
          <div className='flex relative left-0'>
            {items.slice(0, show + 2).map((item, i) => (
              <div className={
                `mx-5 ${i === items.length?
                  styles.hide:styles.show}`
              } key={i + index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex
         items-center justify-center p-0 text-center border-0 hover:outline-none
          hover:no-underline focus:outline-none focus:no-underline -left-0
          2xl:-left-40"
        type="button"
        onClick={shiftLeft}
      >
        <span className="inline-block bg-no-repeat" aria-hidden="true">
          <Image src={ArrowPrev} width={43} height={50} alt="" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex
         items-center justify-center p-0 text-center border-0 hover:outline-none
          hover:no-underline focus:outline-none focus:no-underline 2xl:-right-40
          -right-0 "
        type="button"
        onClick={shiftRight}
      >
        <span className="
         inline-block bg-no-repeat" aria-hidden="true">
          <Image src={ArrowNext} width={43} height={50} alt="" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselTwo;
