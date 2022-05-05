import NftCard from '../atoms/NftCard';
import link from '../assets/svg/ghosty3.png';
import big from '../assets/images/bigbuck1.png';
import bourbon from '../assets/images/bourbon1.png';
import anne from '../assets/images/anne.png';
import Carousel from '../molecules/NftsCarousel';

const NftsSection = () => {
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
          <NftCard
            Pirate='217'
            name='Juan Carlos Trastamara'
            Notoriety='27'
            PrimarySkills=' Sailing, Swordcraft, Gunnery' link={link} />

          <NftCard
            Pirate='217'
            name='Juan Carlos Trastamara'
            Notoriety='27'
            PrimarySkills=' Sailing, Swordcraft, Gunnery' link={link} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewing'
            link={anne} />
          <NftCard
            Pirate='2'
            name='Captain Bourbon'
            Notoriety='18'
            PrimarySkills=' Poker, Blackjack, Daggers'
            link={bourbon} />

          <NftCard
            Pirate='1'
            name='Big Buck Buccaneer'
            Notoriety='27'
            PrimarySkills='Sailing, Swordcraft, Gunnery' link={big} />

          <NftCard
            Pirate='217'
            name='Juan Carlos Trastamara'
            Notoriety='27'
            PrimarySkills=' Sailing, Swordcraft, Gunnery' link={link} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewing'
            link={anne} />

          <NftCard
            Pirate='2'
            name='Captain Bourbon'
            Notoriety='18'
            PrimarySkills=' Poker, Blackjack, Daggers'
            link={bourbon} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewing'
            link={anne} />

          <NftCard
            Pirate='1'
            name='Big Buck Buccaneer'
            Notoriety='27'
            PrimarySkills='Sailing, Swordcraft, Gunnery' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewing'
            link={anne} />

          <NftCard
            Pirate='217'
            name='Juan Carlos Trastamara'
            Notoriety='27'
            PrimarySkills=' Sailing, Swordcraft, Gunnery' link={link} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewing'
            link={anne} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='2'
            name='Captain Bourbon'
            Notoriety='18'
            PrimarySkills=' Poker, Blackjack, Daggers'
            link={bourbon} />
        </Carousel>
      </div>
    </div>
  );
};

export default NftsSection;
