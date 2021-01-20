import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
  height: 50vw;
  margin: 5vw auto;
  border-top: 30px solid lightgray;
  border-bottom: 30px solid lightgray;
  border-left: 8px solid lightgray;
  border-right: 8px solid lightgray;
  display: flex;
  border-radius: 8px;
`

const DoorContainer = styled.div`
  width: 75%;
  height: 100%;
`

const PanelContainer = styled.div`
  width: 25%;
  height: 100%;
`

class Box extends React.Component {
  render() {
    return (
      <Container>
        <DoorContainer>{<this.props.Door />}</DoorContainer>
        <PanelContainer>{<this.props.Panel />}</PanelContainer>
      </Container>
    )
  }
}

export default Box
