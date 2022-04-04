import MemebersCards from '../molecules/MemebersCards';

const Memebrs = () => {
  return (
    <div className='pb-24
    border-b-[5px] border-[#8F8F8F]
    bg-members pt-6 bg-no-repeat bg-cover bg-center'>
      <h1 className='font-semibold text-center text-3xl text-white
        mb-4 truncate mb-6'>
          Meet the
        <span className='text-3xl
        text-yellow-500 truncate mx-1'>Pirate Lords </span>
          of the
        <div className='text-3xl text-yellow-500 truncate'>
          Open Seas!
        </div>
      </h1>
      <MemebersCards />
    </div>
  );
};

export default Memebrs;
