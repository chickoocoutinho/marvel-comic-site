import { useState } from "react";
import clsx from "clsx";

import ImageButton from "../../common/Button/ImageButton";

import CheckIcon from "../../../assets/check-solid.svg";
import styles from "./characterFilter.module.css";

const CharacterComponent = ({ id, image, selected, handleSelect }) => {
	const [isSelected, setIsSelected] = useState(selected); //decoupled local and global state to avoid rerenders

	const handleSelectClick = () => {
		setIsSelected((prev) => !prev);
		handleSelect(id);
	};

	return (
		<div className={styles.buttonRoot}>
			{isSelected && (
				<div className={styles.selected} onClick={handleSelectClick}>
					<CheckIcon height="6rem" />
				</div>
			)}
			<ImageButton
				onClick={handleSelectClick}
				className={clsx(styles.imageButton, styles.placeholderBackground)}
				src={image}
			/>
		</div>
	);
};

export default CharacterComponent;
