import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body className='scrollbar-thin scrollbar-thumb-gray-400
    scrollbar-track-gray-700
    overflow-y-scroll scrollbar-thumb-rounded-full
     scrollbar-track-rounded-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
