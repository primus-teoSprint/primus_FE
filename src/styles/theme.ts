export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#FFE90F',
    purple100: '#f3f4ff',
    purple700: '#6c76f4',
    grey100: '#fbfbfb',
    grey200: '#eeeeee',
    grey300: '#ECECEC',
    grey400: '#D9D9D9',
    grey500: '#c9c9c9',
    grey600: '#9f9f9f',
    grey700: '#989898',
    red: '#ff0000',
  },
  fontWeight: {
    light: 300,
    normal: 400, // regular
    bold: 700,
    extraBold: 800,
  },
  NanumFontFamily: {
    light: 'NanumSquareLight',
    normal: 'NanumSquare', // regular
    bold: 'NanumSquareBold',
    extraBold: 'NanumSquareExtraBold',
  },
} as const

export type Theme = typeof theme
