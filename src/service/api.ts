import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {'Content-type': 'application/json; charset=UTF-8'},
});
