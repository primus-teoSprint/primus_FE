'use client'

import { theme } from '@/styles/theme'
import { ButtonAttributes, Status } from '@/types/button'
import { Ref, forwardRef } from 'react'
import styled from 'styled-components'

/**
 * @description 기본 버튼입니다.
 * @description status를 통해 활성화 버튼 (보라색 배경), 비활성화 버튼 (회색 배경)을 설정할 수 있습니다.
 */

interface ButtonProps extends ButtonAttributes {
  name: string
  status?: Status
}

const Button = forwardRef(function Button(
  { name, type = 'button', status = 'Enabled', ...rest }: ButtonProps,
  forwardedRef: Ref<HTMLButtonElement>,
) {
  return (
    <StyledWrapper type={type} ref={forwardedRef} status={status} {...rest}>
      <span>{name}</span>
    </StyledWrapper>
  )
})

export default Button

const StyledWrapper = styled.button<Pick<ButtonProps, 'status'>>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ status }) =>
    status === 'Disabled' ? theme.color.grey500 : theme.color.purple700};
  color: ${theme.color.white};
  width: 353px;
  height: 40px;
  border-radius: 12px;

  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.bold};
`
