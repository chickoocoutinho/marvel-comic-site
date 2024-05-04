import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY_BASE = "COMICS";

const ComicDataContext = createContext({});

export const ComicDataContextProvider = ({ children }) => {
	const [selectedCharacters, setSelectedCharacters] = useState([]);

	const { data, isError, isLoading } = useQuery({
		queryKey: [QUERY_KEY_BASE],
		queryFn: () => null,
	});

	return (
		<ComicDataContext.Provider value={{ data, isError, isLoading }}>
			{children}
		</ComicDataContext.Provider>
	);
};

export default ComicDataContext;
