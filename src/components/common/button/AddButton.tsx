'use client'

import { theme } from '@/styles/theme'
import { ButtonAttributes } from '@/types/button'
import styled from 'styled-components'

/**
 * @description 추가 버튼입니다.
 */

interface ButtonProps extends ButtonAttributes {
  onClick?: () => void
}

const AddButton = ({ onClick }: ButtonProps) => {
  return (
    <StyledWrapper type="button" onClick={onClick}>
      {`+`}추가하기
    </StyledWrapper>
  )
}

export default AddButton

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.purple700};
  color: ${theme.color.white};
  width: 350px;
  height: 35px;
  border-radius: 15px;

  font-size: 0.95rem;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
`
