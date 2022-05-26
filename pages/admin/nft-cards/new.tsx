import Layout from '../../../components/layout/adminLayout/Layout';
import Form from '../../../components/layout/Form';

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
      <Form formId="add-pet-form" cardForm={cardForm} />
    </Layout>
  );
};

export default NewPet;
