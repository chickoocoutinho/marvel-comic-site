import { ComicDataContextProvider } from "../../context/ComicDataContext";
import Container from "../common/Container/Container";
import ComicResults from "./ComicResults/ComicResults";
import NavbarComponent from "./NavbarComponent/NavbarComponent";

import ComicBackground from "../../assets/comic-background.svg";
import styles from "./comicListing.module.css";

const ComicListing = () => {
	return (
		<ComicDataContextProvider>
			<div className={styles.root}>
				<div className={styles.comicBackground} />
				<NavbarComponent />
				<Container className={styles.content}>
					<ComicResults />
				</Container>
			</div>
		</ComicDataContextProvider>
	);
};

export default ComicListing;
