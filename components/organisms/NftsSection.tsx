import NftCard from '../atoms/NftCard';
import Carousel from '../molecules/NftsCarousel';
import {FC} from 'react';
import {ICard} from '../../lib/types';

const NftsSection: FC<{
  cards: ICard[]
}> = ({cards=[]}) => {
  return (
    <div className='pb-24
    border-b-[5px] border-[#8F8F8F]
    bg-nfts pt-6 bg-no-repeat bg-cover bg-center'>
      <div className="container mx-auto py-4">
        <h1 className='font-semibold text-center text-3xl text-white
        mb-4 truncate'>
          Discover the most
          <span className='text-3xl
        text-notorious-golden-500 truncate mx-2'>Notorious Pirates </span>

          <div className='text-3xl text-notorious-golden-500 truncate'>
          on the Open Seas!
          </div>
        </h1>
        <Carousel show={7} >
          {cards.length &&
            cards.map((card, index) => {
              return (
                <NftCard
                  key={index}
                  Pirate={card.pirate}
                  name={card.name}
                  Notoriety={card.notoriety}
                  PrimarySkills={card.primary_skills} link={card.img} />
              );
            })
          }
        </Carousel>
      </div>
    </div>
  );
};

export default NftsSection;
