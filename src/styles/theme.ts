export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#FFE90F',
    purple100: '#f3f4ff',
    purple700: '#6c76f4',
    grey100: '#fbfbfb',
  },
  fontWeight: {
    light: 300,
    normal: 500,
    bold: 700,
  },
} as const

export type Theme = typeof theme
