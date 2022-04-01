
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
    <input type="search" className='form-control block
        bg-white rounded-md border border-solid
         hover:border-[#3b82f6] hover:cursor-pointer
        px-3 py-1.5 text-base font-normal w-[247px] h-[39px]
        text-[#909090] focus:text-gray-700 focus:bg-white
        focus:outline-none hover:border-sky-400 hover:border-2'
    placeholder={placeholder}
    value={value}
    onChange={OnChange}/>
  );
};

export default SearchBar;
