/* eslint-disable react/jsx-no-comment-textnodes */

import Card from '../molecules/Card';
import Image from 'next/image';
import background from '../assets/images/background.png';
import {Timeline} from 'react-twitter-widgets';

const MainPosters = () => {
  return (
    <div className='pb-16 relative border-b-[5px] border-[#8F8F8F]'>
      <div className="container mx-auto grid grid-flow-col gap-40
      grid-cols-[repeat(2,_minmax(0,_1fr))] mb-24">
        <Card>
          <div className='pb-5 flex flex-col flex-wrap'>
            <div className='px-10 mx-5 mb-28 max-h-[43.75rem] mt-10
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700
            overflow-y-scroll scrollbar-thumb-rounded-full
             scrollbar-track-rounded-full'>
              <h1 className='font-semibold text-3xl text-white mb-7'>
                Frequently Asked <span className='font-medium text-3xl
                text-yellow-500'> Questions</span></h1>
              <p className=' text-xl text-white paragraphFAQ'>
                How do I get involved? <br/>
                What is notoriety? <br/>
                What type of game is coming? <br/>
                When will the game be completed? <br/>
                How do I purchase a pirate? <br/>
                How are pirates created? <br/>
                 Who are the artists? <br/>
                Do you host competitions or giveaways? <br />
                <span className='text-yellow-400 underline'>
                  What are Founder roles?</span> <br/>
                Founder roles are reserved for players who <br/>
                purchase a pirate within the first month of the initial <br/>
                NFT presale. <br/>
                What was the inspiration for this project? <br/>
                Can I apply to become a staff member? <br/>
                I have no money.Can I still participate?<br/>
                Founder roles are reserved for players who <br/>
                purchase a pirate within the first month of the initial <br/>
                NFT presale. <br/>
                What was the inspiration for this project? <br/>
                Can I apply to become a staff member?
                I have no money.Can I still participate?<br/>
                Founder roles are reserved for players who <br/>
                purchase a pirate within the first month of the initial <br/>
                NFT presale. <br/>
                What was the inspiration for this project? <br/>
                Can I apply to become a staff member? <br/>
                I have no money.Can I still participate?<br/>
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className='pb-5 flex flex-col'>
            <h1 className='font-semibold text-3xl text-white px-10 mx-5 mt-10'>
                The Good <span className='font-medium text-3xl
                text-yellow-500'> Captain&apos;s Log</span></h1>
            <div className='grid justify-items-center
            shadow-[0px_4px_12px_17px_rgba(255,203,69,0.25)]
            mr-[62px] ml-[42px] mt-5 rounded mb-5
            '>


              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: '',
                }}
                options={{
                  height: '774',
                  width: '589',
                  theme: 'dark',
                }}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className='absolute h-full w-full top-0 bg-black'>
        <div className='background z-[-1]'>
          <Image
            src={background}
            // width={1900}
            // height={1191}
            alt="Notorious pirates background imaeg"
            layout='fill'
            objectFit='cover' />
        </div>
      </div>
    </div>

  );
};


export default MainPosters;
