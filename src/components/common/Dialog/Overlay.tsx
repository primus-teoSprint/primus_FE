'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const DialogOverlay = ({
  children,
  ...props
}: DialogPrimitive.DialogOverlayProps) => {
  return <StyledOverlay {...props}>{children}</StyledOverlay>
}

export default DialogOverlay
