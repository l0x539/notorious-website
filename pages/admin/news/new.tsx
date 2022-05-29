import {NextApiRequest, NextApiResponse} from 'next';
import {FC} from 'react';
import Layout from '../../../components/layout/adminLayout/Layout';
import Form from '../../../components/layout/NewsForm';
import {getSession} from '../../../lib/session';

const NewPet: FC<{
  loggedIn: boolean;
}> = ({loggedIn}) => {
  const newsForm = {
    img: '',
    title: '',
    description: '',
    date: '',
  };

  return (
    <Layout isNews loggedIn={loggedIn}>
      <Form formId="add-news-form" newsForm={newsForm} />
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
