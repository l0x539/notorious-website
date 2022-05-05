import bannerlogo from '../assets/svgs/bannerlogo.svg';
import Image from 'next/image';
import {FC} from 'react';
// mr-133px ml-20px

const NewsBanner: FC<{
    title: string;
    description:string;
    time:string;
    comments:number;

  }> = ({title, description, time, comments}) => {
    return (
      <div className="container mx-8 my-5 bg-banner bg-cover border-4
      border-solid border-[#8F8F8F] flex items-center
      flex-wrap banner-div hover:shadow-banner text
      cursor-pointer">
        <div className='inline-flex mx-20 banner'>
          <Image src={bannerlogo} width={141} height={139} alt=""
            className=
              'hover:drop-shadow-[0_4px_50px_1px_rgba(187, 173, 123, 1)]'/>
          <div className='my-2 banner-items'>
            <h1 className='text-3xl fonst-semibold
            text-white text-center'>{title}
              <span className='text-notorious-golden-500 block mb-4'>
                Notorious Pirate!</span></h1>
            <p className='text-white text-center text-[22px] font-normal'>
              Discover the true meaning of notoriety in the <br/>
              {description}
            </p>
            <div className='my-5 text-center'>
              <span className='text-white no-text-shadow font-bold text-[22px]'>
                {time} | {comments} comments
              </span>

            </div>
          </div>
        </div>
      </div>
    );
  };

export default NewsBanner;
