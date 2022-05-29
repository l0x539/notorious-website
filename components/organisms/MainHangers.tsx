import Image from 'next/image';
import Card from '../molecules/Card';
import Carousel from '../molecules/Carousel';
import PirateMoon from '../assets/images/piratesmoon.png';
import Ocean from '../assets/images/d.png';
import Divider from '../atoms/Divider';
import {FC} from 'react';
import {INews} from '../../lib/types';

const MainHangers:FC<{
  news: INews[]
}> = ({
  news,
}) => {
  return (
    <div className='bg-black hidden lg:block'>
      <div className='bg-main bg-no-repeat bg-cover
        border-b-[5px] border-[#8F8F8F]'>
        <div
          className='container mx-auto grid grid-cols-[27.25rem_1fr]
          gap-[5.125rem]'
        >
          <div className='mb-24'>
            <Card>
              <div className='flex flex-col align-center
              justify-center py-[1rem] px-[2.875rem]
              '>
                <h1 className='font-semibold text-center text-3xl text-white
                  mb-4 truncate'>
                Welcome to <div className='text-3xl
                text-notorious-golden-500 truncate'>
                Notorious Pirates Club</div>
                </h1>
                <div className='rounded border-4 border-[#C0AB75]'>
                  <Image
                    src={PirateMoon}
                    layout='responsive'
                    alt="Pirate image"
                  />
                </div>
              </div>
            </Card>
            <Card>
              <div className='flex flex-col align-center
              justify-center py-[2.875rem] px-[2.875rem]
              drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]'>
                <div className='bg-[#202020]
                  rounded border-4 border-[#C0AB75]'>
                  <h1 className='font-semibold text-center
                    text-3xl text-white p-4'>
                    <span>
                        Join
                      <span
                        className='text-notorious-golden-500 mx-2'>4,000+</span>
                        other
                    </span>
                    <div>notorious pirates</div>
                    <span className='text-notorious-golden-500 mx-2'>on</span>
                    <span className='text-blue-400 mx-1'>Discord!</span>
                  </h1>
                  <Image
                    src={Ocean}
                    layout='responsive'
                    alt="Pirate image"
                  />
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card>
              <div className='flex flex-col align-center
              justify-center pt-[1rem] pb-[4.75rem] px-[2.875rem]
              '>
                <Carousel
                  id="carousel-news"
                  news={news} />
                <Divider />
                <div className='text-center'>
                  <h1 className='font-semibold text-center text-3xl text-white
                  truncate'>
                      Find out what it means to become a
                    <div className='text-3xl
                text-notorious-golden-500 truncate'>Notorious Pirate!</div>
                  </h1>
                  <div className='text-white text-xl mb-1'>
                      January 5th, 2021 at 2:30pm
                  </div>
                  <div className='text-white text-lg lg:px-48 mb-4'>
                      Discover the true meaning of notoriety in the
                      world’s first upcoming Pirate themed Metaverse</div>
                  <button className='text-black bg-white text-sm font-normal
                   py-[9px] text-[1.125rem] px-[1.125rem] border rounded mt-1'>
                  Learn More...
                  </button>
                </div>
                <Divider />
                <div className='text-center'>
                  <h1 className='font-semibold text-center text-3xl text-white
                  truncate'>
                      Find out what it means to become a
                    <div className='text-3xl
                text-notorious-golden-500 truncate'>Notorious Pirate!</div>
                  </h1>
                  <div className='text-white text-xl mb-1'>
                      January 5th, 2021 at 2:30pm
                  </div>
                  <div className='text-white text-lg 2xl:px-48 mb-4'>
                      Discover the true meaning of notoriety in the
                      world’s first upcoming Pirate themed Metaverse</div>
                  <button className='text-black bg-white text-sm font-normal
                   py-[9px] text-[1.125rem] px-[1.125rem] border rounded mt-1'>
                  Learn More...
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHangers;
