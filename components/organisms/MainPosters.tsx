/* eslint-disable react/jsx-no-comment-textnodes */

import Card from '../molecules/Card';
import Image from 'next/image';
import background from '../assets/images/background.png';
import {Timeline} from 'react-twitter-widgets';

const FAQ = [
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
  {
    question: 'How do I get involved?',
    response: `What was the inspiration for this project?
    Can I apply to become a staff member?
    I have no money.Can I still participate?`,
  },
];

const MainPosters = () => {
  return (
    <div className='pb-[5.75rem] relative border-b-[5px] border-[#8F8F8F]'>
      <div className="container mx-auto grid grid-flow-col gap-40
      grid-cols-[repeat(2,_minmax(0,_1fr))]">
        <Card>
          <div className='flex flex-col flex-wrap
          drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]
          pl-[3.375rem] pr-[1.625rem] pb-[5.125rem] pt-[2.25rem]'>
            <div className='max-h-[49.5rem]
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700
            overflow-y-scroll scrollbar-thumb-rounded-full
             scrollbar-track-rounded-full'>
              <h1 className='font-semibold text-3xl text-white mb-7'>
                Frequently Asked <span className='font-medium text-3xl
                text-notorious-golden-500'> Questions</span></h1>
              {}
              <div>
                {FAQ.map(({question, response}, index) => {
                  return (
                    <div key={index}>
                      <h4 className='my-2 text-[25px] text-white
                      hover:text-notorious-golden-500 hover:cursor-pointer'>
                        {question}
                      </h4>
                      <p className='text-[20px] text-white'>
                        {response}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className='flex flex-col p-[2.5rem] pt-[2.25rem]'>
            <h1 className='font-semibold text-3xl text-white
            pb-[1.375rem]'>
                The Good <span className='font-medium text-3xl
                text-notorious-golden-500'> Captain&apos;s Log</span></h1>
            <div className='rounded-xl overflow-hidden
            shadow-[0px_4px_12px_17px_rgba(255,203,69,0.25)]'>
              <div className='h-[48.375rem] overflow-y-scroll scrollbar-thin
            scrollbar-thumb-gray-400 scrollbar-track-gray-700
            overflow-y-scroll scrollbar-thumb-rounded-full
            scrollbar-track-rounded-full
            '>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'piratenfts',
                  }}
                  options={{
                    width: '100%',
                    theme: 'dark',
                  }}
                />
              </div>
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
