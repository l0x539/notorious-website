import {FC} from 'react';

const CardNewsArticles: FC<{title:string,
     description:string,
      time:string,
       className:string}> = ({title, description, time, className}) => {
         return (
           <div className={`bg-wing bg-cover border-2 border-[#8F8F8F] 
           h-[26.125rem] text-white shadow-[0px_4px_171px_90px_rgba(0,0,0,0.25)]
           ${className}`}>
             <p className='pb-2 pt-5 px-1.5 text-center text-2xl'> {title} </p>
             <p className='text-lg mx-8 my-1 text-center '>{description}</p>
             <p className='px-1 py-3 text-lg text-center'> {time}</p>

           </div>
         );
       };
export default CardNewsArticles;
