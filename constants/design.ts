export const BorderRadius = {
  none: 0,
  rounded: 8,
  roundedSm: 4,
  roundedMd: 6,
  roundedLg: 12,
  roundedXl: 16,
  rounded2xl: 20,
  rounded3xl: 24,
  roundedFull: 9999,
} as const;

export const Spacing = {
  none: 0,
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  base: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
  '6xl': 80,
  '7xl': 96,
  '8xl': 128,
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
} as const;

export const FontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const LineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const Colors = {
  primary: '#F653A6',
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
} as const;
