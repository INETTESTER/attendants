import http from 'k6/http';
import { token } from './env.js';

export function attendants() {
    const url = 'https://attendants-uat.one.th/api/v1/clockin/in';
    
    const headers = {
        'Authorization': 'Bearer ' + token,
    };

    const payload = {
        latitude: "13.748826583624504",
        longitude: "100.56660423003818"
    };

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
