import Paging from './Paging';
import SideNavBar from '../molecules/SideNavBar';
import SearchBar from '../atoms/SearchBar';
import background from '../assets/images/background.png';
import Image from 'next/image';
import {useState} from 'react';
import NewsBanner from '../molecules/NewsBanner';
// import newsbanner from '../assets/images/newsbanner.png';
import NewsArchive from '../assets/images/news-archive.png';
const News = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className='bg-news bg-cover bg-no-repeat py-36 px-20
       flex justify-center border-b-[5px]
       border-b-[#8F8F8F] border-b-solid
         align-center'>
        <Image
          src={NewsArchive}
          width={806}
          height={113}
          alt="News"/>
      </div>
      <div className="relative border-b-[5px]
       border-b-[#8F8F8F]">
        <div className='absolute h-full w-full top-0 bg-black'>
          <div className='background z-[-1]'>
            <Image
              src={background}
              width={1900}
              height={1191}
              alt="Notorious pirates background image"
              layout='fill'
              objectFit='cover' />
          </div>
        </div>
        <div className="container mx-auto grid
           grid-cols-[minmax(0,1fr)_19.375rem] gap-6">
          <div className='pb-5 mt-10 flex flex-col'>
            <Paging
              onNext={(e)=> console.log('hey')}
              onFirst={(e)=> console.log('hey')}
              onLast={(e)=> console.log('hey')}
              forward={10}
              backward={10}
              onBackward={(e)=> console.log('hey')}
              onForward={(e)=> console.log('hey')}
              onPrevious={(e)=> console.log('hey')}
              title={<div className='text-3xl font-semibold text-white'
              >News <span className='text-yellow-600'>List!</span> </div>}
              totalPages={10}
              currentPage={1}
            >
              <NewsBanner
                title='Find out what it means to become a'
                description=' world’s first upcoming Pirate themed Metaverse'
                time='2022-01-21 17:00:00'
                comments={3}

              />
              <NewsBanner
                title='Find out what it means to become a'
                description=' world’s first upcoming Pirate themed Metaverse'
                time='2022-01-21 17:00:00'
                comments={3}

              />
              <NewsBanner
                title='Find out what it means to become a'
                description=' world’s first upcoming Pirate themed Metaverse'
                time='2022-01-21 17:00:00'
                comments={3}

              />

            </Paging>
          </div>
          <div className='pb-5 mt-10 flex flex-col'>
            <SideNavBar />
            <div className='mt-[25rem]'>
              <SearchBar
                placeholder='Search...'
                value={search}
                OnChange={(e)=> setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
