import styles from "./card.module.css";

const Card = ({ image, comicName, comicCount }) => {
	return (
		<div className={styles.root}>
			<img className={styles.image} src={image} alt={comicName} />

			<div className={styles.textContent}>
				<p>{comicName}</p>
				<div className={styles.comicCount}>#{comicCount}</div>
			</div>
		</div>
	);
};

export default Card;
