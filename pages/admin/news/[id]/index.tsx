import {FC, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import dbConnect from '../../../../lib/dbConnect';
import news from '../../../../models/news';
import Layout from '../../../../components/layout/adminLayout/Layout';
import {Inews} from '../../../../lib/types';

const newsPage: FC<{new1:Inews}> = ({new1}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState('');
  const handleDelete = async () => {
    const newsID = router.query.id;

    try {
      await fetch(`/api/news/${newsID}`, {
        method: 'Delete',
      });
      router.push('/admin/news');
    } catch (error) {
      setMessage('Failed to delete the article.');
    }
  };

  return (
    <Layout>
      <div key={new1._id}>
        <div className="group inline-block w-[300px] h-[400px] overflow-hidden
        border border-slate-100 rounded-2xl m-2.5 transition-all duration-500
        shadow-[0_0_10px_5px_transparent]
        hover:shadow-[0_0_10px_5px_rgba(53,_53,_53,_0.103)]
        relative">
          <img className='w-full h-full object-cover'
            src={new1.img} />
          <h5 className="text-white absolute text-2xl
          left-0 bottom-0 p-2.5 text-shadow">
            {new1.title}
          </h5>
          <div className="p-6 absolute top-0 left-0 bg-white/[0.9] w-full
          h-full opacity-0 group-hover:opacity-100 pointer-events-none
          group-hover:pointer-events-auto
          transition-all duration-500">
            <p className="font-bold text-[130%]">{new1.title}</p>
            <p className="text-gray-600 text-[110%]">
                description: {new1.description}</p>
            <p className="text-gray-600 text-[110%]">
            date: {new1.date}
            </p>


            <div className="text-right p-2.5 absolute bottom-0 right-0">
              <Link href="/admin/news/[id]/edit"
                as={`/admin/news/${new1._id}/edit`} passHref>
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

export const getServerSideProps = async ({params}: {params:any}) => {
  await dbConnect();

  const new1 = await news.findById(params.id).lean();
  new1._id = new1._id.toString();

  return {props: {new1}};
};

export default newsPage;
