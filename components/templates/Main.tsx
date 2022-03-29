import Treasure from '../molecules/Treasure';

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className='flex inline-flex justify-between mt-[150px]'>
        <Treasure>
          <div className='w-[211px] h-[85px] text-center'>
            <p className='text-white font-semibold text-lg
              leading-6 paragraphe'>
              Create <span className='text-yellow-500'>interactive <br/>
               website </span>and discord <br/>server to help grow <br/>
                community</p>
          </div>
        </Treasure>
        <Treasure>
          <div className='w-[211px] h-[85px] text-center'>
            <p className='text-white font-semibold text-lg
               leading-6 paragraphe'>
              Create <span className='text-yellow-500'>interactive <br/>
               website </span>and discord <br/>server to help grow <br/>
                community</p>
          </div>
        </Treasure>

      </div>
    </div>
  );
};

export default Main;
