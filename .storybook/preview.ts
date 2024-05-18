import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import GlobalStyle from '../src/styles/GlobalStyle'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle
  })
]

export default preview
