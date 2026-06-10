import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { FaGithub, FaQuoteLeft } from 'react-icons/fa';

import { apiUrl } from '../lib/helpers.js';

const dataAtom = atom<ResponseData | null>(null);

export type ResponseData = {
  id: string;
  joke: string;
  status: number;
};

export default function App() {
  const [data, setData] = useAtom(dataAtom);

  useEffect(() => {
    const getRemoteData = async () => {
      const remoteData = await fetch(`${apiUrl()}/example-function`).then(
        (response) => response.json()
      );

      setData(remoteData);
    };

    getRemoteData();
  }, [setData]);

  return (
    <>
      <div className='min-h-screen'>
        <div className='text-center flex items-center justify-center min-h-screen'>
          <div>
            <h1 className='text-5xl font-bold text-primary'>
              My React/Tailwind CSS Netlify Starter Template
            </h1>
            <blockquote className='mx-auto text-3xl italic leading-normal text-center text-blue-400 mt-4 mb-6 max-w-7xl'>
              {data ? (
                <>
                  <FaQuoteLeft className='inline mr-1 mb-2' />
                  {` ${data.joke}`}
                </>
              ) : (
                '... loading dad joke ...'
              )}
            </blockquote>
            <h2 className='my-12 text-2xl font-semibold leading-tight text-center text-gray-400'>
              <small className='font-normal text-center'>
                <a
                  href='https://icanhazdadjoke.com/api'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  source: https://icanhazdadjoke.com/api
                </a>
              </small>
            </h2>
          </div>
        </div>
      </div>
      <div className='fixed min-w-full text-base text-center bottom-2'>
        <a href='https://github.com/mikesprague/react-tailwindcss-netlify-starter'>
          <FaGithub className='inline' />
          {' Back to repo'}
        </a>
      </div>
    </>
  );
}
