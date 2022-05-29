import {FC, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import dbConnect from '../../../../lib/dbConnect';
import Card from '../../../../models/Card';
import Layout from '../../../../components/layout/adminLayout/Layout';
import {ICard} from '../../../../lib/types';
import {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from '../../../../lib/session';

/* Allows you to view card card info and delete card card*/
const CardPage: FC<{card:ICard}> = ({card}) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const handleDelete = async () => {
    const cardID = router.query.id;

    try {
      await fetch(`/api/cards/${cardID}`, {
        method: 'Delete',
      });
      router.push('/admin/nft-cards');
    } catch (error) {
      setMessage('Failed to delete the card.');
    }
  };

  return (
    <Layout>
      <div key={card._id}>
        <div className="group inline-block w-[300px] h-[400px] overflow-hidden
        border border-slate-100 rounded-2xl m-2.5 transition-all duration-500
        shadow-[0_0_10px_5px_transparent]
        hover:shadow-[0_0_10px_5px_rgba(53,_53,_53,_0.103)]
        relative">
          <img className='w-full h-full object-cover' src={card.img} />
          <h5 className="text-white absolute text-2xl
          left-0 bottom-0 p-2.5 text-shadow">
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
              <button className="cursor-pointer bg-transparent border
                border-red-400 rounded px-2.5 py-4 font-[90%]
              transition-all duration-500 outline-none" onClick={handleDelete}>
              Delete
              </button>
            </div>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({
  req,
  res,
  params,
}: {
  params:any;
  req: NextApiRequest;
  res: NextApiResponse
}) => {
  await dbConnect();
  const session = await getSession(req, res);

  const card = await Card.findById(params.id).lean();
  card._id = card._id.toString();

  return {props: {
    card,
    loggedIn: typeof session.loggedIn === 'boolean' ? session.loggedIn: null,
  }};
};

export default CardPage;
