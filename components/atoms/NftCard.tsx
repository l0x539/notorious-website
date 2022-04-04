import {StaticImageData} from 'next/image';
import {FC} from 'react';


const NftCard: FC<{
  link: StaticImageData;
  name: string;
  Pirate: string;
  Notoriety: string;
  PrimarySkills: string;
}> = ({Pirate, name, Notoriety, PrimarySkills, link}) => {
  return (
    <div>
      <div key={Pirate} className={`${'border-solid border-4 ' +
        'border-[#C0AB75] bg-[#C0AB75] ' + 'rounded w-[10rem] ' +
        'hover:scale-110 ' +
        'hover:border-[#FFCB45] hover:bg-[#FFCB45] duration-150 ' +
        'cursor-pointer'
      }`}>
        <div className='border-b-4 border-[#8F8F8F] bg-cover bg-center
        bg-no-repeat h-44 ' style={{backgroundImage: `url(${link.src})`}} >
        </div>
        <div className="card-desc-background
        bg-cover bg-center bg-no-repeat px-3.5 py-4
         rounded-b drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]">
          <div className=" text-base mb-2
           underline text-white ... ">{name}</div>
          <ul className="text-white text-xs ">
            <li>Pirate #:<span>{Pirate}</span> </li>
            <li>Notoriety: <span> {Notoriety}</span></li>
            <li className='text-clip overflow-hidden
             h-12'>Primary Skills: {PrimarySkills}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default NftCard;
