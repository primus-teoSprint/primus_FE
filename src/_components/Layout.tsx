'use client'

import { theme } from '@/_styles/theme'
import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import styled, { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const LayoutRegistry = ({ children }: { children: React.ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()

    return <>{styles}</>
  })

  if (typeof window !== 'undefined')
    return <StyledWrapper>{children}</StyledWrapper>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyleSheetManager>
  )
}

export default LayoutRegistry

const StyledWrapper = styled.main`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  background-color: ${theme.color.white};
`
