import { useContext } from "react";

import ComicDataContext from "../../../context/ComicDataContext";
import Container from "../../common/Container/Container";
import SearchBar from "./SearchBar";

import MarvelLogo from "../../../assets/marvel.svg";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
	const { searchString, handleSearch } = useContext(ComicDataContext);

	return (
		<nav className={styles.nav}>
			<Container className={styles.navContent}>
				<MarvelLogo className={styles.logo} />
				<SearchBar handleSearch={handleSearch} defaultValue={searchString} />
			</Container>
		</nav>
	);
};

export default NavbarComponent;
