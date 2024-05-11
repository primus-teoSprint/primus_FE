'use client'

import React from 'react'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../common/Dialog'
import styled from 'styled-components'
import { FaX } from 'react-icons/fa6'

const IdeaOutlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
`
const MarketFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 34px;
`
const StyledBottomBtn = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 28px;
  width: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.grey500};
  background-color: ${(props) => props.theme.color.grey200};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
const StyleBottomClosedBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 360px;
  background-color: ${(props) => props.theme.color.purple700};
  color: ${(props) => props.theme.color.white};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  &:hover {
    cursor: pointer;
  }
`

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const IdeaOutline = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <button>버튼</button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <IdeaOutlineContainer>
            <DialogTitle size="medium">아이디어 개요</DialogTitle>
            <DialogDescription>
              해당 파트는 자신이 생각하는 아이디어를 마음껏 펼쳐보는 시간입니다.
              아이디어를 펼치기 전 시장 실패의 법칙에 대해 알아볼까요?
            </DialogDescription>
          </IdeaOutlineContainer>
          <MarketFailureContainer>
            <DialogTitle size="small">시장 실패의 법칙</DialogTitle>
            <StyledDescriptionWrapper>
              <DialogDescription>
                실패(Fail)는 출시(Launch), 운영(Operation) 또는 전제(Premise)
                때문입니다.
              </DialogDescription>
              <DialogDescription>
                코카콜라나 디즈니, 구글처럼 전 세계에서 가장 성공한 기업들 조차
                신제품이 시장에서 실패하는 이유는 3번째 요인, 전제(Premise)
                때문입니다.
              </DialogDescription>
              <DialogDescription>
                아무리 디자인이 뛰어나고 엔지니어링이 절묘하고 마케팅이 화려해도
                ‘안 될 놈’이 실패라는 괴수에 잡아먹히는 것을 막을 수 없습니다.
              </DialogDescription>
              <DialogDescription>
                아이디어의 불패 법칙은 ‘유능하게 실행 했을 경우 성공할 아이디어’
                즉, 될놈을 찾아 나서는 과정입니다.
              </DialogDescription>
            </StyledDescriptionWrapper>
          </MarketFailureContainer>
          <DialogClose asChild>
            <StyledBottomBtn>
              <FaX size={12} />
            </StyledBottomBtn>
          </DialogClose>
          <DialogClose asChild>
            <StyleBottomClosedBtn>닫기</StyleBottomClosedBtn>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}

export default IdeaOutline
