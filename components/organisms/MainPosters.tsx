/* eslint-disable react/jsx-no-comment-textnodes */

import Card from '../molecules/Card';
import Image from 'next/image';
import background from '../assets/images/background.png';
import {Timeline} from 'react-twitter-widgets';

const FAQ = [
  {
    question: 'How do I get involved?',
    response: `First and foremost, we encourage you to
    join our Discord community,
    introduce yourself, and get to know a few folks. From there,
    if you decide this is a project you might be interested in,
    hopefully you’ll decide to become an official Notorious Pirate holder.`,
  },
  {
    question: 'What is notoriety?',
    response: `Notoriety is the system used to determine
    the “quality” of a character. Pirates which are more notorious are
    considered more valuable, and will possess additional benefits
    and capabilitieswithin the game. Notoriety is ranked between
    1 and 50, with 50 representing the most notorious. A pirate’s
    notoriety is determined by its corresponding bid price set by other
    members of the community`,
  },
  {
    question: 'What type of game is coming?',
    response: `Notorious Pirates will be a Pirate themed MMORPG which allows
    players to play as their Pirate NFT within a 1700s themed metaverse.
    Players will be able to create guilds, engage in personal and ship
    combat with other crews and enemies, acquire loot, and engage
    in a variety of pirate themed minigames such as poker, blackjack,
    potion brewing, and more`,
  },
  {
    question: 'When will the game be completed?',
    response: `While many aspects of Notorious Pirates are already
    functional since this project is a continuation of Pirates Online
    Retribution, the goal of this project ultimately is to significantly
    enhance the original game and create a truly engaging and unique experience
    for all of our NFT holders.`,
  },
  {
    question: 'How do I purchase a pirate?',
    response: `All NFTs will eventually be purchasable directly from opensea.
    io, but will also be displayed with relevant details on our 
    website at notoriouspirates.gg.`,
  },
  {
    question: 'How are pirates created?',
    response: `Each pirate is uniquely customized
     using the Panda 3D game engine,
    and then rigged, and animated with various photo editing 
    tools including Adobe and Blender. Tremendous preparation and effort
     goes into the creation of each individual character`,
  },
  {
    question: 'Who are the artists?',
    response: `YoGundi, ItzCrimzon, and Capt. Moon all work together to 
    carefully customize each individual character, and bring 
    it to life in its own unique way.`,
  },
  {
    question: 'Do you host competitions or giveaways?',
    response: `Yes! We regularly announce both of these events within our 
    Discord server and on Twitter, and everyone is encouraged to participate 
    to help increase community awareness, as well earn yourself some pretty 
    hefty loot.`,
  },
  {
    question: 'What are Founder roles?',
    response: `Founder roles are reserved for members of the community who 
    purchase any pirate within the first month of the initial NFT presale. 
    Founder roles are permanent and will uniquely distinguish you from anyone
     who decides to wait until later on to get involved.`,
  },
  {
    question: 'What was the inspiration for this project??',
    response: `his project is a complete revamp of the now defunct MMORPG,
    Pirates of the Caribbean Online. The goal of Notorious Pirates is to create
    the first NFT-based Pirate themed MMO and breathe life back into what was
    once one of the most popular movie/videogame genres.`,
  },
  {
    question: 'Is Notorious Pirates a for-profit project?',
    response: `Ultimately, the goal of Notorious Pirates from the team’s
    perspective is to acquire enough funding necessary to completely
    overhaul the game, and create a thriving community. Development,
    marketing, and servers all cost money, so for that reason, associated
    NFTs do have a price-tag. However, at the end of the day, we aren’t
    here to make a quick buck.`,
  },
  {
    question: 'Can I apply to become a staff member?',
    response: `You bet! We’re always looking to add new talent to the team
    and get a fresh set of hands on deck. To apply, simply join our Discord
    server and PM an admin with either a resume, or a few details related
    to your skills/knowledge along with what you’d be able to bring to the
    table, as well as the level of compensation you’d expect in return.`,
  },
  {
    question: 'I have no money. Can I still participate?',
    response: `Yes! We regularly reward members of our community for helping
    promote our project, or by participating in competitions and giveaways.`,
  },
  {
    question: 'How many Notorious Pirate NFTs will be created?',
    response: `While we don’t have an official number set in stone yet, we’re
    planning on having at least 10,000 created by the end of 2022, depending
    upon the demand for new characters from our community.`,
  },
  {
    question: 'Are there plans for separate collections?',
    response: `We have a number of ideas for new collections in mind
    that we think
    the community will find pretty awesome! We’ll post updates regarding
    these new collections in our discord server, so be sure to join to be
    one of the first people to receive information on any upcoming NFT lines.`,
  },
  {
    question: `Why do we disclose the names and
    private identities of our Staff members?`,
    response: `With so many scams and rug-pulling projects out there today,
    we want to assure everyone that with Notorious Pirates, what you see is
    what you get. If we mess up, we want the community to hold us accountable.
    Transparency and accountability are some of the core values which have
    helped drive this project forward since day one.`,
  },

];

const MainPosters = () => {
  return (
    <div className='pb-[5.75rem] relative border-b-[5px] border-[#8F8F8F]'>
      <div className="container mx-auto grid lg:grid-flow-col lg:gap-40
      lg:grid-cols-[repeat(2,_minmax(0,_1fr))]">
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
