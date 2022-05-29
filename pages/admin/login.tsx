import {useRouter} from 'next/router';
import {FormEvent, useState} from 'react';

const contentType = 'application/json';

const Login = () => {
  const router = useRouter();
  const [infos, setInfos] = useState({
    name: '',
    password: '',
  });

  const postData = async (form: {
    name: string;
    password: string;
  }) => {
    try {
      const res = await fetch('/api/auth', {
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

      router.push('/admin');
    } catch (error) {
      console.log('Failed to add card');
    }
  };

  const validateForm = (form: {
    name: string;
    password: string;
  }) => {
    return form?.name?.length > 3 && form?.password?.length > 8;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm(infos)) {
      postData(infos);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm w-full m-5 mt-20 p-5 bg-white rounded-lg border
    border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} >
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm
          font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email"
              onChange={(e) => {
                setInfos((prevState) => ({...prevState, name: e.target.value}));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
          w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500"
              placeholder="name@flowbite.com" required/>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900
          dark:text-gray-300">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setInfos((prevState) =>
                  ({...prevState, password: e.target.value}));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
          p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required/>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto
        px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
