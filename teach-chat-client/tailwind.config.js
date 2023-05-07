/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['Raleway', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'pale-1': 'rgba(0, 0, 0, 0.05) 0px 10px 50px',
			},
			backgroundImage: {
				'purple-radial-gradient': 'radial-gradient(farthest-corner circle at top right, #00dfff 0%, #8c00ea 100%)',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
