import axios from 'axios';

const apikey = '88afc73c960dd17242a16a42cc8c492b';
const hash = '08f49c78ef7ee6d774933ae9e5298f71';
const ts = '1';
const apiUrl = 'https://gateway.marvel.com/v1/public/';

const api = axios.create({
  params: {
    ts,
    apikey,
    hash,
  },
  baseURL: apiUrl,
});

export default api;
