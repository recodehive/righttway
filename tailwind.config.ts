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
        navy: '#020817',
        royal: '#2132B9',
        gold: '#EAB308',
        slate: {
          gray: '#475569',
          light: '#64748B',
        },
        border: '#E5E7EB',
        'neutral-light': '#F1F5F9',
        'light-slate': '#E2E8F0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
