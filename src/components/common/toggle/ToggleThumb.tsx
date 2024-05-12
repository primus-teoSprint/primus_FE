'use client'

import * as Switch from '@radix-ui/react-switch'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

const StyledThumb = styled(Switch.SwitchThumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: ${theme.color.white};
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--black-a7);
  transition: transform 300ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`

const ToggleThumb = ({ ...props }: Switch.SwitchThumbProps) => {
  return <StyledThumb {...props} />
}

export default ToggleThumb
