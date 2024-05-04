import Container from "../../common/Container/Container";
import SearchBar from "./SearchBar";

import MarvelLogo from "../../../assets/marvel.svg";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
	return (
		<nav className={styles.nav}>
			<Container className={styles.navContent}>
				<MarvelLogo className={styles.logo} />
				<SearchBar />
			</Container>
		</nav>
	);
};

export default NavbarComponent;
