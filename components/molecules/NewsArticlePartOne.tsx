

const NewsArticlePartOne= ()=>{
  return (
    <div className="bg-natur bg-cover  w-full">

      <div className="border-white border-1
      py-[7.125rem] px-[26.938rem]">
        <div className={`${ 'text-white  px-[5.438rem] ' + 'py-[0.625rem] '+
        'bg-black/50 text-[3.438rem] '+
        // eslint-disable-next-line max-len
        'shadow-[0px_4px_29px_12px_rgba(255,239,69,0.25),0px_0px_24px_15px_rgba(255,239,69,0.25)] '+
        'text-center'
        }`}>
          <p>Find out what it means to become a</p>
          <p className="text-[#FFCB45]"> Notorious Pirate!</p>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePartOne;
