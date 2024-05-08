import { createContext, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useDebouncedQuery } from "../hooks/useDebouncedQuery";
import getCharacters from "../services/api/getCharacters";
import getComics from "../services/api/getComics";

const QUERY_KEY_BASE = "COMICS";
const CHARACTER = "CHARACTER";

const CHARACTER_LIMIT = 20;

// Centralised store for all applicaiton Data
const ComicDataContext = createContext({});

export const ComicDataContextProvider = ({ children }) => {
	const [maxCharacterCount, setMaxCharacterCount] = useState(0);
	const [selectedCharacters, setSelectedCharacters] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [searchString, setSearchString] = useState("");

	// Query to handle Infinite loading of Characted Data
	const {
		data: characterData,
		error: characterDataError,
		fetchNextPage: characterDataFetchNextPage,
		hasNextPage: characterDataHasNextPage,
		isFetching: characterDataFetching,
		refetch: characterDataRefetch,
	} = useInfiniteQuery({
		queryKey: [CHARACTER],
		queryFn: ({ pageParam }) => {
			return getCharacters({
				limit: CHARACTER_LIMIT,
				offset: pageParam * CHARACTER_LIMIT,
			}).then((response) => {
				setMaxCharacterCount(response.total);
				return response.results.map((character) => ({
					id: character.id,
					name: character.name,
					image: `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`,
				}));
			});
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (
				lastPage.length === 0 ||
				maxCharacterCount <= lastPageParam * CHARACTER_LIMIT + CHARACTER_LIMIT
			) {
				return undefined;
			}
			return lastPageParam + 1;
		},
		placeholderData: { pages: [] },
	});

	// Custom react- query hook to handle debouncing of filters for comics API
	const {
		data: comicsData,
		isError: comicsDataError,
		isFetching: comicsDataLoading,
		refetch: comicsDataRefetch,
	} = useDebouncedQuery({
		debounceOn: selectedCharacters.length !== 0,
		queryKey: [QUERY_KEY_BASE, pageNo, searchString, ...selectedCharacters],
		queryFn: () => {
			const payload = {
				limit: CHARACTER_LIMIT,
				offset: (pageNo - 1) * CHARACTER_LIMIT,
			};
			if (searchString) payload.title = searchString;
			if (selectedCharacters.length !== 0)
				payload.characters = selectedCharacters
					.map((character) => character.id)
					.join(",");
			return getComics(payload).then((response) =>
				Promise.resolve({
					total: response.total,
					offset: response.offset,
					limit: response.limit,
					data: response.results.map((comic) => ({
						id: comic.id,
						title: comic.title,
						image: `${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`,
						pageCount: comic.pageCount,
					})),
				})
			);
		},
		placeholderData: { total: 0, offset: 0, limit: CHARACTER_LIMIT, data: [] },
		keepPreviousData: true,
	});

	const goToPage = (page) => {
		setPageNo(page <= 0 ? 1 : page);
	};

	const handleCharacterChange = ({ id, name }) => {
		goToPage(0);
		setSelectedCharacters((characters) => {
			if (characters.findIndex((character) => character.id === id) === -1) {
				return [...characters, { id, name }];
			} else {
				return characters.filter((character) => character.id !== id);
			}
		});
	};

	const handleFiltersClear = () => {
		goToPage(0);
		setSelectedCharacters([]);
	};

	const handleSearch = (search) => {
		handleFiltersClear();
		setSearchString(search);
	};

	return (
		<ComicDataContext.Provider
			value={{
				comicsData,
				comicsDataError,
				comicsDataLoading,
				comicsDataRefetch,
				goToPage,
				pageNo,

				handleCharacterChange,
				selectedCharacters,
				handleFiltersClear,

				charactersPerPage: CHARACTER_LIMIT,
				characterData,
				characterDataError,
				characterDataFetchNextPage,
				characterDataHasNextPage,
				characterDataFetching,
				characterDataRefetch,

				searchString,
				handleSearch,
			}}
		>
			{children}
		</ComicDataContext.Provider>
	);
};

export default ComicDataContext;
