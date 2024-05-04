import { ComicDataContextProvider } from "../../context/ComicDataContext";
import ComicResults from "./ComicResults/ComicResults";
import NavbarComponent from "./NavbarComponent/NavbarComponent";

import styles from "./comicListing.module.css";

const ComicListing = () => {
	return (
		<ComicDataContextProvider>
			<div className={styles.root}>
				<NavbarComponent />
				<div className={styles.content}>
					<ComicResults />
				</div>
			</div>
		</ComicDataContextProvider>
	);
};

export default ComicListing;
