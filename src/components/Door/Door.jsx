import React from 'react'
import styled, { keyframes } from 'styled-components'

const openDoor = keyframes`
  from {
    transform: skewY(0) translateY(0);
  }

  to {
    transform: skewY(45deg) translateY(50%);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  animation: 1s ${openDoor} infinite alternate;
`

const Handle = styled.div`
  width: 8%;
  height: 80%;
  background-color: #f1f1f1;
  position: absolute;
  right: 8%;
  top: 10%;
  box-shadow: 5px 5px 5px gray;
`

class Door extends React.Component {
  render() {
    return (
      <Container>
        <Handle />
      </Container>
    )
  }
}

export default Door
