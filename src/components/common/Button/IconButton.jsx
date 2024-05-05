import clsx from "clsx";

import styles from "./button.module.css";

const IconButton = ({ children, className, type = "round" }) => {
	return (
		<div
			className={clsx(
				styles.buttonBase,
				styles.iconButton,
				className,
				type === "round" ? styles.iconButtonRound : styles.iconButtonSquare
			)}
		>
			{children}
		</div>
	);
};

export default IconButton;
