import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	define: {
		MARVEL_BASE_URL: "https://gateway.marvel.com:443",
		MARVEL_PUBLIC_KEY: "dee9d3ed1615f30e9e8550e51586daa4",
	},
});
