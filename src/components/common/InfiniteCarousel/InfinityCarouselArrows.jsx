import clsx from "clsx";
import ChevronLeft from "../../../assets/chevron-left-solid.svg";
import ChevronRight from "../../../assets/chevron-right-solid.svg";
import IconButton from "../Button/IconButton";

import styles from "./infinityCarousel.module.css";

export const InfinityCarouselLeftArrow = ({ onClick }) => {
	const handleClick = (event) => {
		event.stopPropagation();
		onClick(event);
	};

	return (
		<div onClick={handleClick} className={clsx(styles.arrows, styles.arrowsLeft)}>
			<IconButton type="square">
				<ChevronLeft height={30} />
			</IconButton>
		</div>
	);
};

export const InfinityCarouselRightArrow = ({ onClick }) => {
	const handleClick = (event) => {
		event.stopPropagation();
		onClick(event);
	};

	return (
		<div onClick={handleClick} className={clsx(styles.arrows, styles.arrowsRight)}>
			<IconButton type="square">
				<ChevronRight height={30} />
			</IconButton>
		</div>
	);
};
