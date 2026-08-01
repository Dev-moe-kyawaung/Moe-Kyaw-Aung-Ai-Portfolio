/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00E5FF',
        'accent-gold': '#C9A84C',
        'dark-bg': '#0A0A0F',
        'dark-card': 'rgba(255, 255, 255, 0.05)',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        'light-bg': '#F5F5F7',
        'light-card': 'rgba(0, 0, 0, 0.03)',
        'light-border': 'rgba(0, 0, 0, 0.08)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-heavy': '40px',
      },
      animation: {
        'shimmer': 'shimmer 6s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(0, 229, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 229, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
