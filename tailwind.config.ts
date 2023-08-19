import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        brand: {
          black: '#050505',
          blue:  '#5EB0D6',
          brown: '#a95f4d',
          beige: '#d0a465',
          white: '#fdf6eb',
        },
      },
      fontFamily: {
        sans: ['var(--font-cormorant)'],
        mono: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
