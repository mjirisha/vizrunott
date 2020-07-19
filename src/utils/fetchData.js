const fetchData = (url, method, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method || 'GET',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'vizrunotOrigin'
      },
    })
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else throw new Error(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchData;
