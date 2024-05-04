import apiService, { GET_CHARACTERS } from "./apiService.js";

const getCharacters = (params) => {
	return apiService
		.get(GET_CHARACTERS, { params })
		.then((response) => response.data.data);
};

export default getCharacters;
