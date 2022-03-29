
import {FC} from 'react';
import iconlinkidin from '../../assets/images/linkedin1.png';
import icontwitter from '../../assets/images/twitter1.png';
import Image from 'next/image';

const MemberCard: FC<{
  link: StaticImageData;
  name: string;
  description: string;
}> = ({name, description, link}) =>{
  return (
    <div>
      <div key={name} className={`${' relative border-solid border-4 '+
        'border-[#C0AB75]  ' + 'rounded w-[12.4rem] bg-[#C0AB75] '+
        'shadow-[0px_4px_4px_rgba(0,0,0,0.25),0px_4px_4px_rgba(0,0,0,0.25)] '
      }`}>
        <div className='border-b-4 border-[#8F8F8F] bg-cover bg-center
        bg-no-repeat w-[11.9rem] h-[11.9rem]'
        style={{backgroundImage: `url(${link.src})`}} >
        </div>

        <div className="card-members-background w-[11.9rem] h-[13.8rem]
            bg-center   px-3.5 py-4
            rounded-b drop-shadow-[3px_6px_4px_rgba(0,0,0,0.25)]">
          <div className="  mb-2
           underline  text-white text-center not-italic
            text-2xl ... ">{name}

            <div className='absolute bottom-[11px] right-[55px]'>
              <a href='#'>
                <Image
                  src={iconlinkidin}
                  alt="likidin"
                  width='33px'
                  height='33px'/>
              </a>
            </div>


            <div
              className='absolute bottom-[11px] right-[10px]'>
              <a href='#'>
                <Image
                  src={icontwitter}
                  alt="twitter"
                  width='33px'
                  height='33px'/>
              </a>
            </div>

          </div>
          <ul className="leading-[1.5rem]
          text-white text-center font-light text-[19px]
          ">
            <li className='text-clip overflow-hidden'> {description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default MemberCard;
