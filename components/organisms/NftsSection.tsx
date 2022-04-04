import NftCard from '../atoms/NftCard';
import link from '../assets/svg/ghosty3.png';
import big from '../assets/images/bigbuck1.png';
import bourbon from '../assets/images/bourbon1.png';
import Carousel from '../molecules/Carousel';

const NftsSection = () => {
  return (
    <div className='bg-black'>
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <Carousel show={7} gap={16} >
          <NftCard
            Pirate='1'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin'
            link={bourbon} />
          <NftCard
            Pirate='1'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin'
            link={bourbon} />

          <NftCard
            Pirate='1'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin'
            link={bourbon} />

          <NftCard
            Pirate='1'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin'
            link={bourbon} />

          <NftCard
            Pirate='1'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

          <NftCard
            Pirate='2'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={big} />

          <NftCard
            Pirate='3'
            name='Anne Bonny'
            Notoriety='20'
            PrimarySkills=' Sailing, Swordcraft, Potion Brewin'
            link={bourbon} />
        </Carousel>
      </div>
    </div>
  );
};

export default NftsSection;
