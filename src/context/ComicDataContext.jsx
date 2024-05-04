import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getCharacters from "../services/api/getCharacters";

// getCharacters({
// 	limit: 20,
// 	offset: pageNo * 20,
// })

const QUERY_KEY_BASE = "COMICS";

const ComicDataContext = createContext({});

export const ComicDataContextProvider = ({ children }) => {
	const [selectedCharacters, setSelectedCharacters] = useState([]);
	const [pageNo, setPageNo] = useState(0);

	const { data, isError, isLoading } = useQuery({
		queryKey: [QUERY_KEY_BASE, pageNo, ...selectedCharacters],
		queryFn: () => null,
	});

	const goToPage = (page) => {
		setPageNo(page < 0 ? 9 : page);
	};

	return (
		<ComicDataContext.Provider value={{ data, isError, isLoading, goToPage, pageNo }}>
			{children}
		</ComicDataContext.Provider>
	);
};

export default ComicDataContext;
