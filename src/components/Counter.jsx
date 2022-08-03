import React from 'react'
import styled from 'styled-components'

const CounterBox = styled.div`
  padding: 20px 0;
  background-color: ${props => props.theme.accentColor};
  min-width: 320px;
  margin-bottom: 60px;
`

const CounterState = styled.h1`
  font-size: 32px;
  text-align: center;
`;
const CounterBtnBox = styled.div`
  margin: 0 -10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const CounterBtn = styled.button`
  width: 64px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-size: 24px;
  font-weight:500;
  margin: 0 10px;
  background:${props => props.theme.textColor};
`

const Counter = (
  {number, onIncrease, onDecrease}
  ) => {
  return (
    <>
    <CounterBox>
      <CounterState>{number}</CounterState>
      <CounterBtnBox>
        <CounterBtn onClick={onIncrease}>+1</CounterBtn>
        <CounterBtn onClick={onDecrease}>-1</CounterBtn>
      </CounterBtnBox>
    </CounterBox>
    </>
  )
}

export default Counter