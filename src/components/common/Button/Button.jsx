import clsx from "clsx";

import styles from "./button.module.css";

const Button = ({ children, className, ...props }) => {
	return (
		<button
			className={clsx(styles.buttonBase, styles.normalButton, className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
