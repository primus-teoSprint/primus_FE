export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#FFE90F',
    purple100: '#f3f4ff',
    purple700: '#6c76f4',
    grey100: '#fbfbfb',
    grey300: '#ECECEC',
    grey500: '#D9D9D9',
    grey700: '#989898',
  },
  fontWeight: {
    light: 300,
    normal: 500,
    bold: 700,
    extraBold: 900,
  },
} as const

export type Theme = typeof theme
