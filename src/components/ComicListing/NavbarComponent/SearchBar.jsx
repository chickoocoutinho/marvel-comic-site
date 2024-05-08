import { useCallback, useEffect, useState } from "react";

import TextField from "../../common/TextField/TextField";
import IconButton from "../../common/Button/IconButton";

import debounce from "../../../utils/debounce";
import styles from "./navbar.module.css";
import SearchIcon from "../../../assets/search-solid.svg";
import CloseIcon from "../../../assets/xmark-solid.svg";

const SearchBar = ({ handleSearch, defaultValue }) => {
	const [searchValue, setSearchValue] = useState(defaultValue);

	useEffect(() => {
		if (!defaultValue) {
			handleSearch("");
		}
	}, [defaultValue]);

	// Debounced search bar to decouple search component from parent, for smarter rerenders
	const debouncedSearch = useCallback(
		debounce((value) => {
			handleSearch(value);
		}),
		[]
	);

	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearchValue(value);
		debouncedSearch(value);
	};

	const handleSearchClear = () => {
		setSearchValue("");
		handleSearch("");
	};

	return (
		<>
			<TextField
				className={styles.searchBar}
				startElement={<SearchIcon height="20" className={styles.searchIcon} />}
				placeholder="Search for comics..."
				value={searchValue}
				onChange={handleSearchChange}
				endElement={
					searchValue !== "" && (
						<IconButton
							onClick={handleSearchClear}
							className={styles.closeIcon}
						>
							<CloseIcon width={15} />
						</IconButton>
					)
				}
			/>
		</>
	);
};

export default SearchBar;
