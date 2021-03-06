import config from './components/config';

export default class Data {
  
  api(path, method, body = null) {
     const url = config.apiUrl + path;

    const options = {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
  
      if (body !== null) {
        options.body = JSON.stringify(body);
      }
      return fetch(url, options);
    };




}