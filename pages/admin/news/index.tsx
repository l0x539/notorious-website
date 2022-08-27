import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Link from 'next/link';
import Layout from '../../../components/layout/adminLayout/Layout';
import dbConnect from '../../../lib/dbConnect';
import {getSession} from '../../../lib/session';
import {INews} from '../../../lib/types';
import News from '../../../models/News';

const Index: NextPage<{
  newss: INews[];
  loggedIn: boolean;
}> = ({newss, loggedIn}) => (
  <Layout isNews loggedIn={loggedIn}>
    <div className='flex flex-wrap justify-center'>
      {/* Create a news for each NFTNews */}
      {newss.map((_new) => (
        <div key={_new._id}>
          <div className="group inline-block w-[300px] h-[400px] overflow-hidden
        border border-slate-100 rounded-2xl m-2.5 transition-all duration-500
        shadow-[0_0_10px_5px_transparent]
        hover:shadow-[0_0_10px_5px_rgba(53,_53,_53,_0.103)]
        relative">
            <img className='w-full h-full object-cover' src={_new.img} />
            <h5 className="text-white text-2xl absolute left-0
            bottom-0 p-2.5 text-shadow">
              {_new.title}
            </h5>
            <div className="p-6 absolute top-0 left-0 bg-white/[0.9] w-full
          h-full opacity-0 group-hover:opacity-100 pointer-events-none
          group-hover:pointer-events-auto
          transition-all duration-500">
              <p className="font-bold text-[130%]">{_new.title}</p>
              <p className="text-gray-600 text-[110%]">
                Description: {_new.description}
              </p>
              <p className="text-gray-600 text-[110%]">
              Date: {_new.date}
              </p>

              <div className="text-right p-2.5 absolute bottom-0 right-0">
                <Link href="/admin/news/[id]/edit"
                  as={`/admin/news/${_new._id}/edit`} passHref>
                  <button className="cursor-pointer bg-transparent border
                border-teal-400 rounded px-2.5 py-4 font-[90%]
                transition-all duration-500 outline-none mr-4">
                  Edit
                  </button>
                </Link>
                <Link href="/admin/news/[id]"
                  as={`/admin/news/${_new._id}`} passHref>
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

/* Retrieves news(s) data from mongodb database */
export const getServerSideProps = async ({req, res}:
  {
    req: NextApiRequest,
    res: NextApiResponse
  }) => {
  await dbConnect();
  const session = await getSession(req, res);

  /* find all the data in our database */
  const result = await News.find({});
  const newss = result.map((doc: INews) => {
    const news = doc.toObject() as any;
    news._id = news._id.toString();
    return news;
  });

  return {props: {
    newss,
    loggedIn: typeof session.loggedIn === 'boolean' ? session.loggedIn: null,
  }};
};

export default Index;
