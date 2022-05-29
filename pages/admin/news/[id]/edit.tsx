import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../../../../components/layout/adminLayout/Layout';
import Form from '../../../../components/layout/NewsForm';

const fetcher = (url: any) =>
  fetch(url)
      .then((res) => res.json())
      .then((json) => json.data);

const EditPet = () => {
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
    <Layout isNews>
      <Form
        formId="edit-news-form"
        newsForm={newsForm}
        forNewCard={false} />
    </Layout>
  );
};

export default EditPet;
