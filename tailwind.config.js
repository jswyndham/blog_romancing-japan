/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				sans: ['ui-sans-serif', 'system-ui'],
				serif: ['ui-serif', 'Georgia'],
				heading: ['Shippori Mincho', 'serif'],
				cardHeading: ['Bebas Neue', 'sans-serif'],
				catTags: ['Bebas Neue', 'sans-serif'],
				roboto_condensed: ['var(--font-roboto-condensed)'],
				playfair_display: ['var(--font-playfair_display)'],
				krona_one: ['var(--font-krona_one)'],
				shadows_into_light: ['var(--font-shadows_into_light)'],
				patrick_hand: ['var(--font-patrick_hand)'],
				carter_one: ['var(--font-carter_one)'],
				caveat: ['var(--font-caveat)'],
				ubuntu: ['Ubuntu Sans', 'sans-serif'],
			},
			transitionDuration: {
				2000: '2000ms',
				3000: '3000ms',
				4000: '4000ms',
				5000: '5000ms',
			},
			height: {
				'5/6': '83%',
				'4/6': '66.666667%',
				'3/6/': '50%',
				'2/6': '33.333337%',
				'1/6': '17.333337%',
				'3/4': '75%',
				'2/4': '50%',
				'1/4': '25%',
			},
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				smx: '500px',
				// => @media (min-width: 640px) { ... }

				md: '710px',
				// => @media (min-width: 768px) { ... }

				smd: '830px',

				lg: '985px',
				// => @media (min-width: 1024px) { ... }

				xl: '1150px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1500px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1800px',

				'4xl': '2000px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8C0327',
					secondary: '#D85251',
					accent: '#D59B6A',
					neutral: '#826A5C',
					'base-100': '#F1F1F1',
					info: '#003C3B',
					success: '#499380',
					warning: '#E97F14',
					error: '#DF1A2F',
				},
			},
		],
		daisyui: {
			themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
			darkTheme: 'light', // name of one of the included themes for dark mode
			base: false, // applies background color and foreground color for root element by default
			styled: false, // include daisyUI colors and design decisions for all components
			utils: true, // adds responsive and modifier utility classes
			rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
			prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
			logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		},
	},
};
