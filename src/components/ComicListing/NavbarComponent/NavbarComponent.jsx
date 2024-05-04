import Container from "../../comman/Container/Container";
import styles from "./navbar.module.css";

import MarvelLogo from "../../../assets/marvel.svg";

const NavbarComponent = () => {
	return (
		<nav className={styles.nav}>
			<Container className={styles.navContent}>
				<MarvelLogo /> <div>2</div>
			</Container>
		</nav>
	);
};

export default NavbarComponent;
