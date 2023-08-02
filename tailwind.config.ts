import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'liberty-blue': '#0A192F',
        spindrift: '#64FFDA',
        'dark-eclipse': '#112240',
      },
      fontSize: {
        '4xl': '2.5rem',
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        xl: '1.25rem',
        lg: '1.125rem',
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
