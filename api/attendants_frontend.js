import http from 'k6/http';
import { token } from './env.js';

export function attendants_frontend() {
  const url = 'https://attendants-uat.one.th/timestamp';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);

  return response;
}
