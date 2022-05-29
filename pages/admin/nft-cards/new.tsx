import Layout from '../../../components/layout/adminLayout/Layout';
import Form from '../../../components/layout/CardForm';

const NewPet = () => {
  const cardForm = {
    name: '',
    pirate: '',
    notoriety: '',
    primary_skills: '',
    img: '',
  };

  return (
    <Layout>
      <Form formId="add-card-form" cardForm={cardForm} />
    </Layout>
  );
};

export default NewPet;
