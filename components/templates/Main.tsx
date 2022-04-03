
import MemebersCard from '../molecules/MoleculeMemebersCard';
import MainHangers from '../organisms/MainHangers';
import MainHeader from '../organisms/MainHeader';
import MainPosters from '../organisms/MainPosters';

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainHangers />
      <MainPosters />
      <MemebersCard />
    </>
  );
};

export default Main;
