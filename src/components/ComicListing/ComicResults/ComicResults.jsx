import { useContext } from "react";

import Card from "../../common/Card/Card";
import ComicDataContext from "../../../context/ComicDataContext";
import Pagination from "../../common/Pagination/Pagination";
import Container from "../../common/Container/Container";

import styles from "./comicResults.module.css";
import Button from "../../common/Button/Button";

const ComicResults = () => {
	const { data, goToPage, pageNo, selectedCharacters, handleFiltersClear } =
		useContext(ComicDataContext);

	const selectedCharactersDisplayString = selectedCharacters.reduce(
		(acc, current) => (acc += `, ${current.name}`),
		""
	);

	return (
		<Container className={styles.container}>
			{selectedCharacters.length !== 0 && (
				<div className={styles.exploreText}>
					<p className={styles.resultsHeading}>
						Explore - {selectedCharactersDisplayString.slice(2)}
					</p>

					<Button onClick={handleFiltersClear}>Clear All Filters</Button>
				</div>
			)}

			<div className={styles.root}>
				<div className={styles.content}>
					{data.results.map((comic) => (
						<Card
							key={comic.id}
							image={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
							comicName={comic.name}
							comicCount={comic.comicsCount}
						/>
					))}
				</div>
			</div>
			<Pagination
				currentPage={pageNo}
				totalPages={10}
				handlePageChange={goToPage}
			/>
		</Container>
	);
};

export default ComicResults;

/*
portrait_small	50x75px
portrait_medium	100x150px
portrait_xlarge	150x225px
portrait_fantastic	168x252px
portrait_uncanny	300x450px
portrait_incredible

standard_small	65x45px
standard_medium	100x100px
standard_large	140x140px
standard_xlarge	200x200px
standard_fantastic	250x250px
standard_amazing	180x180px
*/
