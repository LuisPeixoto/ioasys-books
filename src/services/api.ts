import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

export default Api;
