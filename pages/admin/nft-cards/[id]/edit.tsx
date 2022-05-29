import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../../../../components/layout/adminLayout/Layout';
import Form from '../../../../components/layout/CardForm';
import {getSession} from '../../../../lib/session';

const fetcher = (url: any) =>
  fetch(url)
      .then((res) => res.json())
      .then((json) => json.data);

const EditPet: NextPage<{
  loggedIn: boolean;
}> = ({loggedIn}) => {
  const router = useRouter();
  const {id} = router.query;
  const {data: card, error} = useSWR(id ? `/api/cards/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!card) return <p>Loading...</p>;

  const cardForm = {
    name: card.name,
    pirate: card.pirate,
    notoriety: card.notoriety,
    primary_skills: card.primary_skills,
    img: card.img,
  };

  return (
    <Layout loggedIn={loggedIn}>
      <Form
        formId="edit-card-form"
        cardForm={cardForm}
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
