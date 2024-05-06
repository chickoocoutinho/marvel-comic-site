import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const stringify = (obj) => JSON.stringify(obj);

export const useDebouncedQuery = ({ queryKey, ...rest }, debounce = 1000) => {
	const [newQueryKey, setNewQueryKey] = useState(queryKey);

	useEffect(() => {
		if (stringify(queryKey) !== stringify(newQueryKey)) {
			//ForDeepCompare
			const timerId = setTimeout(() => setNewQueryKey(queryKey), debounce);
			return () => clearTimeout(timerId);
		}
	}, [queryKey]);

	return useQuery({ queryKey: newQueryKey, ...rest });
};
