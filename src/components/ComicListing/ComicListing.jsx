import { ComicDataContextProvider } from "../../context/ComicDataContext";
import ComicResults from "./ComicResults/ComicResults";

const ComicListing = () => {
	return (
		<ComicDataContextProvider>
			<ComicResults />
		</ComicDataContextProvider>
	);
};

export default ComicListing;
