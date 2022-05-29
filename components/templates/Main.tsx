
import {FC} from 'react';
import {ICard, INews} from '../../lib/types';
import MainHangers from '../organisms/MainHangers';
import MainPosters from '../organisms/MainPosters';
import Memebrs from '../organisms/Members';
import NftsSection from '../organisms/NftsSection';
import Treasures from '../organisms/Treasures';

const Main: FC<{
  cards: ICard[];
  mainNews: INews[];
}> = ({cards, mainNews}) => {
  return (
    <>
      <MainHangers news={mainNews} />
      <NftsSection cards={cards} />
      <MainPosters />
      <Memebrs />
      <Treasures />
    </>
  );
};

export default Main;
