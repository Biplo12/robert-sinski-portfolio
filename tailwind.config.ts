import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'liberty-blue': '#0A192F',
        spindrift: '#64FFDA',
        'dark-eclipse': '#112240',
        'grey-text': '#ffffffa6',
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
      screens: {
        // => @media (max-width: 290px) { ... }
        exxsm: { max: '290px' },
        // => @media (max-width: 355px) { ... }
        exsm: { max: '355px' },
        // => @media (max-width: 480px) { ... }
        mxxsm: { max: '480px' },
        // => @media (max-width: 640px) { ... }
        mxsm: { max: '640px' },
        // => @media (max-width: 768px) { ... }
        mxmd: { max: '768px' },
        // => @media (max-width: 1024px) { ... }
        mxlg: { max: '1024px' },
        // => @media (max-width: 1280px) { ... }
        mxxl: { max: '1280px' },
      },
      fontFamily: {
        calibre: ['Calibre', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
