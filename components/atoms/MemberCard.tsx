
import {FC} from 'react';
import iconlinkidin from '../../assets/images/linkedin1.png';
import icontwitter from '../../assets/images/twitter1.png';
import Image, {StaticImageData} from 'next/image';

const MemberCard: FC<{
  link: StaticImageData;
  name: string;
  description: string;
}> = ({name, description, link}) =>{
  return (
    <div>
      <div key={name} className={`${' relative border-solid border-4 '+
        'border-[#C0AB75]  ' + 'rounded bg-[#C0AB75] '+
        'shadow-[0px_4px_4px_rgba(0,0,0,0.25),0px_4px_4px_rgba(0,0,0,0.25)] '
      }`}>
        <div className='border-b-4 border-[#8F8F8F] bg-cover bg-center
        bg-no-repeat'>
          <Image
            src={link}
            layout='responsive'
            alt={name}
            width='190'
            height='190'/>
        </div>

        <div className="card-members-background
          flex flex-col justify-between
            bg-center   px-3.5 py-4
            rounded-b drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]
            min-h-[13.875rem]">
          <div className="  mb-2
           underline  text-white text-center not-italic
            text-2xl ... ">{name}
          </div>
          <ul className="leading-[1.5rem]
          text-white text-center font-light text-[19px]
          ">
            <li className='text-clip overflow-hidden'> {description}</li>
          </ul>
          <div className='flex justify-end'>
            <a className='mr-2' href='#'>
              <Image
                src={iconlinkidin}
                alt="likidin"
                width='32'
                height='32'/>
            </a>
            <a href='#'>
              <Image
                src={icontwitter}
                alt="twitter"
                width='32'
                height='32'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MemberCard;
