import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-tracker-api.herokuapp.com',
});

export const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default api;
