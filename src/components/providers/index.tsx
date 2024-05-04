'use client'

import LayoutRegistry from '@/components/Layout'
import ReactQueryProviders from '@/components/providers/ReactQueryProviders'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/styles/theme'
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
