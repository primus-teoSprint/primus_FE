'use client'

import { theme } from '@/styles/theme'
import { ButtonAttributes, Status } from '@/types/button'
import { Ref, forwardRef } from 'react'
import styled from 'styled-components'

/**
 * @description 기본 버튼입니다.
 * @description status를 통해 활성화 버튼 (보라색 배경), 비활성화 버튼 (회색 배경)을 설정할 수 있습니다.
 * @description modal에 사용될 경우 modal을 작성하면 border-radius 스타일이 변경됩니다.
 */

interface ButtonProps extends ButtonAttributes {
  status?: Status
  modal?: true | false
}

const Button = forwardRef(function Button(
  {
    children,
    type = 'button',
    status = 'Enabled',
    modal = false,
    ...rest
  }: ButtonProps,
  forwardedRef: Ref<HTMLButtonElement>,
) {
  return (
    <StyledWrapper
      type={type}
      ref={forwardedRef}
      status={status}
      modal={modal}
      {...rest}
    >
      {children}
    </StyledWrapper>
  )
})

export default Button

const StyledWrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ status }) =>
    status === 'Disabled' ? theme.color.grey500 : theme.color.purple700};
  color: ${theme.color.white};
  width: 350px;
  height: 43px;

  border-radius: ${({ modal }) => (modal ? '0px' : '12px')};

  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
`
