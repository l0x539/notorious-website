import Paging from './Paging';
import SideNavBar from '../molecules/SideNavBar';
import SearchBar from '../atoms/SearchBar';
import background from '../assets/images/background.png';
import Image from 'next/image';
import {useState} from 'react';
const News = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className='absolute h-full w-full top-0 bg-black'>
        <div className='background z-[-1]'>
          <Image
            src={background}
            width={1900}
            height={1191}
            alt="Notorious pirates background imaeg"
            layout='fill'
            objectFit='cover' />
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto grid
           grid-cols-[minmax(0,1fr)_19.375rem] gap-4">
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
