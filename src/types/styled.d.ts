import { Theme } from '@/styles/theme'
import type { CSSProp } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
