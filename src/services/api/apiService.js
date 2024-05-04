import axios from "axios";

export const GET_CHARACTERS = "/v1/public/characters";
export const GET_COMICS = "/v1/public/comics";

// eslint-disable-next-line no-undef
const apiService = axios.create({ baseURL: MARVEL_BASE_URL });

apiService.interceptors.request.use(
	function (config) {
		config.params = {
			...config.params,
			// eslint-disable-next-line no-undef
			apikey: MARVEL_PUBLIC_KEY,
		};
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default apiService;
