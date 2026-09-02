/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        // brand orange, sampled from the J-Kare mark
        orange: {
          DEFAULT: '#EE5A28',
          light: '#F4834F',
          dark: '#C8451B',
        },
        paper: '#FFFFFF',
        steel: {
          DEFAULT: '#8B8F94',
          light: '#E4E1DC',
          dark: '#57595C',
        },
        rust: '#C8451B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'stitch': 'repeating-linear-gradient(90deg, currentColor 0, currentColor 8px, transparent 8px, transparent 16px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
