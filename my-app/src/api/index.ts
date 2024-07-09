import * as axios from "axios";

export const instance = axios.default.create({
	baseURL: 'https://jellybellywikiapi.onrender.com/api/',
	timeout: 10000,
	headers: {'X-Custom-Header': 'foobar'}
});