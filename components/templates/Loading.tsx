import Spinner from '../atoms/Spinner';

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center
    bg-zinc-800">
      <Spinner />
    </div>
  );
};

export default Loading;
