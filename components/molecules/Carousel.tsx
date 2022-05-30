import ArrowNext from '../assets/svgs/Arrow 1.svg';
import ArrowPrev from '../assets/svgs/Arrow 2.svg';
import Image from 'next/image';
import {FC, useEffect} from 'react';
import {INews} from '../../lib/types';
import Link from 'next/link';

const Carousel : FC<{
  news: INews[];
  id: string;
}> = ({
  news=[],
  id,
}) => {
  useEffect(() => {
    require('tw-elements');
  });

  return (
    <div id={id} className="carousel slide relative bg-cover"
      data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0
         left-0 flex justify-center p-0 mb-4">
        {
          (Array(news.length).fill(0).map((_, index) => {
            return (
              <button
                key={index}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide-to={`${index}`}
                className={!index?'active':''}
                aria-current="true"
                aria-label={`Slide ${index}`} >
              </button>
            );
          }))
        }
      </div>
      <div className="carousel-inner relative w-full overflow-hidden
      shadow-[inset_0px_4px_62px_rgba(192,_171,_117,_0.25)]
      bg-carousel border-8 border-[#C0AB75] h-[269px]
      ">
        {
          news.map((article, index) => {
            const beautifyTitle = article?.title?.split('Notorious Pirate!') ??
             '';
            return (
              <div key={index}
                className={`carousel-item ${index=== 0 ? 'active':''}
                w-full carousel-item float-left pb-12
                `}>
                <div className=" text-center">
                  <h1 className="text-[1.875rem] text-white mt-4">
                    {beautifyTitle[0]}
                    {
                      beautifyTitle.length > 1 ?
                      (
                        <>
                          <span className='text-3xl text-notorious-golden-500
                            truncate block'>
                            Notorious Pirate!</span>
                          {beautifyTitle.slice(1).join('Notorious Pirate!')}
                        </>
                      ): ''
                    }

                  </h1>
                  <p className='text-white text-center font-normal
            text-[1.375rem] my-1'>
                    {article.description}</p>
                  <Link
                    href={'/news/[article]'}
                    as={`/news/${article._id}`} passHref>
                    <button className='text-black bg-white text-sm font-normal
                   py-1 px-4 border rounded mt-1'>
                  Learn More...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        }
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
