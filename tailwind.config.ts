import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        fadeOut: 'fadeOut .3s ease-in-out',
        slide: 'slide 30s linear infinite',
      },

      keyframes: {
        cursor: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        play: {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
