'use client'

import { theme } from '@/styles/theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled, { css } from 'styled-components'

interface DialogTitleSize {
  [key: string]: {
    fontSize: string
    fontFamily?: string
  }
}

/**
 * **size** : small, medium(default), large
 */
interface StyledTitleProps {
  size: string
}
interface DialogTitleProps
  extends DialogPrimitive.DialogTitleProps,
    StyledTitleProps {}

const DialogTitleSizes: DialogTitleSize = {
  small: {
    fontSize: '16px',
    fontFamily: theme.NanumFontFamily.bold,
  },
  medium: {
    fontSize: '20px',
    fontFamily: theme.NanumFontFamily.extraBold,
  },
  large: { fontSize: '32px', fontFamily: theme.NanumFontFamily.extraBold },
}

const DialogTitleSizeStyles = css<StyledTitleProps>`
  ${({ size }) => css`
    font-size: ${DialogTitleSizes[size].fontSize};
    font-family: ${DialogTitleSizes[size].fontFamily};
  `}
`

const StyledTitle = styled(DialogPrimitive.Title)<StyledTitleProps>`
  color: ${(props) => props.theme.color.black};

  ${DialogTitleSizeStyles}
`

const DialogTitle = ({ children, ...props }: DialogTitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}
DialogTitle.defaultProps = {
  size: 'medium',
}

export default DialogTitle
