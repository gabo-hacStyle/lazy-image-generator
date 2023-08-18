import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      colors: {
        'dark-orange': '#8a2c02',
        'almost-orange': '#d75404',
        'yellorange': '#f08b33',
        'light-yellow': '#eecc8d'
      },
      backgroundColor: {
        'dark-orange': '#8a2c02',
        'almost-orange': '#d75404',
        'yellorange': '#f08b33',
        'light-yellow': '#eecc8d'
      }
    },
  },
  plugins: [],
}
export default config
