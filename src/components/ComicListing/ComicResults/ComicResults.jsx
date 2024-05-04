import { useContext } from "react";
import ComicDataContext from "../../../context/ComicDataContext";

const ComicResults = () => {
	const { data } = useContext(ComicDataContext);

	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default ComicResults;
