import NewsBanner from '../molecules/NewsBanner';

const Main = () => {
  return (
    <div className="container mx-auto">
      <NewsBanner
        title='Find out what it means to become a'
        description=' world’s first upcoming Pirate themed Metaverse'
        time='2022-01-21 17:00:00'
        comments={3}

      />
    </div>
  );
};

export default Main;
