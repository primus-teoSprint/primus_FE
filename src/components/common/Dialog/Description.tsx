'use client'

import { theme } from '@/styles/theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled, { css } from 'styled-components'

const DialogDescriptionSizes: DialogDescriptionSize = {
  small: {
    fontSize: '0.75rem',
  },
  medium: {
    fontSize: '0.875rem',
  },
  large: {
    fontSize: '1rem',
  },
}
const DialogDescriptionThemes: DialogDescriptionTheme = {
  primary: {
    color: theme.color.black,
  },
  red: {
    color: theme.color.red,
  },
}

const sizeStyles = css<StyledDescriptionProps>`
  ${({ size }) => css`
    font-size: ${DialogDescriptionSizes[size].fontSize};
  `}
`
const themeStyles = css<StyledDescriptionProps>`
  ${({ theme }) => css`
    color: ${DialogDescriptionThemes[theme].color};
  `}
`

const StyledDescription = styled(
  DialogPrimitive.Description,
)<StyledDescriptionProps>`
  /* 기본값 */
  margin: 0;
  color: ${theme.color.black};
  line-height: 120%;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  /* size */
  ${sizeStyles}
  /* theme */
  ${themeStyles}
`

interface DialogDescriptionSize {
  [key: string]: {
    fontSize: string
    padding?: string
  }
}
interface DialogDescriptionTheme {
  [key: string]: {
    color: string
    backgroundColor?: string
    bolderColor?: string
  }
}

/**
 * **size**: large, medium, small(default)
 *
 * **theme**: primary(default), color
 */
interface StyledDescriptionProps {
  size: string
  theme: string
}
interface DialogDescriptionProps
  extends DialogPrimitive.DialogDescriptionProps,
    StyledDescriptionProps {}

const DialogDescription = ({ children, ...props }: DialogDescriptionProps) => {
  return <StyledDescription {...props}>{children}</StyledDescription>
}
DialogDescription.defaultProps = {
  size: 'small',
  theme: 'primary',
}

export default DialogDescription
