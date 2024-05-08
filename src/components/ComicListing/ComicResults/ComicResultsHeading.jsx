import styles from "./comicResults.module.css";
import Button from "../../common/Button/Button";

const ComicResultsHeading = ({
	selectedCharacters = [],
	handleFiltersClear,
	searchString,
}) => {
	const selectedCharactersDisplayString = selectedCharacters.reduce(
		(acc, current) => (acc += `, ${current.name}`),
		""
	);

	return selectedCharacters.length !== 0 ? (
		<div className={styles.exploreText}>
			<p className={styles.resultsHeading}>
				Explore - {selectedCharactersDisplayString.slice(2)}
			</p>

			<Button onClick={handleFiltersClear}>Clear All Filters</Button>
		</div>
	) : (
		searchString && (
			<div className={styles.exploreText}>
				<p className={styles.resultsHeading}>Search Results</p>
			</div>
		)
	);
};

export default ComicResultsHeading;
