import axios from 'axios';
import { getToken } from '../storage';
import config from '../../config/vars';
import getKeywords from './getKeywords';
import getUserForKeywords from './getUsersForKeywords';

const Api = axios.create({
  baseURL: config.FIND4ME.BASEURL,
  timeout: config.FIND4ME.TIMEOUT,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

Object.defineProperty(Api, 'getKeywords', {
  value: getKeywords,
  writable: false,
});

Object.defineProperty(Api, 'getUserForKeywords', {
  value: getUserForKeywords,
  writable: false,
});

export default Api;
