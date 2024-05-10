'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

interface StyledTitleProps {
  fontSize?: number
  fontWeight?: 300 | 400 | 700 | 800
  textAlign?: 'left' | 'center' | 'right'
}
interface DialogTitleProps
  extends DialogPrimitive.DialogTitleProps,
    StyledTitleProps {}

const StyledTitle = styled(DialogPrimitive.Title)<StyledTitleProps>`
  margin: 0;
  color: black;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 800)};
  padding: 0 20px;
  text-align: ${(props) => props.textAlign ?? 'left'};
`

const DialogTitle = ({ children, textAlign, ...props }: DialogTitleProps) => {
  return (
    <StyledTitle textAlign={textAlign} {...props}>
      {children}
    </StyledTitle>
  )
}

export default DialogTitle
