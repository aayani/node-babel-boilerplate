import qs from 'querystring';
import * as axios from 'axios';

export const doGet = (
  url,
  params = {},
  headers = { 'Content-Type': 'application/json' },
) =>
  new Promise((resolve, reject) =>
    axios.default
      .get(`${url}?${qs.stringify(params)}`, { headers })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data);
        }

        reject(res.statusText);
      })
      .catch(reject),
  );

export const doPost = (
  url,
  body = {},
  headers = { 'Content-Type': 'application/json' },
) =>
  new Promise((resolve, reject) =>
    axios.default
      .post(url, body, { headers })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          resolve();
        }

        reject(res.statusText);
      })
      .catch(reject),
  );
