import bannerlogo from '../assets/svgs/bannerlogo.svg';
import Image from 'next/image';
import {FC} from 'react';
import Link from 'next/link';
// mr-133px ml-20px

const NewsBanner: FC<{
    title: string;
    description:string;
    time:string;
    comments:number;
    _id: string
  }> = ({title, description, time, comments, _id}) => {
    return (
      <Link href={'/news/[article]'} as={`/news/${_id}`} passHref>
        <div className="container my-5 bg-banner bg-cover border-4
      border-solid border-[#8F8F8F] flex items-center
      flex-wrap banner-div hover:shadow-banner text
      cursor-pointer">
          <div className='inline-flex flex-col justify-center sm:justify-start
          items-center sm:items-start w-full
          sm:flex-row lg:mx-20 banner'>
            <Image src={bannerlogo} width={141} height={139} alt=""
              className=
                'hover:drop-shadow-[0_4px_50px_1px_rgba(187, 173, 123, 1)]'/>
            <div className='my-2 sm:banner-items'>
              <h1 className='text-3xl fonst-semibold
            text-white text-center'>{title}
                <span className='text-notorious-golden-500 block mb-4'>
                Notorious Pirate!</span></h1>
              <p className='text-white text-center text-[22px] max-h-[40vh]
              lg:max-h-[70px] max-w-[50vw] lg:max-w-[500px] truncate
            font-normal'>
                {description}
              </p>
              <div className='my-5 text-center'>
                <span
                  className='text-white no-text-shadow font-bold text-[22px]'>
                  {time} | {comments} comments
                </span>

              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

export default NewsBanner;
