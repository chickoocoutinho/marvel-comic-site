import { createContext, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import getCharacters from "../services/api/getCharacters";

// getCharacters({
// 	limit: 20,
// 	offset: pageNo * 20,
// })

const QUERY_KEY_BASE = "COMICS";
const CHARACTER = "CHARACTER";

const CHARACTER_LIMIT = 20;

const ComicDataContext = createContext({});

export const ComicDataContextProvider = ({ children }) => {
	const [maxCharacterCount, setMaxCharacterCount] = useState(0);
	const [selectedCharacters, setSelectedCharacters] = useState([]);
	const [pageNo, setPageNo] = useState(0);

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

	const {
		data: d,
		isError,
		isLoading,
	} = useQuery({
		queryKey: [QUERY_KEY_BASE, pageNo, ...selectedCharacters],
		queryFn: () => null,
	});

	const goToPage = (page) => {
		setPageNo(page < 0 ? 9 : page);
	};

	const handleCharacterChange = (id) => {
		setSelectedCharacters((characters) => {
			if (characters.indexOf(id) === -1) {
				return [...characters, id];
			} else {
				return characters.filter((character) => character !== id);
			}
		});
	};

	return (
		<ComicDataContext.Provider
			value={{
				data: {
					results: [
						{
							id: 1011878,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
						},
						{
							id: 10118784,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
						},
						{
							id: 10118783,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
						},
						{
							id: 10118782,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
						},
						{
							id: 10118781,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
						},
						{
							id: 1011334,
							name: "3-D Man",
							description: "",
							modified: "2014-04-29T14:18:17-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
								extension: "jpg",
							},
							comicsCount: 12,
							resourceURI:
								"http://gateway.marvel.com/v1/public/characters/1011334",
							comics: {
								available: 12,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1011334/comics",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/21366",
										name: "Avengers: The Initiative (2007) #14",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/24571",
										name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/21546",
										name: "Avengers: The Initiative (2007) #15",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/21741",
										name: "Avengers: The Initiative (2007) #16",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/21975",
										name: "Avengers: The Initiative (2007) #17",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/22299",
										name: "Avengers: The Initiative (2007) #18",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/22300",
										name: "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/22506",
										name: "Avengers: The Initiative (2007) #19",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/8500",
										name: "Deadpool (1997) #44",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/10223",
										name: "Marvel Premiere (1972) #35",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/10224",
										name: "Marvel Premiere (1972) #36",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/10225",
										name: "Marvel Premiere (1972) #37",
									},
								],
								returned: 12,
							},
							series: {
								available: 3,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1011334/series",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/series/1945",
										name: "Avengers: The Initiative (2007 - 2010)",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/series/2005",
										name: "Deadpool (1997 - 2002)",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/series/2045",
										name: "Marvel Premiere (1972 - 1981)",
									},
								],
								returned: 3,
							},
							stories: {
								available: 21,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1011334/stories",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19947",
										name: "Cover #19947",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19948",
										name: "The 3-D Man!",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19949",
										name: "Cover #19949",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19950",
										name: "The Devil's Music!",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19951",
										name: "Cover #19951",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/19952",
										name: "Code-Name:  The Cold Warrior!",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47184",
										name: "AVENGERS: THE INITIATIVE (2007) #14",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47185",
										name: "Avengers: The Initiative (2007) #14 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47498",
										name: "AVENGERS: THE INITIATIVE (2007) #15",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47499",
										name: "Avengers: The Initiative (2007) #15 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47792",
										name: "AVENGERS: THE INITIATIVE (2007) #16",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/47793",
										name: "Avengers: The Initiative (2007) #16 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/48361",
										name: "AVENGERS: THE INITIATIVE (2007) #17",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/48362",
										name: "Avengers: The Initiative (2007) #17 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/49103",
										name: "AVENGERS: THE INITIATIVE (2007) #18",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/49104",
										name: "Avengers: The Initiative (2007) #18 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/49106",
										name: "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/49888",
										name: "AVENGERS: THE INITIATIVE (2007) #19",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/49889",
										name: "Avengers: The Initiative (2007) #19 - Int",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/54371",
										name: "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
										type: "interiorStory",
									},
								],
								returned: 20,
							},
							events: {
								available: 1,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1011334/events",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/events/269",
										name: "Secret Invasion",
									},
								],
								returned: 1,
							},
							urls: [
								{
									type: "detail",
									url: "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=dee9d3ed1615f30e9e8550e51586daa4",
								},
								{
									type: "wiki",
									url: "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=dee9d3ed1615f30e9e8550e51586daa4",
								},
								{
									type: "comiclink",
									url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=dee9d3ed1615f30e9e8550e51586daa4",
								},
							],
						},
						{
							id: 1017100,
							name: "A-Bomb (HAS)",
							description:
								"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
							modified: "2013-09-18T15:54:04-0400",
							thumbnail: {
								path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
								extension: "jpg",
							},
							comicsCount: 13,
							resourceURI:
								"http://gateway.marvel.com/v1/public/characters/1017100",
							comics: {
								available: 4,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1017100/comics",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/47176",
										name: "FREE COMIC BOOK DAY 2013 1 (2013) #1",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/40632",
										name: "Hulk (2008) #53",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/40630",
										name: "Hulk (2008) #54",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/comics/40628",
										name: "Hulk (2008) #55",
									},
								],
								returned: 4,
							},
							series: {
								available: 2,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1017100/series",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/series/17765",
										name: "FREE COMIC BOOK DAY 2013 1 (2013)",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/series/3374",
										name: "Hulk (2008 - 2012)",
									},
								],
								returned: 2,
							},
							stories: {
								available: 7,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1017100/stories",
								items: [
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92078",
										name: "Hulk (2008) #55",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92079",
										name: "Interior #92079",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92082",
										name: "Hulk (2008) #54",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92083",
										name: "Interior #92083",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92086",
										name: "Hulk (2008) #53",
										type: "cover",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/92087",
										name: "Interior #92087",
										type: "interiorStory",
									},
									{
										resourceURI:
											"http://gateway.marvel.com/v1/public/stories/105929",
										name: "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
										type: "cover",
									},
								],
								returned: 7,
							},
							events: {
								available: 0,
								collectionURI:
									"http://gateway.marvel.com/v1/public/characters/1017100/events",
								items: [],
								returned: 0,
							},
							urls: [
								{
									type: "detail",
									url: "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=dee9d3ed1615f30e9e8550e51586daa4",
								},
								{
									type: "comiclink",
									url: "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=dee9d3ed1615f30e9e8550e51586daa4",
								},
							],
						},
					],
				},
				isError,
				isLoading,
				goToPage,
				pageNo,
				handleCharacterChange,
				selectedCharacters,

				charactersPerPage: CHARACTER_LIMIT,
				characterData,
				characterDataError,
				characterDataFetchNextPage,
				characterDataHasNextPage,
				characterDataFetching,
				characterDataRefetch,
			}}
		>
			{children}
		</ComicDataContext.Provider>
	);
};

export default ComicDataContext;
