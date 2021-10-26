import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
      get: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: -1,
      },
    },
  });

  instance.interceptors.request.use((config) => {
    // if (config.method === 'get') {
    //   _.set(config, 'params.q', new Date().getTime());
    //   // config.params.q = new Date();
    // }
    return config;
  });