import {FC} from 'react';

const CardNewsArticles: FC<{title:string,
     description:string,
      time:string,
       className:string}> = ({title, description, time, className}) => {
         return (
           <div className={`bg-wing bg-cover border-2 border-[#8F8F8F] 
           text-white shadow-[0px_4px_171px_90px_rgba(0,0,0,0.25)]
           px-5
           ${className}`}>
             <p className='pb-3 pt-7 text-center
             text-2xl font-bold'> {title} </p>
             <p className='text-center text-[20px] '>{description}</p>
             <p className='px-1 pt-5 pb-[70px] text-center'> {time}</p>

           </div>
         );
       };
export default CardNewsArticles;
