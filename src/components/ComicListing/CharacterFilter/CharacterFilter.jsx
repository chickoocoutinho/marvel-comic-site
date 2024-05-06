import { useContext, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";
import "react-loading-skeleton/dist/skeleton.css";

import Container from "../../common/Container/Container";
import ComicDataContext from "../../../context/ComicDataContext";
import InfiniteCarousel from "../../common/InfiniteCarousel/InfiniteCarousel";
import ImageButton from "../../common/Button/ImageButton";

import CheckIcon from "../../../assets/check-solid.svg";
import TriangleWarningIcon from "../../../assets/triangle-exclamation-solid.svg";
import styles from "./characterFilter.module.css";
import IconButton from "../../common/Button/IconButton";

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
	} = useContext(ComicDataContext);

	const characterDataItems = useMemo(() => {
		return characterData.pages.reduce((acc, current) => [...acc, ...current], []);
	}, [characterData]);

	const handleCharacterClick = (character) => {
		handleCharacterChange(character);
	};

	const renderComponent = (index) => {
		const isSelected =
			selectedCharacters.indexOf(characterDataItems[index].id) !== -1;
		return (
			<div className={styles.buttonRoot}>
				{isSelected && (
					<div
						className={styles.selected}
						onClick={() => handleCharacterClick(characterDataItems[index].id)}
					>
						<CheckIcon height="6rem" />
					</div>
				)}
				<ImageButton
					onClick={() => handleCharacterClick(characterDataItems[index].id)}
					className={clsx(styles.imageButton, styles.placeholderBackground)}
					src={characterDataItems[index].image}
				/>
			</div>
		);
	};

	const renderLoading = () => {
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
	};

	return (
		<div className={styles.root}>
			<Container>
				<InfiniteCarousel
					hasNextPage={characterDataHasNextPage}
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
		</div>
	);
};

export default CharacterFilter;
