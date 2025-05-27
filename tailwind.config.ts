import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
  orbee: {
    css: {
      color: '#1C1B1F', // orbee-dark-text
      maxWidth: 'none',
      fontFamily: 'var(--font-dm-sans)',

      p: {
        marginBottom: '1.5rem',
        lineHeight: '1.75',
      },
      '.lead': {
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#404040',
      },
      strong: {
        fontWeight: '600',
        color: '#1C1B1F',
      },
      em: {
        fontStyle: 'italic',
      },
      h1: {
        fontSize: '2.25rem',
        fontWeight: '700',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        color: '#1C1B1F',
        fontFamily: 'Funnel Display, Impact, sans-serif',
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginTop: '2.5rem',
        marginBottom: '1rem',
        color: '#1C1B1F',
        fontFamily: 'Funnel Display, Impact, sans-serif',
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: '500',
        marginTop: '2rem',
        marginBottom: '0.75rem',
        color: '#1C1B1F',
        fontFamily: 'Funnel Display, Impact, sans-serif',
      },
      ul: {
        marginBottom: '1.5rem',
        paddingLeft: '1.25rem',
        listStyleType: 'disc',
      },
      li: {
        marginBottom: '0.5rem',
      },
      a: {
        color: '#5522FA', // orbee-violet
        textDecoration: 'none',
        fontWeight: '500',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      code: {
        backgroundColor: '#F7F7FC',
        padding: '0.25rem 0.375rem',
        borderRadius: '0.25rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#1C1B1F',
      },
    },
  },
},

      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'funnel': ['Funnel Display', 'Impact', 'sans-serif'],
      },
      colors: {
        'orbee-violet': '#5522FA',
        'orbee-violet-light': '#7047FF',
        'orbee-violet-dark': '#4010E3',
        'orbee-dark-text': '#1C1B1F',
        'orbee-light-bg': '#FFFFFF',
        'orbee-light-bg-tint': '#F7F7FC',
        'orbee-gray-100': '#F2F2F2',
        'orbee-gray-200': '#E6E6E6',
        'orbee-gray-300': '#D4D4D4',
        'orbee-gray-400': '#A3A3A3',
        'orbee-gray-500': '#737373',
        'orbee-gray-600': '#525252',
        'orbee-gray-700': '#404040',
        'chart': {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'expand': {
          from: { maxHeight: '0', opacity: '0' },
          to: { maxHeight: '3000px', opacity: '1' },
        },
        'collapse': {
          from: { maxHeight: '3000px', opacity: '1' },
          to: { maxHeight: '0', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'expand': 'expand 0.5s ease-out forwards',
        'collapse': 'collapse 0.3s ease-in forwards',
      },
    },
  },
  plugins: [
  require('tailwindcss-animate'),
  typography,
],
};
export default config;