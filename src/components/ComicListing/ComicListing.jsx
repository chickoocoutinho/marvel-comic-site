import { ComicDataContextProvider } from "../../context/ComicDataContext";
import ComicResults from "./ComicResults/ComicResults";

const ComicListing = () => {
	return (
		<ComicDataContextProvider>
			21
			<ComicResults />
		</ComicDataContextProvider>
	);
};

export default ComicListing;
