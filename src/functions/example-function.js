/* eslint-disable no-unused-vars */
const axios = require('axios').default;

exports.handler = async (event, context, callback) => {
  const callbackHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  const apiUrl = 'https://icanhazdadjoke.com';

  const returnData = await axios.get(apiUrl, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return {
        headers: callbackHeaders,
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
  return {
    headers: callbackHeaders,
    statusCode: 200,
    body: JSON.stringify(returnData),
  };
};
