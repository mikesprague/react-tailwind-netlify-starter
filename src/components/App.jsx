import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../modules/helpers';
import { FaGithub, FaQuoteLeft } from 'react-icons/fa';

import './App.scss';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getRemoteData = async () => {
      const remoteData = await axios
        .get(`${apiUrl()}/example-function`)
        .then((response) => response.data);

      setData(remoteData);
    };

    getRemoteData();
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              My React/Tailwind CSS Netlify Starter Template
            </h1>
            <blockquote className="mx-auto text-3xl italic leading-normal text-center text-blue-200">
              {data ? (
                <>
                  <FaQuoteLeft />
                  {` ${data.joke}`}
                </>
              ) : (
                '... loading dad joke ...'
              )}
            </blockquote>
            <h2 className="my-12 text-2xl font-semibold leading-tight text-center">
              <small className="text-base font-normal text-center">
                <a
                  href="https://icanhazdadjoke.com/api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  source: https://icanhazdadjoke.com/api
                </a>
              </small>
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/react-tailwindcss-netlify-starter">
          <FaGithub />
          {' Back to repo'}
        </a>
      </div>
    </>
  );
}
