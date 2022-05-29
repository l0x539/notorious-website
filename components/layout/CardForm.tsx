import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {useRouter} from 'next/router';
import {mutate} from 'swr';

interface ICard {
  name: string;
  pirate: string;
  notoriety: string;
  primary_skills: string;
  img: string;
}

const Form: FC<{
  formId: string;
  cardForm: ICard;
  forNewCard?: boolean
}> = ({formId, cardForm, forNewCard = true}) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: cardForm.name,
    pirate: cardForm.pirate,
    notoriety: cardForm.notoriety,
    primary_skills: cardForm.primary_skills,
    img: cardForm.img,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form: ICard) => {
    const {id} = router.query;

    try {
      const res = await fetch(`/api/cards/${id}`, {
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
      mutate(`/api/cards/${id}`, data, false);

      router.push('/admin/nft-cards');
    } catch (error) {
      setMessage('Failed to update card');
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: ICard) => {
    try {
      const res = await fetch('/api/cards', {
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

      router.push('/admin/nft-cards');
    } catch (error) {
      setMessage('Failed to add card');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value;
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

  /* Makes sure card info is filled for card name,
  owner name, notoriety, and image url*/
  const formValidate = () => {
    const err: {
      name?: string;
      pirate?: string;
      notoriety?: string;
      img?: string;
      primary_skills?: string;
    } = {};
    if (!form.name) err.name = 'Name is required';
    if (!form.pirate) err.pirate = 'Pirate is required';
    if (!form.notoriety) err.notoriety = 'Notriety is required';
    if (!form.img) err.img = 'Image URL is required';
    if (!form.primary_skills) err.primary_skills = 'primary_skills is required';
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}
        className="w-[90%] m-auto max-w-[550px]">
        <label className='mt-2.5' htmlFor="name">Name</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={20}
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5' htmlFor="pirate">Pirate</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={20}
          name="pirate"
          value={form.pirate}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5' htmlFor="notoriety">Notoriety</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={30}
          name="notoriety"
          value={form.notoriety}
          onChange={handleChange}
          required
        />

        <label className='mt-2.5'
          htmlFor="primary_skills">Primary Skills</label>
        <input
          className='border border-gray-300 p-2.5 font-[90%] w-full
          h-8 text-neutral-700 rounded'
          type="text"
          maxLength={30}
          name="primary_skills"
          value={form.primary_skills}
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
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
