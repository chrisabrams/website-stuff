import React from 'react'
import styled from 'styled-components'

const Intro = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0 0;
`

const Text = styled.span`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 100%;
  font-weight: 300;
  font-size: 46px;
  justify-content: center;
  max-width: 100%;
`

export default (props) => (
  <Intro>
    <Text>{props.children}</Text>
  </Intro>
)

export const SubText = styled.span`
  display: flex;
  max-width: 100%;
`
