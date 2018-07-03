import axios from 'axios';

export const getDescription = async () => {
  let response = await axios.get('http://api.icndb.com/jokes/random/1');

  return response.data.value[0].joke;
};
