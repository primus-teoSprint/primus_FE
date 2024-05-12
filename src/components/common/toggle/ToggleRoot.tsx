'use client'

import * as Switch from '@radix-ui/react-switch'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

const StyledRoot = styled(Switch.Root)`
  width: 58px;
  height: 31px;
  background-color: ${theme.color.grey200};
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &[data-state='checked'] {
    background-color: ${theme.color.purple700};
  }
`

const ToggleRoot = ({ children, ...props }: Switch.PrimitiveButtonProps) => {
  return <StyledRoot {...props}>{children}</StyledRoot>
}

export default ToggleRoot
