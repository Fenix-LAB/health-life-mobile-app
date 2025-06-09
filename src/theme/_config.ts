import type { ThemeConfiguration } from '@/theme/types/config';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const enum Variant {
  DARK = 'dark',
}

const colorsLight = {
  // Default light theme colors
  gray100: '#DFDFDF',
  gray200: '#A1A1A1',
  gray400: '#4D4D4D',
  gray50: '#EFEFEF',
  gray800: '#303030',
  purple100: '#E1E1EF',
  purple50: '#1B1A23',
  purple500: '#44427D',
  red500: '#C13333',
  skeleton: '#A1A1A1',
  // Palette for health life style app
  hlnight: '#040f00',
  hlpakistangreen: '#1e2b00',
  hldarkmossgreen: '#1d5b00',
  hlstraw: '#cad877',
  hlvanilla: '#e7edab',
} as const;

// Show palette for light default mode
// https://coolors.co/DFDFDF-A1A1A1-4D4D4D-EFEFEF-303030-E1E1EF-1B1A23-44427D-C13333-A1A1A1

// Show palette for light hlh mode
// https://coolors.co/040f00-1e2b00-1d5b00-cad877-e7edab

const colorsDark = {
  gray100: '#000000',
  gray200: '#BABABA',
  gray400: '#969696',
  gray50: '#EFEFEF',
  gray800: '#E0E0E0',
  purple100: '#252732',
  purple50: '#1B1A23',
  purple500: '#A6A4F0',
  red500: '#C13333',
  skeleton: '#303030',
  // Palette for health life style app
  hlnight: '#040f00',
  hlpakistangreen: '#1e2b00',
  hldarkmossgreen: '#1d5b00',
  hlstraw: '#cad877',
  hlvanilla: '#e7edab',
} as const;

// Show palette for dark default mode
// https://coolors.co/000000-BABABA-969696-EFEFEF-E0E0E0-252732-1B1A23-A6A4F0-C13333-303030

// Show palette for dark hlh mode
// https://coolors.co/040f00-1e2b00-1d5b00-cad877-e7edab

const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
  backgrounds: colorsLight,
  borders: {
    colors: colorsLight,
    radius: [4, 16],
    widths: [1, 2],
  },
  colors: colorsLight,
  fonts: {
    colors: colorsLight,
    sizes,
  },
  gutters: sizes,
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
