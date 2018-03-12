import axios from 'axios';

export const FETCH_BEARS = 'fetch_bears';
const ROOT_URL = 'http://localhost/api/bears';

export function fetchBears() {

    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_BEARS,
        payload: request
    };
}

