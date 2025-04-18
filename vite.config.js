import { defineConfig } from "vite";
import dns from "node:dns";
import react from "@vitejs/plugin-react";
import path from "path";
import glsl from "vite-plugin-glsl";
import { fileURLToPath } from "url";

dns.setDefaultResultOrder("verbatim");

// Resolve __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
	root: "./", //root is where index.html is located
	publicDir: "./public",
	base: "./",
	assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.hdr"],
	resolve: {
		alias: {
			"@modules": path.resolve(__dirname, "./src/modules"),
			"@images": path.resolve(__dirname, "./public/assets/images"),
			"@shader": path.resolve(__dirname, "./src/experience/shaders"),
			"@fonts": path.resolve(__dirname, "./public/assets/fonts"),
		},
	},
	plugins: [
		react(),
		glsl({
			incude: [
				// Glob pattern, or array of glob patterns to import
				"**/*.glsl",
				"**/*.wgsl",
				"**/*.vert",
				"**/*.frag",
				"**/*.vs",
				"**/*.fs",
			],
			exclude: undefined, // Glob pattern, or array of glob patterns to ignore
			warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
			defaultExtension: "glsl", // Shader suffix when no extension is specified
			compress: false, // Compress output shader code
			watch: true, // Recompile shader on change
			root: "./src", // Directory for root imports "./src/" // might be public || ./
		}),
	],
	server: {
		host: true,
		watch: true,
		open: !(
			"SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env
		),
	},
	build: {
		outDir: "./dist",
		emptyOutDir: true,
		sourcemap: true,
	},
});
