/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import {FC} from 'react';
import {INews} from '../../lib/types';
import d9plaqo from '../assets/images/d9plaqo.png';

const NewsArticlePartTow: FC<{
  article: INews
}> = ({
  article,
}) =>{
  return (
    <div className='bg-black border-b-[5px]
    border-b-[#8F8F8F]'>

      <div className="bg-main bg-cover bg-no-repeat text-center text-white ">
        <div className="container mx-auto py-14 px-[103px]">
          <div className="bg-pngwing bg-cover bg-norepeat bg-center
          border-2 border-gray-400">
            <div className="py-5 text-[22px] ">
              <p>Posted by {article.owner} on</p>
              <p>{article.date}</p>
            </div>
            <div className='flex justify-center'>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.img}
                alt={`${article.title} image.`}
                width='577.56'
                height='325'/>
            </div>
            <div className='mx-[11.313rem] my-3 bg-black/50
            shadow-[0px_4px_27px_24px_rgba(0,0,0,0.25)]'>
              <p className='px-10 py-10 text-xl '>
                {article.description}</p>
              <p className='px-10 pb-14 text-xl '> Be sure to join us on our Forums over at https://piratesforums.com as well
         to connect with yer fellow Pirates and Swashbucklers here at POR!. </p>
            </div>
            <div className='flex justify-center pb-8  '>
              <Image
                src={d9plaqo}
                alt="twitter"
                width='112.7'
                height='110'/>
              <p className='text-2xl flex items-center '>
                  The Crew @ NPC</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default NewsArticlePartTow;
