/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        jsos: {
          purple: '#663399',
          purpleLight: '#C084FC', // Highly legible light violet for small text/labels on dark backgrounds
          black: '#0C0910',
          darkgrey: '#141118',
          grey: '#D4D4D8', // Upgraded from #898989 for strict WCAG AA contrast compliance
          darkGreyText: '#9CA3AF', // Helper for secondary descriptions
          light: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
