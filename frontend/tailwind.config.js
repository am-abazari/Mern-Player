module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				'62': '250px',
			},
			colors: {
				bg_light: {
					100: "#FFFFFF",
					200: "#ECEDF3",
				},
			}
		},
	},
	plugins: [],
}
