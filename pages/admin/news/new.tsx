import Layout from '../../../components/layout/adminLayout/Layout';
import Form from '../../../components/layout/NewsForm';

const NewPet = () => {
  const newsForm = {
    img: '',
    title: '',
    description: '',
    date: '',
  };

  return (
    <Layout isNews>
      <Form formId="add-news-form" newsForm={newsForm} />
    </Layout>
  );
};

export default NewPet;
