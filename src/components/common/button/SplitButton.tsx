'use client'

import { theme } from '@/styles/theme'
import { BgColor, ButtonAttributes } from '@/types/button'
import { Ref, forwardRef } from 'react'
import styled from 'styled-components'

/**
 * @description 기본 버튼의 절반 크기의 버튼입니다.
 * @description background를 통해 보라색 테마, 회색 테마를 설정할 수 있습니다.
 */

interface ButtonProps extends ButtonAttributes {
  background: BgColor
}

const SplitButton = forwardRef(function Button(
  { children, type = 'button', background, ...rest }: ButtonProps,
  forwardedRef: Ref<HTMLButtonElement>,
) {
  return (
    <StyledWrapper
      type={type}
      ref={forwardedRef}
      background={background}
      {...rest}
    >
      {children}
    </StyledWrapper>
  )
})

export default SplitButton

const StyledWrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ background }) =>
    background === 'grey' ? theme.color.grey300 : theme.color.purple700};
  color: ${({ background }) =>
    background === 'grey' ? theme.color.grey700 : theme.color.white};
  width: 180px;
  height: 49px;
  border-radius: 5px;

  font-size: 0.95rem;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
`
