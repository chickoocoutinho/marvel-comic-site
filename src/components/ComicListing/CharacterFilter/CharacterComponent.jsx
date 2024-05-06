import clsx from "clsx";

import ImageButton from "../../common/Button/ImageButton";

import CheckIcon from "../../../assets/check-solid.svg";
import styles from "./characterFilter.module.css";

const CharacterComponent = ({ id, name, image, selected, handleSelect }) => {
	const handleSelectClick = () => {
		handleSelect({ id, name });
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
