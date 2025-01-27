exports.handler = async (event, context, callback) => {
  const callbackHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  const apiUrl = 'https://icanhazdadjoke.com';

  const returnData = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'User-Agent':
        'React Tailwind Netlify Starter Template (Example Serverless Function)',
    },
  })
    .then((response) => response.json())
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
