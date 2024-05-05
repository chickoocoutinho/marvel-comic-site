import clsx from "clsx";

import styles from "./button.module.css";

const ImageButton = ({ src, alt, className, onClick }) => {
	return (
		<img
			className={clsx(styles.buttonBase, className)}
			src={src}
			alt={alt}
			onClick={onClick}
		/>
	);
};

export default ImageButton;
