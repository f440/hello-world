import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import { mediaQuery } from '../../themes'
import { useStoredScroll } from '../hooks/useStoredScroll'

const MIN_OPACITY = 0.4

const getCalculatedOpacity = (scrollY: number) => {
  const halfInnerHeight = innerHeight / 2
  const opacityRange = 1 - MIN_OPACITY
  const scrollRange = opacityRange / halfInnerHeight
  const y = -(scrollY - halfInnerHeight * 3)
  const scroll = innerHeight - y
  const amount = scroll * scrollRange

  return 1 - amount
}

export const EyeCatchEffects = () => {
  const { y } = useStoredScroll()
  let opacity: number

  if (y < innerHeight / 2) {
    opacity = 1
  } else if (y > innerHeight) {
    opacity = MIN_OPACITY
  } else {
    opacity = getCalculatedOpacity(y)
  }

  return (
    <>
      <Underlay opacity={opacity} />
      <ScrollIcon>SCROLL</ScrollIcon>
    </>
  )
}

const scroll = keyframes`
  0% {
    bottom: 80px;
    height: 0px;
  }

  40% {
    bottom: 0px;
    height: 80px;
  }

  60% {
    bottom: 0px;
    height: 80px;
  }

  100% {
    bottom: 0px;
    height: 0px;
  }
`

const Underlay = styled.div<{ opacity: number }>`
  ${({ opacity }) => {
    return css`
      opacity: ${opacity};
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(/images/mv.png);
      background-size: cover;
      background-attachment: fixed;
      background-position: top;

      ${mediaQuery.smallStyle(css`
        background-image: url(/images/mv_sp.png);
      `)}
    `
  }}
`
const ScrollIcon = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  height: 104px;
  color: #e1e1e1;
  &::before {
    display: block;
    bottom: 0;
    content: '';
    position: absolute;
    width: 1px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #797979;
  }
  &::after {
    display: block;
    bottom: 56px;
    content: '';
    position: absolute;
    width: 3px;
    height: 0px;
    animation: ${scroll} 1s infinite ease-in;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ebebeb;
  }
`
