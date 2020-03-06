import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-tracker-api.herokuapp.com',
});

export default api;
