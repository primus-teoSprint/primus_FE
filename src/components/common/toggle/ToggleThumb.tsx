'use client'

import * as Switch from '@radix-ui/react-switch'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

const StyledThumb = styled(Switch.SwitchThumb)`
  display: block;
  width: 25px;
  height: 25px;
  background-color: ${theme.color.white};
  border-radius: 9999px;
  transition: transform 300ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(30px);
  }
`

const ToggleThumb = ({ ...props }: Switch.SwitchThumbProps) => {
  return <StyledThumb {...props} />
}

export default ToggleThumb
