import Card from '../molecules/Card';


const Main = () => {
  return (
    <div className="container mx-auto">
      <div className='flex inline-flex justify-between w-full'>
        <Card>
          <div className='w-[600px] h-[600px] flex justify-center items-center'>
            <h1 className='text-8xl text-white'>Test</h1>
          </div>
        </Card>
        <Card>
          <div className='w-[600px] h-[600px] flex justify-center items-center'>
            <h1 className='text-8xl text-white'>Test 2</h1>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Main;
