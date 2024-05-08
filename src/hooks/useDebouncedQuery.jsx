import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const stringify = (obj) => JSON.stringify(obj);

//Custom use Query hook to handled debouncing
export const useDebouncedQuery = ({ debounceOn, queryKey, ...rest }, debounce = 1000) => {
	const [newQueryKey, setNewQueryKey] = useState(queryKey);

	useEffect(() => {
		if (stringify(queryKey) !== stringify(newQueryKey)) {
			//ForDeepCompare
			const timerId = setTimeout(() => setNewQueryKey(queryKey), debounce);
			return () => clearTimeout(timerId);
		}
	}, [queryKey]);

	return useQuery({ queryKey: debounceOn ? newQueryKey : queryKey, ...rest });
};
