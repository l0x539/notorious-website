import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../../../../components/layout/adminLayout/Layout';
import Form from '../../../../components/layout/Form';

const fetcher = (url: any) =>
  fetch(url)
      .then((res) => res.json())
      .then((json) => json.data);

const EditPet = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data: news1, error} = useSWR(id ? `/api/cards/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!news1) return <p>Loading...</p>;

  const cardForm = {
    name: news1.name,
    pirate: news1.pirate,
    notoriety: news1.notoriety,
    primary_skills: news1.primary_skills,
    img: news1.img,
  };

  return (
    <Layout>
      <Form
        formId="edit-card-form"
        cardForm={cardForm}
        forNewCard={false} />
    </Layout>
  );
};

export default EditPet;
