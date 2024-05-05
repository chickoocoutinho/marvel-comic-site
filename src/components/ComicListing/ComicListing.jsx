import { ComicDataContextProvider } from "../../context/ComicDataContext";
import CharacterFilter from "./CharacterFilter/CharacterFilter";
import ComicResults from "./ComicResults/ComicResults";
import NavbarComponent from "./NavbarComponent/NavbarComponent";

import styles from "./comicListing.module.css";

const ComicListing = () => {
	return (
		<ComicDataContextProvider>
			<div className={styles.root}>
				<div className={styles.comicBackground} />
				<NavbarComponent />
				<CharacterFilter />
				<ComicResults />
			</div>
		</ComicDataContextProvider>
	);
};

export default ComicListing;
