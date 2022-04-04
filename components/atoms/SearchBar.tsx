
import {FC} from 'react';

const SearchBar : FC<{
    placeholder: string;
    value:string;
    OnChange:(e: React.ChangeEvent<HTMLInputElement>) => void;

}> = ({
  placeholder,
  value,
  OnChange,
}) => {
  return (
    <div className='relative  bg-sidenav bg-cover border-4
    border-solid border-[#8F8F8F]
     my-20 px-5 py-5 flex flex-col items-center'>
      <input type="search" className='form-control block
        bg-white rounded-md border border-solid
         hover:cursor-pointer
         text-base font-normal mx-5 my-4 px-5 py-1.5
        text-[#909090] focus:text-gray-700 focus:bg-white
        focus:outline-none hover:border-2 my-[1px] hover:my-0'
      placeholder={placeholder}
      value={value}
      onChange={OnChange}/>
      <div className='inline-flex'>
        <button className='border border-solid bg-[#E3E3E3]
       border-[#AEAEAE] rounded mx-2 px-4 py-1
        text-[#3A3A3A] text-sm font-normal'>Search </button>
        <button className='border border-solid bg-[#E3E3E3]
       border-[#AEAEAE] rounded mx-2 px-4 py-1
        text-[#3A3A3A] text-sm font-normal'>Reset</button>

      </div>

    </div>

  );
};

export default SearchBar;
