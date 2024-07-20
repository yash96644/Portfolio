/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular'],
        Hero: ['Hero'],
        Ice: ['Ice'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'text-inner': 'inset 2px 2px 10px #a1b562',
      },
      letterSpacing: {
        'extra-tight': '-0.075em', // Custom tighter letter spacing
      },
    },
  },
  plugins: [],
};
