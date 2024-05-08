import IconButton from "../../common/Button/IconButton";

import styles from "./comicResults.module.css";
import TriangleWarningIcon from "../../../assets/triangle-exclamation-solid.svg";
import PulseLoading from "../../../assets/pulse-loading.svg";

const ComicResultsLoadingError = ({
	comicsDataLoading,
	comicsDataError,
	comicsDataRefetch,
}) => {
	return comicsDataLoading ? (
		<PulseLoading className={styles.loading} />
	) : (
		comicsDataError && (
			<IconButton className={styles.error} onClick={comicsDataRefetch}>
				<TriangleWarningIcon height={60} />
				<p>Failed to get Data. Click To Refresh</p>
			</IconButton>
		)
	);
};

export default ComicResultsLoadingError;
