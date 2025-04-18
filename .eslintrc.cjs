module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: {
		"import/resolver": {
			alais: {
				map: [
					["@modules", "./src/modules"],
					["@images", "./public/assets/images"],
					["@shader", "./src/experience/shaders"],
					["@fonts", "./public/assets/fonts"],
				],
			},
			extentions: [".js", ".jsx", ".tsx", ".vert", ".frag", ".glsl"],
		},
		react: { version: "18.2" },
	},
	plugins: ["react-refresh"],
	rules: {
		"react/jsx-no-target-blank": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};
