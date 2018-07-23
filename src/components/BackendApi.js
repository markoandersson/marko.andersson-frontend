import axios from 'axios';

export const getDescription = async () => {
  let response = await axios.get('description', {
    baseURL: process.env.VUE_APP_BACKEND_URL
  });

  return response.data.description;
};
