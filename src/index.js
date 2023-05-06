const randomNumber = () => {
  const num = Math.floor(Math.random() * 100) + 1;

  return num;
};

const fetchData = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await response.json();

  return data;
};

const getResult = () => {
  const num = randomNumber();
  const data = {};

  fetchData(num)
    .then((result) => {
      data.id = result.userId;
      data.title = result.title;
      data.body = result.body;
    })
    .then(() => console.log(data))
    .then(() => console.log('Random number: ' + num))
    .catch((error) => console.log(error));
};

getResult();
