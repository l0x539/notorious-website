/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import banner from '../assets/images/Banner.png';
import d9plaqo from '../assets/images/d9plaqo.png';

const NewsArticlePartTow= ()=>{
  return (
    <div className='bg-black border-b-[5px]
    border-b-[#8F8F8F]'>

      <div className="bg-main text-center text-white ">
        <div className="container mx-auto py-8 ">
          <div className="bg-pngwing bg-cover bg-norepeat bg-center
          border-2 border-gray-400 ">
            <div className="py-5">
              <p>Posted by The Crew on</p>
              <p>January 31st, 2022, 2 p.m.</p>
            </div>
            <div className=''>

              <Image

                src={banner}
                alt="twitter"
                width='577.56'
                height='325'/>
            </div>
            <div className='mx-[11.313rem] my-3 bg-black/50
            shadow-[0px_4px_27px_24px_rgba(0,0,0,0.25)]'>
              <p className='px-10 py-10 text-xl '>
        Avast young swashbucklers, and old buccaneers! It&apos;s been a
             while since we&apos;ve hosted a GM
             event here at Pirates Online Retribution, and so to break
              that recent period of idleness,
              // eslint-disable-next-line react/no-unescaped-entities
              the crew here at POR will be venturing to Barbossa&apos;s
              lair on Devil&apos;s Anvil next Friday,
              August 18th, at roughly 7pm Eastern Standard Time to
              gift out heaps of rare treasures,
               and legendary items to all who choose to attend! Be
               it also known that to show our appreciation for all
               who have helped us get this far,
                that any pirate who holds the title of Pirate King,
                or Pirate God shall receive additional rare items
                depending on his or her status.
                 We encourage everyone who should choose to
                 come to record the event,
                  and to upload said recording to Youtube or
                  elsewhere to help raise awareness about our swashbuckling MMO!
                   Fair winds for now me hearties!</p>
              <p className='px-10 pb-6 text-xl '> Be sure to join us on our Forums over at https://piratesforums.com as well
         to connect with yer fellow Pirates and Swashbucklers here at POR!. </p>
            </div>
            <div className='flex justify-center py-3  '>
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
