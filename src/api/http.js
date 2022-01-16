import axios from 'axios';

export default () => {
	const baseURL = 'http://laravel-super.loc:8888/';
	const instance = axios.create({
		baseURL,
		timeout: 10000,
		withCredentials: true
	});

	return instance;
}