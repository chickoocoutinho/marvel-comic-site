import { useContext } from "react";
import Card from "../../common/Card/Card";
import ComicDataContext from "../../../context/ComicDataContext";

import styles from "./comicResults.module.css";
import Pagination from "../../common/Pagination/Pagination";

const ComicResults = () => {
	const { data, goToPage, pageNo } = useContext(ComicDataContext);

	return (
		<>
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
		</>
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
