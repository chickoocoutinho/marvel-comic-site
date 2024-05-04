import clsx from "clsx";

import styles from "./textField.module.css";

const TextField = ({
	className,
	startElement,
	endElement,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<label className={clsx(styles.label, className)}>
			<div className={styles.root}>
				{startElement}
				<input
					className={styles.inputRoot}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
				{endElement}
			</div>
		</label>
	);
};

export default TextField;
