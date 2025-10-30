import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5016', // Vert foncé
          light: '#4a7c2a',
          dark: '#1a3008',
        },
        chocolate: {
          DEFAULT: '#7B4F3D', // Chocolat
          light: '#9d6b56',
          dark: '#5a3829',
        },
        dark: '#000000',
        light: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config


