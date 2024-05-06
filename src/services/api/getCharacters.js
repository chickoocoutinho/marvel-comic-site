import apiService, { GET_CHARACTERS } from "./apiService.js";

const getCharacters = (params) => {
	return apiService
		.get(GET_CHARACTERS, { params })
		.then((response) => Promise.resolve(response.data.data));
};

export default getCharacters;
