/** @type {import('tailwindcss').Config} - Dark mode via class; custom palette (surface, ink, accent). */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
        },
        ink: {
          light: '#111111',
          dark: '#E0E0E0',
        },
        accent: {
          teal: '#00BFA6',
          blue: '#1E90FF',
          coral: '#FF6F61',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
