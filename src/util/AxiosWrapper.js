import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    Authorization: 'token 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',
    'Access-Control-Allow-Origin': 'https://api.github.com',
    'Content-Type': 'application/json',
  },

});

export default instance;
