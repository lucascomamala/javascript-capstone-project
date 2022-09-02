const makeAPIPost = async (requestURL, body) => {
  const result = fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result;
};

export default makeAPIPost;
