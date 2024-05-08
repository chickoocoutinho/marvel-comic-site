import { useContext } from "react";

import Card from "../../common/Card/Card";
import ComicDataContext from "../../../context/ComicDataContext";
import Pagination from "../../common/Pagination/Pagination";
import Container from "../../common/Container/Container";

import styles from "./comicResults.module.css";
import ComicResultsHeading from "./ComicResultsHeading";
import ComicResultsLoadingError from "./ComicResultsLoadingError";

const calculateTotalPages = (totalCount, limit) => {
	if (!totalCount || !limit) return 0;

	return Math.ceil(totalCount / limit);
};

const ComicResults = () => {
	const {
		goToPage,
		pageNo,
		selectedCharacters,
		handleFiltersClear,
		searchString,

		comicsData,
		comicsDataError,
		comicsDataLoading,
		comicsDataRefetch,
	} = useContext(ComicDataContext);

	return (
		<Container className={styles.container}>
			<ComicResultsHeading
				searchString={searchString}
				selectedCharacters={selectedCharacters}
				handleFiltersClear={handleFiltersClear}
			/>
			<ComicResultsLoadingError
				comicsDataLoading={comicsDataLoading}
				comicsDataError={comicsDataError}
				comicsDataRefetch={comicsDataRefetch}
			/>

			<div className={styles.root}>
				<div className={styles.content}>
					{!comicsDataError &&
						comicsData.data.map((comic) => (
							<Card
								key={comic.id}
								image={comic.image}
								comicName={comic.title}
								comicCount={comic.pageCount}
							/>
						))}
				</div>
			</div>
			<Pagination
				currentPage={pageNo}
				totalPages={
					comicsData
						? calculateTotalPages(comicsData.total, comicsData.limit)
						: 0
				}
				handlePageChange={goToPage}
			/>
		</Container>
	);
};

export default ComicResults;
