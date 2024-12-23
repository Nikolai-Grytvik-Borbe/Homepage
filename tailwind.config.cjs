/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'dot-pattern': 'radial-gradient(var(--dot-color) 0.5px, transparent 1px)',
			},
			backgroundSize: {
				dots: '40px 40px',
			},
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#6419E6",
					"secondary": "#D926A9",
					"accent": "#1FB2A6",
					"neutral": "#191D24",
					"base-100": "#000000",
					"info": "#3ABFF8",
					"success": "#36D399",
					"warning": "#FBBD23",
					"error": "#F87272",
				}
			}
		]
	},
	plugins: [
		require("daisyui"), 
		require("@tailwindcss/typography")],
}
