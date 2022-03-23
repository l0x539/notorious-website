import Card from '../molecules/Card';
import pirate from '../assets/svgs/pirate.svg';

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="flex inline-flex  rounded-lg">
        <Card
          title="Welcome to the"
          Icon={pirate}
          iconAlt="Pirate Icon"
        />
      </div>
    </div>
  );
};

export default Main;
