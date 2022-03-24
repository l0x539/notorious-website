
import Carousel from '../molecules/Carousel';
const Main = () => {
  return (

    <div className="container mx-auto justify-center">
      <Carousel
        title='Find out what it means to become a'
        className={`w-full xl:w-4/5`}
        id='CarouselTarget'
      />
    </div>
  );
};

export default Main;
