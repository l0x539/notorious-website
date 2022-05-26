import Link from 'next/link';
import {FC} from 'react';
import Layout from '../../../components/layout/adminLayout/Layout';
import dbConnect from '../../../lib/dbConnect';
import {ICard} from '../../../lib/types';
import Card from '../../../models/Card';

const Index: FC<{
  cards: ICard[]
}> = ({cards}) => (
  <Layout >
    <div className='flex flex-wrap justify-center'>
      {/* Create a card for each NFTCard */}
      {cards.map((card) => (
        <div key={card._id}>
          <div className="group inline-block w-[300px] h-[400px] overflow-hidden
        border border-slate-100 rounded-2xl m-2.5 transition-all duration-500
        shadow-[0_0_10px_5px_transparent]
        hover:shadow-[0_0_10px_5px_rgba(53,_53,_53,_0.103)]
        relative">
            <img className='w-full h-full object-cover' src={card.img} />
            <h5 className="text-white text-2xl absolute left-0
            bottom-0 p-2.5 text-shadow">
              {card.name}
            </h5>
            <div className="p-6 absolute top-0 left-0 bg-white/[0.9] w-full
          h-full opacity-0 group-hover:opacity-100 pointer-events-none
          group-hover:pointer-events-auto
          transition-all duration-500">
              <p className="font-bold text-[130%]">{card.name}</p>
              <p className="text-gray-600 text-[110%]">Pirate: {card.pirate}</p>
              <p className="text-gray-600 text-[110%]">
              Notoriety: {card.notoriety}
              </p>
              <p className="text-gray-600 text-[110%]">
              Primary Skills: {card.primary_skills}
              </p>


              <div className="text-right p-2.5 absolute bottom-0 right-0">
                <Link href="/admin/nft-cards/[id]/edit"
                  as={`/admin/nft-cards/${card._id}/edit`} passHref>
                  <button className="cursor-pointer bg-transparent border
                border-teal-400 rounded px-2.5 py-4 font-[90%]
                transition-all duration-500 outline-none mr-4">
                  Edit
                  </button>
                </Link>
                <Link href="/admin/nft-cards/[id]"
                  as={`/admin/nft-cards/${card._id}`} passHref>
                  <button className="cursor-pointer bg-transparent border
                border-blue-400 rounded px-2.5 py-4 font-[90%]
                transition-all duration-500 outline-none">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

/* Retrieves card(s) data from mongodb database */
export const getServerSideProps = async () => {
  await dbConnect();

  /* find all the data in our database */
  const result = await Card.find({});
  const cards = result.map((doc: ICard) => {
    const card = doc.toObject();
    card._id = card._id.toString();
    return card;
  });

  return {props: {cards}};
};

export default Index;
