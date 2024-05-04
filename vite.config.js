import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
		}),
	],
	define: {
		// Mentioned in docs to use JSON.stringify https://vitejs.dev/config/shared-options.html#define
		MARVEL_BASE_URL: JSON.stringify("https://gateway.marvel.com:443"),
		MARVEL_PUBLIC_KEY: JSON.stringify("dee9d3ed1615f30e9e8550e51586daa4"),
	},
});
