'use client'

import LayoutRegistry from '@/_components/Layout'
import ReactQueryProviders from '@/_components/providers/ReactQueryProviders'
import GlobalStyle from '@/_styles/GlobalStyle'
import { theme } from '@/_styles/theme'
import { ThemeProvider } from 'styled-components'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProviders>
      <LayoutRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LayoutRegistry>
    </ReactQueryProviders>
  )
}

export default Providers
