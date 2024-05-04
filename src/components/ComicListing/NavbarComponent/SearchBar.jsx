import TextField from "../../common/TextField/TextField";

import styles from "./navbar.module.css";
import SearchIcon from "../../../assets/search-solid.svg";
import { useState } from "react";

//TODO: Sync Search with Parent
const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<>
			<TextField
				className={styles.searchBar}
				startElement={<SearchIcon height="20" className={styles.searchIcon} />}
				placeholder="Search for comics..."
				value={searchValue}
				onChange={handleSearchChange}
			/>
		</>
	);
};

export default SearchBar;
