import apiService, { GET_COMICS } from "./apiService.js";

const getComics = (params) => {
	return apiService.get(GET_COMICS, { params }).then((response) => response.data.data);
};

export default getComics;
