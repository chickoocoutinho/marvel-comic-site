import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import ChevronLeft from "../../../assets/chevron-left-solid.svg";
import ChevronRight from "../../../assets/chevron-right-solid.svg";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
	return (
		<>
			<ResponsivePagination
				current={currentPage}
				total={totalPages}
				onPageChange={handlePageChange}
				previousLabel={<ChevronLeft className={styles.chevron} />}
				nextLabel={<ChevronRight className={styles.chevron} />}
			/>
		</>
	);
};

export default Pagination;
