/** @type {import('tailwindcss').Config} */
import {
  darkBGColors,
  darkBorderColors,
  darkTextColors,
  lightBGColors,
  lightBorderColors,
  lightTextColors,
} from './src/utils/colorsUtils';
import { typographyUtils } from './src/utils/typographyUtils';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark: darkBGColors,
      light: lightBGColors,
    },
    borderColor: {
      dark: darkBorderColors,
      light: lightBorderColors,
    },
    textColor: {
      dark: darkTextColors,
      light: lightTextColors,
    },
    fontSize: typographyUtils,
    fontFamily: {
      'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif'],
    },
    spacing: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '36px',
      6: '40px',
      7: '48px',
      8: '56px',
      9: '64px',
      10: '72px',
      11: '80px',
    },
    borderRadius: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '12px',
    },
    boxShadow: {
      base: '0px 1px 1px 0px rgba(101, 108, 123, 0.15), 0px 0px 1px 0px rgba(101, 108, 123, 0.25)',
      card: '0px 2px 4px 0px rgba(101, 108, 123, 0.15), 0px 0px 1px 0px rgba(101, 108, 123, 0.25)',
      gnav: '0px 8px 16px 0px rgba(124, 128, 158, 0.15), 0px 0px 1px 0px rgba(124, 128, 158, 0.25)',
      modal:
        '0px 12px 24px 0px rgba(101, 108, 123, 0.15), 0px 0px 1px 0px rgba(101, 108, 123, 0.25)',
      toast:
        '0px 20px 32px 0px rgba(101, 108, 123, 0.15), 0px 0px 1px 0px rgba(101, 108, 123, 0.25)',
    },
  },
  plugins: [],
};
