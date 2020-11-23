import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiUrl, initIcons } from '../modules/helpers';
import './App.scss';

export default function App() {
  initIcons();

  const [data, setData] = useState(null);
  useEffect(() => {
    const getRemoteData = async () => {
      const remoteData = await axios
        .get(`${apiUrl()}/example-function`)
        .then((response) => response.data);
      setData(remoteData);
    };
    getRemoteData();

    return () => { setData(null); };
  }, []);

  return (
    <>
      <div className="container max-w-screen-xl min-h-screen p-8 text-center page-wrapper">
        <h1 className="mb-8 text-4xl font-bold text-center underline">
          My React/Tailwind CSS Netlify Starter Template
          <br />
        </h1>
        <h2 className="mb-12 text-2xl font-semibold leading-tight text-center">
          Example data below fetched from Netlify function
          <br />
          <small className="text-base font-normal text-center">
            <a href="https://icanhazdadjoke.com/api" rel="noopener noreferrer" target="_blank">(datasource: https://icanhazdadjoke.com/api)</a>
          </small>
        </h2>
        <blockquote className="mx-auto text-3xl italic leading-normal text-center">
          {data
            ? (
              <>
	        <FontAwesomeIcon icon="quote-left" fixedWidth />
                {data.joke}
	      </>
            )
            : '... loading dad joke ...'}
        </blockquote>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/react-tailwindcss-netlify-starter">
          <FontAwesomeIcon icon={['fab', 'github']} fixedWidth />
          Back to repo
        </a>
      </div>
    </>
  );
}
