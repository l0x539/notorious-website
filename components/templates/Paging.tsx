import {FC, ReactChild} from 'react';


const Paging: FC<{
    totalPages:number;
    currentPage:number;
    onNext:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    onPrevious:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    onFirst:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    onLast:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    forward:number;
    backward:number;
    onForward:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    onBackward:(event: React.MouseEvent<HTMLButtonElement>)=>void;
    title: string | ReactChild;
    className?:string;


}> = ({
  children,
  totalPages,
  currentPage,
  onNext,
  onPrevious,
  onFirst,
  onLast,
  forward,
  backward,
  onBackward,
  onForward,
  title,
  className='',
}) => {
  return (
    <div className={`relative grid lg:flex flex-col items-center
    ${className}`}>
      {title}
      {children}
      <div className='mt-5 flex justify-center flex-wrap'>
        <button onClick={onFirst}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
         text-[#3A3A3A] text-sm font-normal w-[4.7rem] h-[1.6rem] mx-5 mb-2`}>
            First </button>
        <button onClick={onBackward}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
        text-[#3A3A3A] text-sm font-normal w-[4.7rem] h-[1.6rem] mx-5`}>
          <span aria-hidden="true" className='mr-2'>&#x3C; &#x3C;</span>
          {backward} </button>
        <button onClick={onPrevious}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
        text-[#3A3A3A] text-sm font-normal w-[4.7rem] h-[1.6rem] mx-5`}>
          <span aria-hidden="true" className='mr-1'>&#x3C;</span>
             Prev </button>
        <button onClick={onNext}
          disabled={currentPage === totalPages}
          className={`${currentPage === totalPages ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
        text-[#3A3A3A] text-sm font-normal w-[4.7rem] h-[1.6rem] mx-5`}>
             Next
          <span aria-hidden="true" className='ml-1'>&#x3E;</span> </button>
        <button onClick={onForward}
          disabled={currentPage === totalPages}
          className={`${currentPage === totalPages ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
        text-[#3A3A3A] text-sm font-normal w-[4.7rem] h-[1.6rem] mx-5`}>
          {forward}
          <span aria-hidden="true" className='ml-2'>&#x3E; &#x3E;</span>
        </button>
        <button onClick={onLast}
          disabled={currentPage === totalPages}
          className={`${currentPage === totalPages ? 'text-gray-400':''}
          border border-solid bg-[#E3E3E3] border-[#AEAEAE] rounded
        text-[#3A3A3A] text-sm font-normal  w-[4.7rem] h-[1.6rem] mx-5`}>
        Last </button>
      </div>

      <div className={`text-base font-normal mt-3 text-white
      flex justify-center`}>
        <span className='text-[22px]'>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};


export default Paging;
