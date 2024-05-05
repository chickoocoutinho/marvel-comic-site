import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Container from "../../common/Container/Container";
import ComicDataContext from "../../../context/ComicDataContext";
import InfiniteCarousel from "../../common/InfiniteCarousel/InfiniteCarousel";
import ImageButton from "../../common/Button/ImageButton";

import CheckIcon from "../../../assets/check-solid.svg";
import styles from "./characterFilter.module.css";

const CharacterFilter = () => {
	const { data, handleCharacterChange, selectedCharacters } =
		useContext(ComicDataContext);

	const handleCharacterClick = (character) => {
		handleCharacterChange(character);
	};

	const renderComponent = (index) => {
		const isSelected = selectedCharacters.indexOf(data.results[index].id) !== -1;
		return (
			<div className={styles.buttonRoot}>
				{isSelected && (
					<div
						className={styles.selected}
						onClick={() => handleCharacterClick(data.results[index].id)}
					>
						<CheckIcon height="6rem" />
					</div>
				)}
				<ImageButton
					onClick={() => handleCharacterClick(data.results[index].id)}
					className={styles.imageButton}
					src={`${data.results[index].thumbnail.path}/standard_xlarge.${data.results[index].thumbnail.extension}`}
				/>
			</div>
		);
	};

	return (
		<div className={styles.root}>
			<Container>
				<InfiniteCarousel
					height={220}
					itemSize={230}
					items={data.results}
					renderComponent={renderComponent}
					loadingItem={
						<Skeleton
							baseColor="var(--grey-dark)"
							highlightColor="var(--grey-card)"
							circle
							height={200}
							width={200}
						/>
					}
				/>
			</Container>
		</div>
	);
};

export default CharacterFilter;
