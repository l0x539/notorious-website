import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {useRouter} from 'next/router';
import {mutate} from 'swr';

interface INews {
  img: string;
  title: string;
  description: string;
  date: string;
  owner: string;
}

const Form: FC<{
  formId: string;
  newsForm: INews;
  forNewCard?: boolean
}> = ({formId, newsForm, forNewCard = true}) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    img: newsForm.img,
    title: newsForm.title,
    description: newsForm.description,
    date: newsForm.date,
    owner: newsForm.owner,
  });
  console.log({form});

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form: INews) => {
    const {id} = router.query;

    try {
      const res = await fetch(`/api/news/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      const {data} = await res.json();

      // Update the local data without a revalidation
      mutate(`/api/news/${id}`, data, false);

      router.push('/admin/news');
    } catch (error) {
      setMessage('Failed to update news');
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: INews) => {
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Accept': contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      router.push('/admin/news');
    } catch (error) {
      setMessage('Failed to add news');
    }
  };

  const handleChange =
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewCard ? postData(form) : putData(form);
    } else {
      setErrors({errs});
    }
  };

  /* Makes sure news info is filled for news name,
  owner name, notoriety, and image url*/
  const formValidate = () => {
    const err: {
      title?: string;
      description?: string;
      date?: string;
      img?: string;
      owner?: string;
    } = {};
    if (!form.title) err.title = 'Title is required';
    if (!form.description) err.description = 'Description is required';
    if (!form.date) err.date = 'Date is required';
    if (!form.img) err.img = 'Image URL is required';
    if (!form.owner) err.owner = 'Owner is required';
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}
        className="w-[90%] m-auto max-w-[550px]">
        <label className='mt-2.5' htmlFor="owner">Owner</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={20}
          name="owner"
          value={form.owner}
          onChange={handleChange}
          required
        />
        <label className='mt-2.5' htmlFor="title">Title</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={20}
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5' htmlFor="description">Description</label>
        <textarea
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          maxLength={2000}
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5' htmlFor="date">Date</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="date"
          maxLength={30}
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5' htmlFor="img">Image URL</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="url"
          name="img"
          value={form.img}
          onChange={handleChange}
          required
        />

        <button type="submit" className="mt-4 px-6 py-4 rounded border
        hover:bg-cyan-500 hover:text-white">
          Submit
        </button>
      </form>
      <p className='flex items-center justify-center text-red-500'>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
