import axios from 'axios';
import { API } from './server.api';

const axiosConfig = {
	baseURL: API.BaseURL,
};

const instance = axios.create(axiosConfig);

// Interceptors
instance.interceptors.request.use(
	async (req: any) => {
		return req;
	},
	(error: { response: any }) => {
		return Promise.reject(error.response);
	}
);

instance.interceptors.response.use(
	(response: any) => response,
	(error: { response: { status: number } }) => {
		if (error?.response?.status === 401) {
			localStorage.clear();
		} else {
			throw error.response;
		}
	}
);

export default instance;
