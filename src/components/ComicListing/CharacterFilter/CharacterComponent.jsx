import clsx from "clsx";

import ImageButton from "../../common/Button/ImageButton";

import CheckIcon from "../../../assets/check-solid.svg";
import styles from "./characterFilter.module.css";

const CharacterComponent = ({ id, image, selected, handleSelect }) => {
	const handleSelectClick = () => {
		handleSelect(id);
	};

	return (
		<div className={styles.buttonRoot}>
			{selected && (
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
