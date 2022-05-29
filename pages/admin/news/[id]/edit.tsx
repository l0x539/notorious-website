import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../../../../components/layout/adminLayout/Layout';
import Form from '../../../../components/layout/NewsForm';
import {getSession} from '../../../../lib/session';

const fetcher = (url: any) =>
  fetch(url)
      .then((res) => res.json())
      .then((json) => json.data);

const EditPet : NextPage<{
  loggedIn: boolean;
}> = ({loggedIn}) => {
  const router = useRouter();
  const {id} = router.query;
  const {data: news1, error} = useSWR(id ? `/api/news/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!news1) return <p>Loading...</p>;

  const newsForm = {
    title: news1.title,
    description: news1.pirate,
    date: news1.notoriety,
    img: news1.img,
  };

  return (
    <Layout isNews loggedIn={loggedIn}>
      <Form
        formId="edit-news-form"
        newsForm={newsForm}
        forNewCard={false} />
    </Layout>
  );
};

export default EditPet;

export const getServerSideProps = async ({req, res}:
  {
    req: NextApiRequest,
    res: NextApiResponse
  }) => {
  const session = await getSession(req, res);
  return {
    props: {
      loggedIn: typeof session.loggedIn === 'boolean' ? session.loggedIn: null,
    },
  };
};

