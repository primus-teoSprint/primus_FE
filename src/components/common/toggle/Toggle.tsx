'use client'

import * as Switch from '@radix-ui/react-switch'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

const Toggle = () => {
  return (
    <Switch.Root className="SwitchRoot" id="airplane-mode">
      <Switch.Thumb className="SwitchThumb" />
    </Switch.Root>
  )
}

export default Toggle
