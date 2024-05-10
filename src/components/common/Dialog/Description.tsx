'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

interface StyledDescriptionProps {
  fontSize?: number
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800
}
interface DialogDescriptionProps
  extends DialogPrimitive.DialogDescriptionProps,
    StyledDescriptionProps {}

const StyledDescription = styled(
  DialogPrimitive.Description,
)<StyledDescriptionProps>`
  margin: 0;
  color: black;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: 1.5;
  padding: 0 20px;
`

const DialogDescription = ({ children, ...props }: DialogDescriptionProps) => {
  return <StyledDescription {...props}>{children}</StyledDescription>
}

export default DialogDescription
