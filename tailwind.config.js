const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media",
	// or 'media' or 'class'
	theme: {
		screens: {
			sm: {"min": "640px"},
			md: {"min": "768px"},
			lg: {"min": "1024px"},
			xl: {"min": "1280px", max: "1024px"},
			// '2xl': {'min': '1536px'},
		},
		extend: {
			boxShadow: {
				"active": "0 2px 0 rgba(2, 132, 199)",
			},
			colors: {
				accent: colors.lightBlue,
				gray: {
					...colors.gray,
					light: "#FFFFFF",
					dark: "#0E0D0D",
				},
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
