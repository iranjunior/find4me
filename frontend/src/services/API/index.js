import axios from 'axios';
import config from '../../config/vars';
import getKeywords from './getKeywords';

const Api = axios.create({
  baseURL: config.FIND4ME.BASEURL,
  timeout: config.FIND4ME.TIMEOUT,
});

Object.defineProperty(Api, 'getKeywords', {
  value: getKeywords,
  writable: false,
});

export default Api;
