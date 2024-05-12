'use client'

import { theme } from '@/styles/theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled, { css } from 'styled-components'

const DialogTitleSizes: DialogTitleSize = {
  small: {
    fontSize: '1rem',
    fontFamily: theme.NanumFontFamily.bold,
  },
  medium: {
    fontSize: '1.25rem',
    fontFamily: theme.NanumFontFamily.extraBold,
  },
  large: { fontSize: '2rem', fontFamily: theme.NanumFontFamily.extraBold },
}

const DialogTitleSizeStyles = css<StyledTitleProps>`
  ${({ size }) => css`
    font-size: ${DialogTitleSizes[size].fontSize};
    font-family: ${DialogTitleSizes[size].fontFamily};
  `}
`

const StyledTitle = styled(DialogPrimitive.Title)<StyledTitleProps>`
  line-height: 140%;
  letter-spacing: -0.05em;
  color: ${theme.color.black};

  ${DialogTitleSizeStyles}
`

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

const DialogTitle = ({ children, ...props }: DialogTitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}
DialogTitle.defaultProps = {
  size: 'medium',
}

export default DialogTitle
