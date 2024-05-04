import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ComicListing from "./components/ComicListing/ComicListing";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ComicListing />
		</QueryClientProvider>
	);
}

export default App;
