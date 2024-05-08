import { useCallback, useContext, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Container from "../../common/Container/Container";
import ComicDataContext from "../../../context/ComicDataContext";
import InfiniteCarousel from "../../common/InfiniteCarousel/InfiniteCarousel";

import TriangleWarningIcon from "../../../assets/triangle-exclamation-solid.svg";
import styles from "./characterFilter.module.css";
import IconButton from "../../common/Button/IconButton";
import CharacterComponent from "./CharacterComponent";

const CharacterFilter = () => {
	const {
		handleCharacterChange,
		selectedCharacters,
		charactersPerPage,
		characterData,
		characterDataError,
		characterDataFetchNextPage,
		characterDataHasNextPage,
		characterDataFetching,
		characterDataRefetch,

		searchString,
	} = useContext(ComicDataContext);

	const characterDataItems = useMemo(() => {
		if (!characterData) return [];

		const selectedCharactersMap = new Set(
			selectedCharacters.map((character) => character.id)
		);

		return characterData.pages.reduce(
			(acc, current) => [
				...acc,
				...current.map((element) => ({
					isSelected: selectedCharactersMap.has(element.id),
					...element,
				})),
			],
			[]
		);
	}, [characterData, selectedCharacters]);

	const handleCharacterClick = (character) => {
		handleCharacterChange(character);
	};

	const renderComponent = useCallback(
		(index) => {
			return (
				<CharacterComponent
					id={characterDataItems[index].id}
					name={characterDataItems[index].name}
					image={characterDataItems[index].image}
					selected={characterDataItems[index].isSelected}
					handleSelect={handleCharacterClick}
				/>
			);
		},
		[characterDataItems]
	);

	const renderLoading = useCallback(() => {
		if (characterDataError) {
			return (
				<IconButton onClick={characterDataRefetch} className={styles.error}>
					<TriangleWarningIcon height={60} />
					<p>Click To Refresh</p>
				</IconButton>
			);
		}
		return (
			<Skeleton
				baseColor="var(--grey-dark)"
				highlightColor="var(--grey-card)"
				circle
				height={200}
				width={200}
			/>
		);
	}, [characterDataError]);

	return (
		<div className={styles.root}>
			<Container>
				<InfiniteCarousel
					hasNextPage={
						characterDataItems.length === 0 || characterDataHasNextPage
					}
					isNextPageLoading={characterDataFetching}
					items={characterDataItems}
					loadNextPage={characterDataFetchNextPage}
					height={220}
					itemSize={230}
					renderComponent={renderComponent}
					renderLoading={renderLoading}
					loadingBuffer={charactersPerPage}
				/>
			</Container>
			{searchString && <div className={styles.disabled} />}
		</div>
	);
};

export default CharacterFilter;
