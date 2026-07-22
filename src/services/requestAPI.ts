import axios from 'axios';

export const requestAPI = axios.create({
    baseURL: 'https://api.github.com/repositories/10270250',
    headers: {},
});
