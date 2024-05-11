'use client'

import { theme } from '@/styles/theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled, { css } from 'styled-components'

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

const DialogDescriptionSizes: DialogDescriptionSize = {
  small: {
    fontSize: '12px',
  },
  medium: {
    fontSize: '14px',
  },
  large: {
    fontSize: '16px',
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
  color: black;
  line-height: 150%;
  letter-spacing: -0.05em;
  /* size */
  ${sizeStyles}
  /* theme */
  ${themeStyles}
`

const DialogDescription = ({ children, ...props }: DialogDescriptionProps) => {
  return <StyledDescription {...props}>{children}</StyledDescription>
}
DialogDescription.defaultProps = {
  size: 'small',
  theme: 'primary',
}

export default DialogDescription
