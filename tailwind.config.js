/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"soft-orange": "hsl(35, 77%, 62%)",
				"soft-red": "hsl(5, 85%, 63%)",
				"off-white": "hsl(36, 100%, 99%)",
				"grayish-blue": "hsl(233, 8%, 79%)",
				"dark-grayish-blue": "hsl(236, 13%, 42%)",
				"very-dark-blue": "hsl(240, 100%, 5%)",
			},
			screens: {
				"desktop-base": "1280px",
				"laptop-base": "720px",
				"mobile-base": "375px",
				"screen-1500": "1500px",
				"screen-1000": "1000px",
			},
			backgroundImage: {
				openNavMenuIcon: "url('./src/assets/icon-menu-close.svg')",
			},
			fontSize: {
				"clamp-custom-1": "clamp(1rem, 1.042vw, 1.25rem)",
				"clamp-custom-2": "clamp(0.875rem, 1.564vw, 1.25rem)",
				"clamp-custom-2.1": "clamp(1rem, 1.564vw, 1.25rem)",
				"clamp-custon-3": "clamp(1rem, 4.267vw, 1.5rem)",
			},
			width: {
				"clamp-trend-photo-1": "clamp(120px, 25vw, 180px)",
			},
		},
	},
	plugins: [],
};
