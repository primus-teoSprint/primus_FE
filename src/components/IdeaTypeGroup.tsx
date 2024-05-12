'use client'

import React from 'react'
import { ToggleGroupItem, ToggleGroupRoot } from './common/ToggleGroup'
import { typeDatas } from '@/constants/idea'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { useAtom } from 'jotai'
import { selectedIdeaTypeAtom } from '@/store/atoms/idea'

const StyledToggleGroupRoot = styled(ToggleGroupRoot)`
  display: grid;
  grid-template-columns: repeat(5, 60px);
  row-gap: 4px;
  column-gap: 4px;
  justify-content: center;
`
const StyledToggleGroupItem = styled(ToggleGroupItem)`
  /* 기본 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 24px;
  font-size: 0.8125rem;
  font-weight: ${theme.fontWeight.bold};
  color: #767676;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.grey500};
  border-radius: 12px;
  cursor: pointer;

  /* 선택 시 스타일 */
  &[data-state='on'] {
    background-color: ${theme.color.purple700};
    color: ${theme.color.white};
    border: none;
  }
`

/**
 *
 * @returns
 */
const IdeaTypeGroup = () => {
  const [value, setValue] = useAtom(selectedIdeaTypeAtom)

  return (
    <StyledToggleGroupRoot
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value)
      }}
    >
      {typeDatas.map((content, idx) => (
        <StyledToggleGroupItem key={`${content}-${idx}`} value={content}>
          {content}
        </StyledToggleGroupItem>
      ))}
    </StyledToggleGroupRoot>
  )
}

export default IdeaTypeGroup
