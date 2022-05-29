import Paging from './Paging';
import SideNavBar from '../molecules/SideNavBar';
import SearchBar from '../atoms/SearchBar';
import background from '../assets/images/background.png';
import Image from 'next/image';
import {FC, useEffect, useState} from 'react';
import NewsBanner from '../molecules/NewsBanner';
// import newsbanner from '../assets/images/newsbanner.png';
import NewsArchive from '../assets/images/news-archive.png';
import {INews} from '../../lib/types';


const FORWARD_PAGES = 10;
const TOTALE_IN_PAGE = 3;
const BACKWARD_PAGES = 10;

const News: FC<{
  news: INews[]
}> = ({news}) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [paginatedNews, setPaginatedNews] = useState<INews[]>([]);

  useEffect(() => {
    let allNews = news;

    // TODO: Use debounced fetching searches (react-query)
    if (search.length) {
      allNews = news.filter((article) => {
        return (article?.title?.toLowerCase()
            .includes(search.toLocaleLowerCase()) ||
            article?.description?.toLowerCase()
                .includes(search.toLocaleLowerCase())
        );
      });
    }
    const min = page-1;
    const max = page-1+TOTALE_IN_PAGE;
    setPaginatedNews(allNews.slice(min, max));
  }, [search, page, news, setPaginatedNews]);

  const totalPages = parseInt(`${Math.ceil(news.length/TOTALE_IN_PAGE)}`);

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
        <div className="relative container mx-auto grid z-20
           lg:grid-cols-[minmax(0,1fr)_19.375rem] gap-[2.375rem]">
          <div className='pb-5 mt-10 flex flex-col lg:pl-36'>
            <Paging
              onNext={(e)=> page < news.length &&
                setPage((prevPage) => ++prevPage)}
              onFirst={(e)=> setPage(1)}
              onLast={(e)=> setPage(totalPages)}
              forward={FORWARD_PAGES}
              backward={BACKWARD_PAGES}
              onBackward={(e)=> setPage(
                  (prevPage) => prevPage-BACKWARD_PAGES > 0?
                  prevPage-BACKWARD_PAGES:1)}
              onForward={(e)=> setPage(
                  (prevPage) => prevPage+FORWARD_PAGES <= news.length?
                  prevPage+FORWARD_PAGES:totalPages)}
              onPrevious={(e)=> page > 0 && setPage((prevPage) => --prevPage)}
              title={<div className='text-[35px] flex items-center
              justify-center font-semibold text-white'
              >News <span className='text-notorious-golden-500'>List!</span>
              </div>}
              totalPages={totalPages}
              currentPage={page}
            >
              {paginatedNews&&
                paginatedNews.map((article, index) => {
                  return (
                    <NewsBanner
                      key={index}
                      title={article.title}
                      description={article.description.repeat(100)}
                      time={article.date}
                      comments={3}
                      _id={article._id}
                    />
                  );
                })
              }
            </Paging>
          </div>
          <div className='pb-5 mt-10 hidden lg:flex flex-col'>
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
        <div className='absolute h-full w-full top-0 bg-black z-10'>
          <div className='background'>
            <Image
              src={background}
              width={1900}
              height={1191}
              alt="Notorious pirates background image"
              layout='fill'
              objectFit='cover' />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
