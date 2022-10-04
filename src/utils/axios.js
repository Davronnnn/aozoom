import axios from 'axios';

const Axios = axios.create({
	baseURL: 'https://backend.aozoom.uz/',
	// baseURL: "https://10.80.80.122:8000/api/v1/",
	timeout: 30000,
	timeoutErrorMessage: 'Connection is lost. Server not responded',
});

Axios.interceptors.request.use(
	(configs) => {
		const userInfo = JSON.parse(localStorage.getItem('user_info'));
		if (userInfo?.data?.token) {
			configs.headers.Authorization = `Bearer ${userInfo?.data?.token?.access}`;
		}
		return configs;
	},
	(err) => {
		console.error(err);
	}
);

Axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default Axios;
