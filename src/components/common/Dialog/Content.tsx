'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

const StyledContent = styled(DialogPrimitive.Content)`
  /* 기본값 */
  position: relative;
  background-color: white;
  border-radius: 14px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 360px;
  min-height: 320px;
  max-height: 85vh;
  padding: 60px 20px 54px;
  outline: none;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const DialogContent = ({
  children,
  ...props
}: DialogPrimitive.DialogContentProps) => {
  return <StyledContent {...props}>{children}</StyledContent>
}

export default DialogContent
