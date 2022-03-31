import MainPosters from '../organisms/MainPosters';
import twitter from '../assets/images/twitter.png';
import Image from 'next/image';
import background from '../assets/images/sectionbg.png';


const Main = () => {
  return (
    <div className='container mx-auto'>
      <div className='absolute w-[118.75rem] h-[74.438rem] background'>
        <Image src={background} width={1900} height={1191} alt=""
          objectFit='cover' />
      </div>
      <div className='flex inline-flex justify-evenly lg:w-[118.75rem]
       lg:h-[74.438rem] md:w-2/3 md:h-2/3 sm:h-1/3'>
        <MainPosters>
          <div className='w-[43rem] h-[56.875rem] flex flex-col flex-wrap'>
            <div className='px-10 mx-5 w-[38.125rem] h-[43.75rem] mt-10
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700
            overflow-y-scroll scrollbar-thumb-rounded-full
             scrollbar-track-rounded-full'>
              <div className='w-[28.875rem] h-[3.438rem] '>
                <h1 className='font-medium text-3xl text-white'>
                Frequently Asked <span className='font-medium text-3xl
                text-yellow-500'> Questions</span></h1>
              </div>
              <div className='w-[27.375rem] h-[37.875rem]'>
                <p className=' text-xl text-white paragprah'>
                How do I get involved? <br/>
                What is notoriety? <br/>
                What type of game is coming?
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
                Can I apply to become a staff member?
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
                Can I apply to become a staff member?
                I have no money.Can I still participate?<br/>
                </p>
              </div>

            </div>
          </div>
        </MainPosters>
        <MainPosters>
          <div className='w-[43rem] h-[56.875rem] flex flex-col'>
            <div className='w-[28.875rem] h-[2.813rem] px-10 mx-5 mt-10
            flex flex-col flex-wrap'>
              <h1 className='font-medium text-3xl text-white'>
                The Good <span className='font-medium text-3xl
                text-yellow-500'> Captain&apos;s Log</span></h1>
            </div>
            <Image src={twitter} width={589} height={774} alt=""
              objectFit='contain' objectPosition='center'/>
          </div>

        </MainPosters>
      </div>
    </div>
  );
};

export default Main;
