import NftCard from '../atoms/NftCard';
import link from '../assets/svg/ghosty3.png';
import CarouselTwo from '../molecules/Carousel';

const Main = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Home Page</h1>

      <NftCard
        Pirate='3'
        name='Anne Bonny'
        Notoriety='20'
        PrimarySkills=' Sailing, Swordcraft, Potion Brewin' link={link} />

      <CarouselTwo />
    </div>
  );
};

export default Main;
