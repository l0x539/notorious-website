import {NextApiRequest, NextApiResponse, NextPage} from 'next';
import Layout from '../../../components/layout/adminLayout/Layout';
import Form from '../../../components/layout/CardForm';
import {getSession} from '../../../lib/session';

const NewPet: NextPage<{
  loggedIn: boolean;
}> = ({loggedIn}) => {
  const cardForm = {
    name: '',
    pirate: '',
    notoriety: '',
    primary_skills: '',
    img: '',
  };

  return (
    <Layout loggedIn={loggedIn}>
      <Form formId="add-card-form" cardForm={cardForm} />
    </Layout>
  );
};

export default NewPet;

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

